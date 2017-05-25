About 2 months ago, I was given the task of porting a desktop high graphic game into a mobile version on team by myself. While in the middle of this, a new project was thrust upon us that required porting a desktop experience (which I wrote with the other blogger on this site some months ago) into a very similar game on the same platform, but with some key differences that would require scripting. You may be asking yourself, “Why the hell do I care?”, well in all this time I had to do a ton of refactoring to first allow these apps to run on mobile, and then looking over how modular I made my code for porting to a new similar project.

Anyways, I’m going to create a bit of a guide on some of the tips I found useful when creating these apps. There’s a huge range of cool things I really want to talk about like finite state machines, LINQ, and Attributes, but the first thing I’ll post about is some useful extension methods I’ve created that allow me to do some cool things in a single line. I chose Extension Methods as everyone can use these things in every project and they are just so damn simple and awesome.

### Quick Explanation

Okay so first off, just a quick explanation on what an extension method is. Really all you need to know in terms of how it works for Unity and C# is that these methods will extends a base C# Object that you designate, and will make itself work as if it where actually an actual method of the given class. This allows us to put a lot of repetitive code into some extension methods and just one line a lot of our code in our MonoBehaviours.

Just as a warning when reading my code for those who message me later about calling things like gameObject.transform, I know its better to cache your transform, I just don’t write it in here just for readability sake.

I also use a bit on Linq in here, it shouldn’t be to much to confuse anyone, but you may just need to do a simple google if you can’t understand small amounts. I tend to explain what they do though, so you should be fine!

### Transform Extensions

Well, I really shouldn’t have to cover it as it is the Extension method every tutorial and guide will tell you to implement, but in case you missed it, this is the position extensions. For the record, you must just put this code into a static class, and all methods must be static.

```cs
public static class Extensions
{
    /// <summary>
    /// Sets the x position of the transform to the float passed
    /// </summary>
    /// <param name="t">The transform to set</param>
    /// <param name="x">The new x value</param>
    public static void SetPositionX(this Transform t, float x)
    {
        t.position = new Vector3(x, t.position.y, t.position.z);
    }
}
```
So this one is pretty simple. Were just taking the transform and the float and making a new Vector3 to assign to the transforms position reference. This might seem a bit redundant for a single line, but now whenever we want to change the position of an x in any other class, we only have to write:

```cs
gameObject.transform.SetPositionX(7);
```
Nice! So remember to do this with all the other vector axises as well. So what other Transform extensions do we have? Well, some of our programmers were looking for the GetChildren() method of Transform, which of course does not exist. Instead a way to get them is to actually just cycle through the Transform itself like so:

```cs
foreach(var n in gameObject.transform)
{
    n.DoSomething();  //A Child of Transform
}
```
or by using the classic for loop

```cs
for(var i = 0; i < gameObject.transform.childCount; i++)
{
    gameObject.transform.getChild(i).DoSomething();
}
```
Well if we want to make a simple method for those who say need a list out of this we can make an extension method like so:

```cs
/// <summary>
/// Returns a list of all Transforms that are children of this transform
/// </summary>
/// <param name="t">The transform to search</param>
/// <returns>A list of all transforms that are children of this transform</returns>
public static List<Transform> GetChildren(this Transform t) {
    return t.Cast<Transform>().ToList();
}
```
Yes we are using a little Linq in there, but its nothing too complicated to understand. We are casting all transforms in the Transform t into Transforms and then putting them all into a list and returning it. Now this might seem a little strange as there’s no real extra coolness out of this, its the same outcome as the foreach loop. And that’s true, but what I was showing is only half of the puzzle, as the other half is that our programmers wanted a quick way to get all gameObject children of our transform, which is where the second extension method comes in.

```cs
/// <summary>
/// Returns a list of all gameobjects that are children of this Transform
/// </summary>
/// <param name="t">The transform to search</param>
/// <returns>A List of all gameobjects that are children of this transform</returns>
public static List<GameObject> GetChildrenAsGameObjects(this Transform t)
{
    return t.Cast<Transform>().Select(n => n.gameObject).ToList();
}
```
Our actual code would call this as follows:

```cs
var someList = gameObject.transform.GetChildrenAsGameObjects();
```
Okay so part two. Here we are taking the transforms just like last time, but putting in a select in between the cast and the list that will cycle through all the transforms casted, and grab the gameObject out of each passed, and then that is what is sent in to the list. Just like the position methods, these aren’t hard lines to actually write in the actual code, but just allow us to not have to write the whole damn thing.

Okay, so last cool one I’m going to put in for transform is a getChildByTag extension. This doesn’t do anything fancy in terms of performance, just a simple string check was all we really needed as we only actually use this on a couple items, and only on the Start call, so this was fine for us. We can’t rely on the name always being correct or not changed by our designers, so we put a tag on some of our children and find using that. It looks like this:

```cs
/// <summary>
/// Finds an immediate child of this transform by a given tag
/// </summary>
/// <param name="t">The transform to extend</param>
/// <param name="tag">The tag to search by</param>
/// <returns>The found gameobject</returns>
public static Transform FindChildByTag(this Transform t, string tag)
{
    return t.Cast<Transform>.First(c => c.CompareTag(tag));
}
```
So this one actually uses our first one and gets all our Transform children of the given Transform t. It will then find the first item in the list that has the tag as given. So to find it in our actual code it would look as follows

