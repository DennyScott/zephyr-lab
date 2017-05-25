Alright, so yesterday we left off with Denny getting the DLL running in unity and getting c# 6 support running in Unity.  Today, I'm on holidays, so I'm going to spend some time today first seeing if I can mock Unity's classes when outside Unity, and then just seeing if I can do some code refactoring.  This will be a bit nicer as I'll be able to show code this time.

So, I needed to add a few extra classes to the code that only show up in unit testing.  these classes look like this.

```
#if UNIT_TEST
 public class Debug
        {
            public static void Log(string s)
            {
                Console.WriteLine(s);
            }

            public static void LogWarning(string s)
            {
                Console.WriteLine(s);
            }

            public static void LogError(string s)
            {
                Console.WriteLine(s);
            }

            public static bool isDebugBuild = true;
        }

        public class Time
        {
            public static float deltaTime = 0.1f;
        }

        public class MonoBehaviour
        {
        }
#endif
```

These classes are basically just mocking the endpoints of unity.  These are need for unit testing and cannot be mocked using spies or N Substitute because the problem is actually that Unity locks me out of being able to use the UnityEngine.dll when not in unity, so these just cover for it when were not running in the unity editor.  Let's just add a little bit of processors directives to smooth it out.

```
#if UNIT_TEST
using System;
#else
using UnityEngine;
#endif
```

Okay, so that looks like its done the trick, all the tests pass.  Ill get Denny to rebuild the dll when he gets home later.  For now let's move to some refactoring, since we can use the tests to make sure it still works without needing to build the DLL.

First thing I notice is that the AdvancedMonoBehaviour package is actually not tested, and neither is the Singletons package.  Well, I think Ill start with the AdvancedMonoBehaviours class, and move on from there.

