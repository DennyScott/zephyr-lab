Alright, kind of left on a half way point and left the code for a couple days, so lets quickly go over what's been done and what still needs to be changed.

## What Been Done
- Zephyr now compiles into a dll.
- Added C# 6 support to a Unity Project
- Built mock classes into EventSystem to cover UnityEngine's classes for testing
- Refactored some of the MonoBehaviourAdditions package to use arrays instead of lists.


## What Needs To Be Done
- Add c# support to Zephyr.
- Add Tests to Singletons and MonoBehaviourAdditions
- Mock UnityEngine in Singletons and MonoBehaviours
- Rename MonoBehaviourAdditions, cause the name suck.  Maybe AdvancedMonoBehaviour?
- Check what can be done in the UnityExtensions package.
- Turn the new arrays in MonoBehaviourAdditions into its own class and structure to clean up the runner.

Well that looks to be it for now, so lets see what we can do!

I'm going to first off finish up of MonoBehaviourAdditions package.  Let's get back to the AdvancedMonoBehaviours and extract that array into its own class setup with its own tests.

I actually set up a ton of bench-marking tests, and then tested the array vs unity default update.  Now, this was done on a computer with top of line hardware, and the only difference I saw was about a 1% gain on using the arrays.  Now, the other tests I've seen was on Mobile, which I don't feel like setting up at this time, so for now, we'll just leave these where they are.  Here is the code as it stands.

```
using System;
using UnityEngine;
using Zephyr.CustomMonoBehaviours.UpdateContainers;
using Zephyr.MonoBehaviourAdditions;
using Zephyr.Singletons;

namespace Zephyr.CustomMonoBehaviours
{
    /// <summary>
    /// In charge of running the update loop.  This update loop is more efficient then the unity built update loop.  Later this class should be extended to include high priority update items adnd such to cusomize the level of priority
    /// items in the update loop have.
    /// </summary>
    public class AdvancedMonoBehvaiourRunner : SingletonAsComponent<AdvancedMonoBehvaiourRunner>
    {
        #region Private Attributes

        private IUpdateContainer _updateContainer = new ArrayUpdateContainer();

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
            _updateContainer.Add(obj);
            obj.OnAwake();
            obj.OnStart();
        }

        /// <summary>
        /// Unregisters an update-able component from the update loop
        /// </summary>
        /// <param name="obj">The object to remove from the Update loop</param>
        public bool UnregisterUpdateableObject(IUpdateable obj)
        {
            return _updateContainer.Remove(obj);
        }


        /// <summary>
        /// Updates once a frame.
        /// </summary>
        public void Update()
        {
            _updateContainer.Update(Time.deltaTime);
        }

        #endregion

        #region Inherited Members

        /// <summary>
        /// Called when this object is destroyed.
        /// </summary>
        protected override void OnDestroy()
        {
            base.OnDestroy();
            _updateContainer.OnDestroy();
            _updateContainer = null;
        }

        #endregion
    }
}
```

```
using System;

namespace Zephyr.CustomMonoBehaviours.UpdateContainers
{
    public class ArrayUpdateContainer : IUpdateContainer
    {
        public int Count { get; private set; }

        private const int UpdateableSize = 200;
        private const int UpdateableScaleFactor = 2;
        private const float CleanupThreshold = 0.10f;


        private IUpdateable[] _updateableObjects = new IUpdateable[UpdateableSize];
        private int _index;
        private int _cleanupAmount = (int) (UpdateableSize*CleanupThreshold);

        public void Add(IUpdateable updateable)
        {
            if (_index == _updateableObjects.Length - 1)
                ResizeArray();


            _updateableObjects[_index] = updateable;
            _index++;
            Count++;
        }

        private void ResizeArray()
        {
            Array.Resize(ref _updateableObjects, _updateableObjects.Length*UpdateableScaleFactor);
            _cleanupAmount = (int) (_updateableObjects.Length*CleanupThreshold);
        }

        public bool Remove(IUpdateable updateable)
        {
            for (var i = 0; i < _index; i++)
            {
                if (_updateableObjects[i] != updateable) continue;

                _updateableObjects[i] = null;
                Count--;
                return true;
            }
            return false;
        }

        public void Update(float deltaTime)
        {
            for (var i = 0; i < _updateableObjects.Length; i++)
                if (_updateableObjects[i] != null)
                    _updateableObjects[i].OnUpdate(deltaTime);

            CheckForCleanup();
        }

        public void OnDestroy()
        {
            _updateableObjects = null;
        }

        private void CheckForCleanup()
        {
            if (_index - Count >= _cleanupAmount)
                CleanUpUpdateables();
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
                if (_updateableObjects[i] == null)
                    return _index;

            return -1;
        }
    }
}
```

Lets leave the ArrayUpdateContainer for now then, and maybe check out the singletons package quick.  I updated the SimpleSingleton class to now create an insstance if it does not exist and not destroy on load.  Tomorrow, I will test this class.

```
using UnityEngine;
using Zephyr.CustomMonoBehaviours;


namespace Zephyr.Singletons
{
    /// <summary>
    /// A simple singleton.  This singleton will not exist through scenes, and will not create itself if it does not exist.
    /// </summary>
    /// <typeparam name="T">The type of singleton</typeparam>
    public class SimpleSingleton<T> : AdvancedMonoBehaviour where T : MonoBehaviour
    {
        private static T _innerInstance;

        public static bool IsAlive => _innerInstance != null;

        /// <summary>
        /// Returns the instance of this singleton.
        /// </summary>
        public static T Instance
        {
            get
            {
                if (_innerInstance != null)
                    return _innerInstance;

                _innerInstance = FindObjectOfType<T>();

                if (_innerInstance != null) return _innerInstance;

                if (Debug.isDebugBuild)
                    Debug.LogWarning("An instance of " + typeof(T) + " is needed in the scene, but there is none.");

                CreateNewSingleton();

                return null;
            }
        }

        private static void CreateNewSingleton()
        {
            var componentType = typeof(T);

            var go = new GameObject(componentType + "", componentType);
            _innerInstance = go.GetComponent<T>();

            DontDestroyOnLoad(go);
        }

        protected override void OnDestroy()
        {
            base.OnDestroy();
            _innerInstance = null;
        }
    }
}
```

Thats it for tonight though.  Night!