```cs
gameObject.Transform.FindChildByTag("Product");
```

###Game Object Extensions

These extensions will be extending the GameObject class. There will only be two in here, as the GameObject is really just a container, so I tend to really extend components over it, but I’m sure there are some really cool extensions out there if you look!

First, we have a simple setParent extension. This one is just to shorten some repeated code that I have a lot of in my code. I actually have both a transform version and gameObject version of this extension, but I wanted to include it in the GameObject section or else I would have been showing only 1 extension. To be fair, it is in fact more efficient to do this on through transform technically if you have cached your transform, so try to use that way if you can. Here is the GameObject version though.

```cs
/// <summary>
/// Sets the parent of the given gameobject as the other gameobject passed
/// </summary>
/// <param name="g">The gameobject to set the parent of</param>
/// <param name="parent">The parent gameobject</param>
public static void SetParent(this GameObject g, GameObject parent)
{
    g.transform.parent = parent.transform;
}
```
This is the simplest one of all extension I’ve shown. This one literally just moves the first object to be a child of the second object. If transforms are indeed cached the line would actually only be _transform.parent = otherTransformso this one only becomes efficient if you are generating a lot of objects, but never actually need the transform other than for this. It’s a bit of an edge case, but cool none the less.

The next example is a SafeDestroy. Now there’s a lot of back and forth in the community about extending MonoBehaviours and making your own MonoBehaviour that actually runs safe destroys, invokes, etc. but to me, in a Component Entity based system a large amount of inheritance chaining is not what we really want. Don’t get me wrong, I use inheritance quite a bit, but I try not to have my base class chains be any longer than they already are, and keep all of my components for a singular purpose. I honestly battle back and forth a lot on this topic, so to each their own. So anyways, let’s look at the code.

```cs
/// <summary>
/// Destroys the passed gameobject as long as it exists
/// </summary>
/// <param name="g">The gameObject to be destroyed</param>
public static void SafeDestroy(this GameObject g)
{
    if (g != null) {
        Object.Destroy(g);
    }
}
```
So these are the types of methods we are going to be seeing quite a bit from here on in. This extension method allows us to skip over an if statement, and get our code everywhere else to be a single line of code. Now when destroying an object, we would call it like so.
```cs
gameObject.SafeDestroy();
```
And not worry about our if statement to check that the object is in fact referencing an instantiated object. Which brings us to the last section.

###Delegate Extensions

These are the most useful version of extensions I have seen so far. For anyone who uses events, Actions, or Func’s, you know that every time you call it, you must check if it is still null. Of course, you could code it in a way that you know it will never be null, but it’s still always better to always check that it is not null, which is perfect for an extension method. Lets take a look at a simple Action.

```cs
/// <summary>
/// Calls the delegate if it is not null
/// </summary>
/// <param name="action">The action to be called</param>
public static void Run(this Action action)
{
    if(action != null) {
        action();
    }
}
```

This will check if the given action is not currently null and has a function actually registered to it. If so it will run, if not, it will simply finish. This doesn’t seem like a big deal, but when writing decoupled code, delegates are essential, and they are in a lot of places. So now instead of all those if statements, we can call it as follows:
```cs
someAction.Run();
````
Have a parameter we need to add? No problem!
```cs
/// <summary>
/// Calls the delegate if it is not null
/// </summary>
/// <param name="action">The action to be called</param>
/// <param name="go">The gameobject passed</param>
public static void Run(this Action<GameObject> action, GameObject go)
{
    if (action != null) {
        action(go);
    }
}
```
And calling it:

```cs
someAction.Run(gameObject);
```
So I have one last one that really is a “if you like this stuff” type of extension. This one is actually built on to an old post I had a few months ago about a Func<bool> system that I use that allows outside classes to tap into functionality of a separate component keeping in isolated. Lets look at the extension first, and then I will explain myself.

```cs
/// <summary>
/// Calls the delegate if it is not null and returns true if the func is null or if all invocations return true
/// </summary>
/// <param name="func">The func to be called</param>
public static bool RunOrIsNull(this Func<bool> func)
{
    return func == null || func.GetInvocationList().Cast<Func<bool>>().All(checkscript => checkscript());
}
```
Okay so whats going on here. Well first off, a component should run its functionality no matter what, unless an outside “manager” doesn’t want it to, so if the func is null, we automatically return true. That’s easy enough, now for the second part. We need to cycle through all func’s that are registered and make sure all values return true, if not, return false. That is what this line exactly does to. First it casts all items in the Invocation List intoFunc<bool> objects and then we use an All call to return true if all calls return true, if not, return false. Perfect! So now we can use this line in code as such.
```cs
if(someFunc.RunOrIsNull())
{
    DoFunctionality();
}
```
Nice, cause writing all that code kind of sucked! Well that’s enough for now, next time I’ll write about a different code style I follow, but if you have some cool extensions, be sure to send them to me on Twitter, Email, or however you want. Thanks!

Email: travisscott301@gmail.com
Twitter: @gizmmo_cti
