## Introduction
When creating the code for Unity games, we as developers really want to code for 2 reasons beside having the game work. We want it to be as extendable and readable for other programmers as possible, and we want it as easy to use for our designers as well. There are obviously lots of things we do that does this for our game making buddies, but today I'm going to write about some of the easiest changes to make to your code that cheers everyone up.

#### Code Naming Standards
If you use Jetbrains awesome plugin Resharper for Visual Studio, you already probably live by the name standards, but for those that don't you can decide for yourself if you feel these naming conventions are desirable. First lets list them out:

Public Variables
```csharp
public GameObject Player;
```

private Variables
```chsarp
private Transform _transform;
```
protected Variables
```csharp
protected Rigidbody MyRigidbody;
```
Local Variables
```csharp
var bullet = Instantiate(BulletPrefab);
```
So public and protected members receive a capital at the beginning of the word, private members receive an underscore, and local members are declared with a lower case leading letter. You notice I used the var type when defining the bullet, just remember that if the bullet was declared with nothing initializing it, you would have to declare it as a GameObject. This naming convention lets us and others see where are variables are coming from when working with them in complicated algorithms.

#### Regions
This one is very much a personal taste. I hate having to dig deep through tons of methods and code that have no organization and are simply listed in the order the programmer declared them in. It happens to us all, but regions are great for allowing programmers to section off methods for specific reasons within a class. As a note to those who go through my code, I actually have another half of this partial class, its used to define and initialize the FSM that is created in here. Heres an example of regions:

```csharp
public partial class SelectionManager : Manager {

#region Public and Serialized Variables
public GameObject CurrentProduct {get; private set; } //The current product selected or held
#endregion

#region Action's and Func's
public Action OnDelete; //Actioned on a proper delete

#endregion

#region Private Variables
private ProductMovementManager _productMovementManager; //The product movement manager

#endregion

#region Selection States
public enum SelectionStates
{
    Idle,
    Held,
    Selected
}

private Fsm<SelectionStates, ConcreteState> _selectionStateFsm = new Fsm<SelectionStates, ConcreteState>();

public bool IsHeld
{
    get { return _selectionStateFsm.CurrentStateName == SelectionStates.Held; }
}
#endregion

#region Start Methods

///
/// Runs on Awake
///

void Awake()
{
    InitializeStates();
    _selectionStateFsm.SetCurrentState(SelectionStates.Idle);
}

///
/// Called on object start
///

void Start()
{
    _productMovementManager = ProductMovementManager.Instance;

    _productMovementManager.OnDropProduct += HandleOnDrop;
    _productMovementManager.OnPickUpProduct += HandleOnPickUp;
}

///
/// Called when the object is disabled
///

void OnDisable()
{
    _productMovementManager.OnDropProduct -= HandleOnDrop;
    _productMovementManager.OnPickUpProduct -= HandleOnPickUp;
}

#endregion

#region Event Handlers

///
/// Changes the state to Held when a product is picked up
///

///The gameobject picked up void HandleOnPickUp(GameObject go)
{
    _selectionStateFsm.CurrentState.OnPickUp(go);
}

///
/// Changes the state to idle when an item is dropped
///

///The gameobject dropped void HandleOnDrop(GameObject go)
{
    _selectionStateFsm.CurrentState.OnDrop(go);
}
#endregion

#region Inspector Methods

///
/// Returns the string of what state the selection manager is in
///

/// The string of what state the selection manager is in
public string StateString()
{
    return _selectionStateFsm.CurrentState.ToString();
}

#endregion
}

```

Upon closing the regions though, our code looks like this.

```csharp
public partial class SelectionManager : Manager
{
+ Public and Serialized Variables
+ Private Variables
+ Start Methods
+ Event Handlers
+ Inspector Methods
}

```

And we can open and close any section we want as coding. This allows us to really clean up what we are looking at while developing!

