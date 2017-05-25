Today, Denny and I are doing a little maintenance on the Zephyr package.  As a quick sum up of this package, Zephyr has a bunch of isolated helpful Unity classes we've made.  Some other work we have lined up includes

- Getting C#6 in a seed project up and ready to go.
- Refactor Singletons add-on in  Zephyr.
- Refactor Advanced MonoBehaviour in Zephyr.
- Extract Unity calls from Zephyr package.

As an example, the biggest thing we use in this package is the EventSystem, which is a global event system that uses Generics for keys.  Another class is our FSM.  Some of these are tested, some of these are not.  We want to test them, refactor them, and most importantly, move it all to a DLL so we can include it in projects and no longer need to worry about using SubModules in git.  So, lets begin.

First off, were going to attempt to get it DLL ready.  This sounds a bit backwards, but once its ready for that, we can test it fairly easily standalone or in a separate package.

The first problem we stumbled upon is that we are getting the `Message=ECall methods must be packaged into a system module.`.  We've read online and it seems that this error is appearing since we use Unity commands (such as Debug and MonoBehaviour methods) in what appears to be an outside Unity Application.  From what we can see, once this DLL is created and dropped into Unity once again, it will work fine, so time will tell.

We've switch our target framework to Unity 3.5 for building our DLL.  We next check if we can make a release build... Success!  Zephyr now looks to be a standalone DLL.  Let's get a new seed project set up to see if we can get this all running first!

We make the project and toss in DLL with no errors.  Well thats a nice start!  We're going to make a quick script to see if we can access the EventManager system in the Zephyr package... And it works.  The DLL worked perfectly, no more submodules for us!  YEAH!!!

Lets quickly put some C# 6 support in for that sweet sweet syntactical sugar!  We grabbed the repo from [alexzzzz Bitbucket Repo](https://bitbucket.org/alexzzzz/unity-c-5.0-and-6.0-integration/src) and follow the directions to get it going, and it work with no trouble.  Cool!

Looking at our DLL though, it seems we are missing my new FSM, so we check out the git repo and notice no one ever merged my pull request, and now there are conflicts.  Alright, I suppose I will jump over and fix up any issues, and maybe get a little refactor time in!

Well, it seems to be just meta's that are causing the errors, which is not a problem at all, so we can just choose the new metas and move on. Super easy!  Of course, that means no refactoring time, but hey, we can come back to that later

So we updated that to get rid of the conflicts and build a new DLL with the new FSM scripts included.  We move the tests back over to the test project to keep them out of the DLL and build.  Works perfectly!

Let's upload the new project to a new repo thats just for building a DLL, and we can decide later which repo we want to be the main Zephyr repo.  I think this will about do for tonight, tomorrow, we're going to refactor the two sections of code (Singletons and Advanced MonoBehaviour) and then maybe start working on some new code for a new project!

Have a good night !