The AdvancedMonoBehaviour package is meant to improve performance by stripping away of needing to use the reflection call of Update and turning it into a virtual method called by a central runner.  I saw it in the book [Unity 5 Game Optimization](https://www.amazon.ca/gp/product/1785884581/ref=oh_aui_detailpage_o07_s00?ie=UTF8&psc=1) by Chris Dickinson.  I haven't used it much myself to be honest, I just thought it looked fun to write, but I have no benchmarks.

I also have become more interested in this concept after reading [Unity's 1000 Update Blog](http://blogs.unity3d.com/2015/12/23/1k-update-calls/).  Also it just sounds cool cause I love having the control of the updating myself.  I always battle between something like LibGDX and Unity because LibGDX has so much more of that sweet sweet control, and this at least gets me a small step closer.  Well anyways, lets check it out.

```
using UnityEngine;

namespace Zephyr.MonoBehaviourAdditions
{
    public class AdvancedMonoBehaviour : MonoBehaviour, IUpdateable, IStartable
    {
        /// <summary>
        /// Runs on Start for all objects.
        /// </summary>
        private void Start()
        {
            OnStart();
            AdvanceMonoBehvaiourRunner.Instance.RegisterUpdateableObject(this);
        }

        /// <summary>
        /// Runs when the gameobject or this component is destroyed.
        /// </summary>
        protected virtual void OnDestroy()
        {
            if (AdvanceMonoBehvaiourRunner.IsAlive)
                AdvanceMonoBehvaiourRunner.Instance.UnregisterUpdateableObject(this);
        }

        /// <summary>
        /// Used to enter the update loop.  Anything within this method will be called once a frame.
        /// </summary>
        /// <param name="delta"></param>
        public virtual void OnUpdate(float delta) { }

        /// <summary>
        /// Must be used instead of Start in an AdvancedMonobehaviour.  Acts in the place of start.
        /// </summary>
        public virtual void OnStart() { }
    }
}

```

So as you can see, there's not a lot of room on this to refactor, that will come more in the game runner, but this is the general usage.  Lets now take a look at the AdvanceMonoBehvaiourRunner.

```
using System.Collections.Generic;
using UnityEngine;
using Zephyr.Singletons;

namespace Zephyr.MonoBehaviourAdditions
{

    /// <summary>
    /// In charge of running the update loop.  This update loop is more efficient then the unity built update loop.  Later this class should be extended to include high priority update items cusomize the level of priority
    /// items in the update loop have.
    /// </summary>
    public class AdvanceMonoBehvaiourRunner : SingletonAsComponent<AdvanceMonoBehvaiourRunner>
    {
        public static AdvanceMonoBehvaiourRunner Instance { get { return (AdvanceMonoBehvaiourRunner) _Instance; } set { _Instance = value; } }

        private List<IUpdateable> _updateableObjects = new List<IUpdateable>();

        /// <summary>
        /// Registers an updateable object into the Update loop
        /// </summary>
        /// <param name="obj">The object to register into the update loop</param>
        public void RegisterUpdateableObject(IUpdateable obj)
        {
            if (!_updateableObjects.Contains(obj))
                _updateableObjects.Add(obj);
        }

        /// <summary>
        /// Unregisters an updateable component from the update loop
        /// </summary>
        /// <param name="obj">The object to remove from the Update loop</param>
        public void UnregisterUpdateableObject(IUpdateable obj)
        {
            if (_updateableObjects.Contains(obj))
                _updateableObjects.Remove(obj);
        }

        /// <summary>
        /// Updates once a frame.
        /// </summary>
        private void Update()
        {
            var delta = Time.deltaTime;
            for (var i = 0; i < Instance._updateableObjects.Count; ++i)
                _updateableObjects[i].OnUpdate(delta);
        }
    }
}
```

That was the old version of the runner, lets look at our new version.

```
using System;
using UnityEngine;
using Zephyr.Singletons;

namespace Zephyr.MonoBehaviourAdditions
{
    /// <summary>
    /// In charge of running the update loop.  This update loop is more efficient then the unity built update loop.  Later this class should be extended to include high priority update items adnd such to cusomize the level of priority
    /// items in the update loop have.
    /// </summary>
    public class AdvancedMonoBehvaiourRunner : SingletonAsComponent<AdvancedMonoBehvaiourRunner>
    {
        #region Constants

        private const int UpdateableSize = 200;
        private const int UpdateableScaleFactor = 2;

        #endregion

        #region Private Attributes

        private IUpdateable[] _updateableObjects = new IUpdateable[UpdateableSize];
        private int _index;
        private float _timePassed;
        private bool _isNeedingCleanup;

        #endregion

        #region Properties

        public static AdvancedMonoBehvaiourRunner Instance
        {
            get { return (AdvancedMonoBehvaiourRunner) _Instance; }
            set { _Instance = value; }
        }

        #endregion

        #region Public Methods

        /// <summary>
        /// Registers an updateable object into the Update loop
        /// </summary>
        /// <param name="obj">The object to register into the update loop</param>
        public void RegisterUpdateableObject(IUpdateable obj)
        {
            AddNewUpdateable(obj);
            obj.OnAwake();
            obj.OnStart();
        }

        /// <summary>
        /// Unregisters an update-able component from the update loop
        /// </summary>
        /// <param name="obj">The object to remove from the Update loop</param>
        public bool UnregisterUpdateableObject(IUpdateable obj)
        {
            for (var i = 0; i < _index; i++)
            {
                if (_updateableObjects[i] != obj) continue;

                _updateableObjects[i] = null;
                _isNeedingCleanup = true;
                return true;
            }
            return false;
        }


        /// <summary>
        /// Updates once a frame.
        /// </summary>
        public void Update()
        {
            var delta = Time.deltaTime;
            for (var i = 0; i < Instance._updateableObjects.Length; i++)
                if (_updateableObjects[i] != null)
                    _updateableObjects[i].OnUpdate(delta);

            if (!_isNeedingCleanup) return;

            _timePassed += delta;

            if (_timePassed < 1) return;

            _timePassed = 0;
            CleanUpUpdateables();
        }

        #endregion

        #region Private Methods

        /// <summary>
        /// Adds a new updateable object to the updateables list.  If needed, it will also increase the size
        /// of the updateables array.
        /// </summary>
        /// <param name="obj">The updatable object to add to the array.</param>
        private void AddNewUpdateable(IUpdateable obj)
        {
            if (_index == _updateableObjects.Length - 1)
                Array.Resize(ref _updateableObjects, _updateableObjects.Length*UpdateableScaleFactor);

            _updateableObjects[_index] = obj;
            _index++;
        }

        /// <summary>
        /// Cleans up the Updateables by removing the empty references and moving the objects up the array for faster
        /// traversal and setting the new index.
        /// </summary>
        private void CleanUpUpdateables()
        {
            var placementIndex = FindFirstNull();

            if (placementIndex == -1) return;

            ShiftDownUpdateables(ref placementIndex);

            ClearRemainingUpdateables(placementIndex + 1);

            _index = placementIndex;
        }

        /// <summary>
        /// Clears all positions between the new Index and old index as all items have been squeezed downwards in
        /// the array.
        /// </summary>
        /// <param name="newIndex">The newIndex to clear from</param>
        private void ClearRemainingUpdateables(int newIndex)
        {
            for (var i = newIndex; i < _index; i++)
                _updateableObjects[i] = null;
        }

        /// <summary>
        /// Shifts all elements down the array to be at the start for faster traversal and memory management
        /// </summary>
        /// <param name="placementIndex">The position to start the moving down from.</param>
        private void ShiftDownUpdateables(ref int placementIndex)
        {
            for (var i = placementIndex + 1; i < _index; i++)
            {
                if (_updateableObjects[i] == null)
                    continue;

                _updateableObjects[placementIndex] = _updateableObjects[i];
                placementIndex++;
            }
        }

        /// <summary>
        /// Finds the first null in the updateable array and returns the index.
        /// </summary>
        /// <returns>The first null position.  If not found, returns -1.</returns>
        private int FindFirstNull()
        {
            for (var i = 0; i < _index; i++)
            {
                if (_updateableObjects[i] == null)
                    return _index;
            }
            return -1;
        }

        #endregion

        #region Inherited Members

        /// <summary>
        /// Called when this object is destroyed.
        /// </summary>
        protected override void OnDestroy()
        {
            base.OnDestroy();
            _updateableObjects = null;
        }

        #endregion
    }
}

```

Well, sorry cause its quite long now.  I think I'm going to split this guy up a bit, or at least interface it for ease to change later.  Basically, we now run using an array since we will be cycling over this array many times.  This is much faster with an array over a list.  So, to compensate taht, we make an array with a large amount of elements as null so we don't have to keep making larger arrays for some time, and an index that keeps track which element we are on.  Then, we double when we have hit the max to hopefully not need to make it again for some time.

We also have our own garbage collection going on that every second, cycles through the array, if needed, and clears out any nulls below the index, and then resets the index to the new number.

I think that will do for tonight, but the first thing we should do is make this cycling array its own data structure after to get it out of the runner.

Goodnight!