#### XML Docs
I personally use Visual Studio as I'm creating my C# scripts, but I do know that MonoDevelop also shares this functionality, which is that if you create the XML docs for your methods and classes, when the autocomplete selector comes up you will be able to see the descriptions of your written code. This is awesome for when you don't remember some of your less used functions and it allows other programmers see what your API does at a quick glance. These are so easy to make, it surprises me that so few people I've worked with actually use it. Lets take a look!

```csharp
///
/// Changes the state to idle when an item is dropped
///

///The gameobject dropped void HandleOnDrop(GameObject go)
{
    _selectionStateFsm.CurrentState.OnDrop(go);
}

```

If you write in three /// symbols your IDE will generally fill in most of the content you need when creating these docs. In this example, we write our summary first that others first see when calling our method, and then a simple description of the parameter that is going to be passed as well. If there was a return statement, you would also fill out that to say what your function returns. Super simple, and super helpful!

#### Tooltip
This one only seems to be tough because programmers always try to use the "self-documenting code" ideology that just never works, especially on some of the crazy named fields we use that our designers are left just wondering about. I believe code should be as readable as possible too, but self documenting to me has just never really worked. I personally enjoy commenting my fields at the top of my files, and I enjoy making sure my public or serialized fields have tooltips so my designers don't have to ask me what each field is. Let's look at how this super easy attribute is made.

```csharp
[Tooltip("The Weapon the player is currently using, as well as starts the level with")]
public GameObject CurrentWeapon;

```

A tooltip attribute is placed above that wanted field (or beside) and when hovered over in the inspector will give our designers and developers a better insight into what the field does without having to check the code or ask us.

#### Private, Public, Protected, or Property?
I have worked on projects with quite a few people, including those I would say are better Unity developers then I, but one common theme I see shared amongst most people is the reluctance to protect and manage variable visibility, as well as method visibility to be fair. More than anything, everything is public, and if the programmer gets fancy and doesn't want it to be in the inspector they use the HideInInspector attribute. This looks as follows:

```csharp
[HideInInspector]
public GameObject activeEnemy;

```

This is okay, of course if our designers shouldn't be messing with a field we need to take it out of the inspector, but using this attribute should only be used in very specific situations. Let's say activeEnemy field is only used within this class, then we should not be defining it like this. This field will now always appear in our autofinish menu and to any other developer this is a field they can just grab at all times, even if they shouldn't be. I'm going to quickly cover the different ways this field should be created depending on the circumstance.

**Used only within this class and should not be changed by designers**

private GameObject _activeEnemy;

**Used only within this class and should be changed by designers**

```csharp
[SerializeField]
private GameObject _activeEnemy;

```

**Can be accessed by other classes, but cannot be set anywhere and should not be changed by designers**

```csharp
public readonly GameObject ActiveEnemy;

```

**Can be accessed by other class, but is set purely this class, and should not be changed by designers.**

```csharp
public GameObject ActiveEnemy {get; private set;}

```

**Can be accessed by other class, but is set purely this class, and can be changed by designers.**

```csharp
[SerializeField]
private GameObject _activeEnemy
public GameObject ActiveEnemy
{
    get {return _activeEnemy;}
    private set {_activeEnemy = value;}
}

```

**Can be accessed and changed by any class, and should not be changed by designers, use either:**

```csharp
[HideInInspector]
public GameObject ActiveEnemy;

```

***or if you want the variable to still appear in the debug inspector***

```csharp
private GameObject _activeEnemy;
public GameObject ActiveEnemy
{
    get {return _activeEnemy;}
    set { _activeEnemy = value;}
}

```

**Lastly, the obvious if everything should be able to access and change the field, and designers should be able to access the variable**

```csharp
public GameObject ActiveEnemy;

```

As you can see from the listing, there can be so much care taken in the way fields are created that can help designers and programmers from doing things they can get in hot water for, such as accessing a field that shouldn't be public or changing the initial value in the inspector even though we as programmers should have hidden it.

As a note, if you are a user that uses Resharper and are receiving a warning about having non initialized fields for the private fields that are never assigned, you can either give them a default value, change them to protected fields, or turn off that warning.

