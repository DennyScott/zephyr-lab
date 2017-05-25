So I actually wrote this blog for [Packtpub.com](https://www.packtpub.com) about half a year ago, and thought that I should start putting them on my blog. I still want to direct everyone I can there cause their cool guys with a lot of [really cool game blogs](https://www.packtpub.com/books/content/blogs). I have more blogs there I will be transferring over to here perhaps in the next few weeks, so check em out there now!

Now as a word of warning, my coding for Unity was maybe not as strong when I wrote this as now, but for a beginner I'm sure it will be fine. I can see a lot that could be fixed up with full use of coroutines and moving back from the FixedUpdate, using coding standards on my variables names, as well as adding attributes and making some serializable classes to keep the variables cleaner. Also I was using Unity 4.6 at the time and (shudder) MonoDevelop instead of Visual Studio, but it should be fine. Enjoy!

So you want to make a first person puzzle game, but you're not sure where to start. Well, this post can hopefully give you a heads-up on how to start and create a game. When creating this post we wanted to make a complex system of colored keys and locked doors, but we decided on a simple trigger system moving an elevator. That may seem really simplistic, but it encompasses really everything you need to make the harder key color key scene described, while keeping this lesson short.

Let's begin. First create a project in Unity and name it something simple, like FirstPersonPuzzle. Include the Character Controller package, as this package contains the FirstPersonController that we are going to use in this project! If this is your first time using Unity, there are some great scripts packaged with Unity. Two examples are SmoothFollow.js and SmoothLookAt.js. The first of which has the camera follow a specific game object you designate and follow it without giving a choppy look that can come from just having the camera follow the object. SmoothLookAt will have the camera look at a designated game object, but it does not have a quick cut feeling when the script is run. There are also C# versions you can find of almost all of these scripts online through the Unity community. We don't have enough time to get into them, but we encourage you to try them for yourself!

{<1>}![New Project](https://raw.githubusercontent.com/DennyScott/Blog-Posts/master/released/First%20Person%20Puzzle/1.png)

Next we are going to make a simple plane to walk on, and give it the following information inside the transform component. Click the plane in the hierarchy view, and rename it to Ground.

{<2>}![Create Plane](https://raw.githubusercontent.com/DennyScott/Blog-Posts/master/released/First%20Person%20Puzzle/2.png)

{<3>}![Inspector Plane](https://raw.githubusercontent.com/DennyScott/Blog-Posts/master/released/First%20Person%20Puzzle/3.png)

Hmm, it's a little dark in here, so lets quickly throw in a directional light, just to spice the place up a little bit, and put it in a nice place above us to keep it out of way while building the scene.

{<4>}![Create Light](https://raw.githubusercontent.com/DennyScott/Blog-Posts/master/released/First%20Person%20Puzzle/4.png)

{<5>}![Inspector Light](https://raw.githubusercontent.com/DennyScott/Blog-Posts/master/released/First%20Person%20Puzzle/5.png)

First we will make a material, and then drag and drop that material on to the plane in the hierarchy.

{<6>}![Create Material](https://raw.githubusercontent.com/DennyScott/Blog-Posts/master/released/First%20Person%20Puzzle/6.png)

{<7>}![Material Color](https://raw.githubusercontent.com/DennyScott/Blog-Posts/master/released/First%20Person%20Puzzle/7.png)

Delete the Main Camera found in the hierarchy. You hierarchy should now look like this.

{<8>}![Hierarchy](https://raw.githubusercontent.com/DennyScott/Blog-Posts/master/released/First%20Person%20Puzzle/8.png)

Now drag the First Person Controller from the Standard Assets folder into the hierarchy. Put the controller at the following transform position and you should be ready to go walking around the scene by hitting the play button! Just remember to switch the tag of the Controller to the Player tag, as seen in the screenshot.

{<9>}![First Person Controller](https://raw.githubusercontent.com/DennyScott/Blog-Posts/master/released/First%20Person%20Puzzle/9.png)

{<10>}![Inspector First Person Controller](https://raw.githubusercontent.com/DennyScott/Blog-Posts/master/released/First%20Person%20Puzzle/10.png)

Next, we're going to create a little elevator script. We know, why an elevator in a puzzle game. Well, I want to show a little bit of how moving objects look, as well as triggering an action, and I wanted the single most ridiculous, jaw dropping, out of this world way to do so. Unfortunately it didn't work... so we put in an elevator.

Create a cube quickly straight in the hierarchy and give it the following transform information.

{<11>}![Create Cube](https://raw.githubusercontent.com/DennyScott/Blog-Posts/master/released/First%20Person%20Puzzle/11.png)

{<12>}![Inspector Platform](https://raw.githubusercontent.com/DennyScott/Blog-Posts/master/released/First%20Person%20Puzzle/12.png)

Now let's make another material, make it red, and place it onto the cube we just made. Rename that cube to "Elevator". Your scene should look like this:

{<13>}![Scene View](https://raw.githubusercontent.com/DennyScott/Blog-Posts/master/released/First%20Person%20Puzzle/13.png)

Create another cube in the hierarchy and call it Platform, and give it the following transform attributes.

{<14>}![Inspector Platform](https://raw.githubusercontent.com/DennyScott/Blog-Posts/master/released/First%20Person%20Puzzle/14.png)

Okay, lastly for objects, create another cube, and name it ElevatorTrigger.

For ease, in the hierarchy, drag the ElevatorTrigger cube we created into the Elevator object, making Elevator now the parent of ElevatorTrigger as shown.

{<15>}![Hierarchy](https://raw.githubusercontent.com/DennyScott/Blog-Posts/master/released/First%20Person%20Puzzle/15.png)

Now go to the inspector, and right click the Mesh Renderer and remove the component. This will essentially leave our object invisible. Also check the box in the Box Collider called Is Trigger so that this collider will watch for trigger enters. We're going to be using this for our coding. Make sure all transform attributes are as given.

{<16>}![Inspector ElevatorTrigger](https://raw.githubusercontent.com/DennyScott/Blog-Posts/master/released/First%20Person%20Puzzle/16.png)

Now click create and select create --> C# Script, and name it Elevator. This script is going to be our first and only script. Explaining code is always very hard, so we’re going to try and do our best without being boring.

{<17>}![Create Script](https://raw.githubusercontent.com/DennyScott/Blog-Posts/master/released/First%20Person%20Puzzle/17.png)

{<18>}![Scripting](https://raw.githubusercontent.com/DennyScott/Blog-Posts/master/released/First%20Person%20Puzzle/18.png)

First, the lerpToPosition and StartLerp function are taken almost word for word from the Unity documentation for Vector3.Lerp. We did this so as to not have to explain Lerping heavily as its actually a fairly complex function, but all you have to know is that we are going to take a startPosition (where the elevator is currently), and endPosition (where the elevator is going to go) and then have it travel there over a certain amount of time (which will be calculated using the speed we want to go).

The magic really happens in the OnTriggerEnter method though. When a collider enters our trigger, this method is instantly called once. In it we check to see if what collided with us is the player. If so, we allow the lerp to begin.

Lastly, in CheckLerpComplete, we do a little clean up that once the position of the elevator is at the endPositon, we stop the Lerp. This will clean up a little overhead for Unity.

Drag this Script on to the ElevatorTrigger button, and give the attributes the following values, and your scene should be ready to go!

{<19>}![Inspector Elevator](https://raw.githubusercontent.com/DennyScott/Blog-Posts/master/released/First%20Person%20Puzzle/19.png)

Just remember, learning is all about failing, over and over, so don't become discouraged when things fail or code you have written just doesn't seem to work. That is part of the building process, and it would be a lie to tell you that when we wrote this code for article and that it worked the first time. It didn't, but you iterate, change the idea to something better, and come out with a working product at the end.