#### Serializable classes
Using the SerializeField attribute is great for clearing our public field and method space and allows us to still have our designers be able to adjust the fields manually, there's still another way that may be considered a little cleaner. Lets take a very simple weapon script that attaches to a player and doesn't use an inheritance pattern as an example.

```csharp
public class Weapon : MonoBehaviour
{
    [SerializeField]
    [Tooltip("The prefab gameobject for the bullet")]
    private GameObject _bullet;

    [SerializeField]
    [Tooltip("The amount of seconds it takes for the user's gun to reload")]
    private float _reloadSpeed;

    [SerializeField]
    [Tooltip("The total amount of bullets the weapons clip contains")]
    private float _totalClipAmount;

    [SerializeField]
    [Tooltip("The amount of bullets that the user currently has in the clip")]
    private float _currentClipAmount;

...
}

```

Well this looks alright, but as we all know in a large script, this can quickly lead to a lot of separate fields and a really muddy inspector. Without having to begin making custom inspectors, we can do a little work that will allow us to clean up both this script and have it look nicer for our designers. We make a new class and adjust our old class like so:

```csharp
[Serializable]
public class WeaponProperties : MonoBehaviour
{

    [Tooltip("The amount of seconds it takes for the user's gun to reload")]
    public float ReloadSpeed;

    [Tooltip("The total amount of bullets the weapons clip contains")]
    public float TotalClipAmount;

    [Tooltip("The amount of bullets that the user currently has in the clip")]
    public float CurrentClipAmount;

///
/// Reloads the clip, causing the current clip to equal the total clip
///

    public void Reload()
    {
        _currentClipAmount = _totalClipAmount;
    }
}

public class Weapon : MonoBehaviour
{

    [SerializeField]
    [Tooltip("The prefab gameobject for the bullet")]
    private GameObject _bullet;

    [SerializeField]
    [Tooltip("Properties that control speeds of the gun as well as clip details")]
    private WeaponProperties _weaponProperties;

...
}

```

So now our script has less lines in it, cleaning up our field declarations, and our inspector now has a section in our script inspector for this class through a property drawer. Lot's of Unity standard packages do this already such as any of the controllers you use for players like the First Person Controller, and it allows us to easily open and close sections we need much like regions within code.

I also added the reload method to show that these serialized classes are great even for cleaning up our method declarations. Now this one happened to only be a single line declaration, but for more complicated algorithms this is great for separating functionalities! To be fair though, in an actual system you would likely split the clip information into a separate class to for better organization as weapon properties as a whole can encompass a lot of different fields.

#### Property Attributes
In this section we are not going to be creating our own property attributes, and instead focus on the basics and simply use some premade attributes unity supplies for us. These other topics will be covered in a future article. We have actually already been using some attributes. We saw `[SerializeField]`, `[Serializable]`, `[Tooltip("Something")]`, and `[HideInInspector]` already in use, and we will use `[CustomEditor(typeof(someClass)]` shortly, but there are a few other ones that are really cool too. I'm only going to cover some more applicable ones, there are others too that we will cover in later blogs, but for now are a bit out of scope.

```csharp
[Range(0, 20)]
public float PlayerSpeed;

```
This attribute will replace our text field in the inspector with a handle that allows us to move the speeds between 0 and 20 (the numbers we gave as parameters). This is really cool as it allows the programmers to ensure that the designers and developers don't change the value to a game breaking value, and it allow the designers to get an idea where the values should be placed within at a glance. Plus it just looks cool, that's something too...

```csharp
[RequireComponent(typeof(RigidBody)]
public class Product : MonoBehaviour
{
...
}

```

This one is nice for when a designer or developer creates a new object and slaps your juicy script on it. This may cause errors when playing if say your script requires a RigidBody. Well if you have this attribute on your script, your script will be immediately created with a RigidBody on it.

```csharp
[AddComponentMenu("Scripts\Products")]
public class Product : MonoBehaviour
{
...
}

```
Ah the one I'm guilty of forgetting, the component menu attribute. You know this one can be so hard to remember because you just started a fresh script and you want to just start coding it and start getting things done, but you forget about that poor guy later who goes through the component menu to find a script and has to swim through the 10,000 barren scripts that you never felt a need to put into a component menu. Well maybe not that many, but enough that it is really nice for them later if I would just put them into a menu. Sorry Karl.

There are still some other cool ones that I didn't cover that are really useful like the `[MenuItem]` attribute for the editor, as well as simple ones like `[ContextMenu]` and `[ContextMenuItem]` as well as `[RPC]`. I'm sure there are some I'm forgetting, so be sure to check them up!

#### Intro Custom Inspector - Creating a Label
The last section I'm going to talk about in this blog entry is a simple usage of the custom inspector. I'm not going to go a lot into custom editors because it is super awesome to make these, and warrants an entire blog or two on their own. Using tools like custom inspectors, menu items, and scriptable objects you can make a lot really cool automated and helpful systems. Unfortunately, this is a topic for another time. Sorry, I swear I'll make a post on this real soon! No, today we are going to look at one of the most common usages I find for custom inspectors. Using the inspector to be able to watch certain values during runtime not accessible by either the regular inspector nor the debug inspector. Let's take a look

```csharp
using UnityEditor;

[CustomEditor(typeof(SelectionManager))]
public class SelectionManagerCustomInspector : Editor
{
    public override void OnInspectorGUI()
    {
        base.OnInspectorGUI();
        var selectionManager = (SelectionManager)target;

        EditorGUILayout.LabelField("Selection State", selectionManager.StateString());
        Repaint();
    }
}

```

For this example, I'm actually going to use the class used in the Regions section. In there we have a method that finds what state our Finite State Machine is in and returns it as a string. This custom inspector will create a label in our inspector that will print out what current state our machine is in that cannot be changed. This is great because it allows our developers and designers see what is happening under the hood, without the danger of them changing the state manually thinking that it something they should be tinkering with. This same ideology can be used to say create a waypoint system that we can watch where enemies or items are currently moving towards. Now, a way cooler way would be to create this so we can actually see the lines of where the enemy or item is moving with visible checkpoints for debugging, but we will cover this in a later article. For now though, this is a cool way we can begin using the editor to do some fun stuff!

#### Others
Okay I said I was done talking about property attributes, but I lied. There are so many cool things a person can do with custom Property Drawers that it feels like a crime that I'm talking about cleaning things up for designers, and not talking about them. I'm going to go over these more in a future article as well as more creating our own property attributes.

I also want to talk about partial classes in an upcoming post. These are a great of splitting up logic and making our scripts easier to read, but run the danger of making it tough to find where something is listed. I use them for one specific thing, and that's the very next thing I want to talk about in a blog which is...

Finite State Machines. Man, when I started Unity and didn't use FSM's, I was but a boy living in a mans world. These are a very preference type data structure to use in Unity, but I have found them to be the great code and logic cleaner. Now that said, it may be a choice made on a game to game basis, and the games I have been using them in are games that rely very heavily upon items being moved around and being in various states. Anyways, this will be what my next blog will be about unless I have a huge change of heart. I generally roll my own FSM using polymorphism and enums, but I know lots of people who don't, so in the meantime if you need an FSM to get started on, the best looking one to me was [prime31's](https://github.com/prime31/StateKit) state machine. This state machine has both a lite and regular version, and the regular version actually uses a couple of implementations I think I could add to my own state machine, but still isn't quite what I enjoy, but others may like more then mine, so I highly recommend checking it out! [thefuntastic's](https://github.com/thefuntastic/Unity3d-Finite-State-Machine) implimentation is also an interesting one, and a bit more popular. I don't personally like it as it uses a machine that requires the machine itself to be handled purely through enums which won't really clean up any code as compared to just running a enum field, but a lot of people really do like it, so check it out as well. Thanks for reading guys!

Travis Scott
Twitter: @gizmmo_cti
Email: travis@gitsinbits.com
