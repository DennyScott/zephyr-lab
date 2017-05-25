## October 27, 2014
##### Travis Log
First day of the project! Today is both the most awesome day and the most worrying as I don't know what will be completed by weeks end, but I'm super pumped for it! So first off I should say, I write a lot like I talk, so you may see a lot of improper grammar. I apologize, but that's just the way it is.

Now the game we are constructing is a little tabletop kind of game that can be found in Romance of the Three Kingdoms 10, which is the best RotK there is. Now this game takes place in the form of the debate, and the characters yell things at each other while the debate goes on, which is some of the most terribly bad translations to an english argument you will ever see. Anyways, this board as combos which include getting a solid color row, which will damage your opponent, which heals you. If you get three different colors, it will do damage to yourself. That's the basic game, and then it gets more complicated with different abilities that can be used.

{}![](http://www.mobygames.com/images/shots/l/519840-romance-of-the-three-kingdoms-x-playstation-2-screenshot-debate.jpg)

I won't really go into details of the abilities, but I will make a post of what they do shortly, but what you need to know is that they each do something to affect the flow of the game. Nothing extreme, but enough to make you re-adjust strategies. I apologize as I'm not going to go into full details of how the game works, you can just google it find it anyways, but this game will be out at the end of the week for everyone to try, so you can learn it then!

So today I made the basic flow of the game boot sequence and asset loading while Denny constructed our build process for our server. After this I focused on getting a card selection screen ready, which amounted to a couple of text areas as well as some simple images of little red square that complete all the logic these 'cards' need to have, but have no real information displayed with them.

These items will be bought using your budget. This part is different from RotK 10, as there you can have all abilities. This is a specific part Denny and I felt was unbalanced, because by allowing everyone to grab everything, ability cards become by far the most powerful thing, and competing on the board becomes a secondary thought. This itself happened in RotK 10, where once you got all the skills, you made all opponents go crying to their mammas before you had to even play just a regular command. We are hoping to balance this somewhat!

So bit of a long post, but I will get some screen shots of progress for the next post, in the time being, here is a picture of kittens fighting!

{}![](http://www.warrenphotographic.co.uk/photography/cats/27975.jpg)

##### Denny Log
This isn't necessarily my first game, but it is the first game in our 12 by 12. I'm sure Travis' post will be reiterating the goal, but we plan to make 12 games in 12 weeks together. I'm both excited for this journey, and cautious to not out-scope our capabilities. So without further ado, we'll chat about my first day of development.

As a warning before continuing on, since the first couple days will have a little stronger of game programming rather then design, I'll likely discuss design further in the week, and a lot of programming details early in the week. That isn't to say we haven't already talked about design. Next game we do, I'd like to post the notes we have when chatting about the design, I failed to do so this time. Later in the week will have more feedback for design, since we can actually play the game. I believe Travis will write more about the choices we made in design.

To start off, I slightly cheated my first day. I knew what we were going to do, and decided that I should build a seed project for Phaser the day before. This would include things like testing frameworks, outlines, task runners, etc. It's not a very thorough seed project, and I'll be adding to it a lot during each of our games.

With that aside, I started today by jumping right into development. We decided to make a game based off a mini game from Romance of the Three Kingdoms 10. It doesn't have much animation, but a good deal of game logic. Seemed like a great place to start for two programmers. If you're interested in the specific logic of the game, I'm sure Travis will be chatting about it. If it's not in his log, I'm sure we'll have an overview at the end of the week.

I decided to handle the Game Board. I started by creating a Class called Board. A board object would hold 9 separate sprites. Each of these sprites would be one of the 3x3 boxes in the game. All the boxes would then be placed into the 'outer board'. The goal was then to rotate the outer board, including its child sprites along with it. Which led me to my first lesson. Though it might be a bit challenging to find, sprite's can house children with the method sprite.addChild(child). Any Child's coördinates are directly related to the parent sprite.

From there, I created Numbers for each square. This number would be placed inside the box. The number has this general look:

2, 9, 3

8, 1, 7

4, 6, 5

The box would then be turned 45 degrees, so the box looks like a diamond, with the 2 at the top. I completed adding this box by the end of the night, albeit some of the code is a little messy.

{}![](http://i.imgur.com/kl2FVWE.png)

## October 28th, 2014
#### Travis Log
Now this probably looks weird as these were posted on the same day. I didn't actually get around to setting up a blog yet when writing these, so they actually just sit in an MD file in the projects Github while I go. Once a blog has been set up, which at the time of writing this it has not, these blogs will be simpler, as well as more detailed, when I write them. So anyhow, what was done today. Well today was a lot of refactoring, as well as almost finishing the card selection screen. This might make it sound like I'm going slow, but actually a lot of the physical card logic is now going to be ready for the game.

Denny is actually coding the logic for the board part of the game, so I'll let him talk about that. For me, The cards now display properly on the screen, but I'm going to rework a lot of the assets I have running in the menu, as well as the background color I use throughout the game, as it's all actually assets I'm using from when I was reading the Discover Phaser Book by Thomas Palef, and I used them to quickly get up some of the stuff that didn't seem as important to me to begin with.

Other than that I had to refactor a lot, trying to make the code more readable. Remember anyone can check out this game at Denny's Github! I had very little time today I could work on the project, I'm hoping to get more in the next couple days to really get going on this!

[Debate!](https://github.com/DennyScott/rotk)

Other than that though, the plan tomorrow is to finish up the last of the assets needed for the Card Selection page, such as a next button, a quantity counter for the amount of a given card you chose, as well as perhaps help text of some sort.

{}![](http://i.imgur.com/N1aFFZk.png)

I have thought more and more that I will need a tutorial of some sort, so we'll see what kind of time I have before week's end. I've only been able to work on this so far for a grand total of like 5 hours, so if I could get a good solid day of work on this coming up, that would be awesome! Well check back for another blog post later!

#### Denny Log
Today was a bit shorter of a day to work on the project. I refactored the Board object, and decided that having each tile as a variable was complicating the Board Class, and causing it to have code smell from the methods needed for the tiles. With that thought, the clear solution was to create a tile class. Each tile is made from the class and holds the necessary values and methods. This cleaned up my code by a ton. It also allowed me to create a simple way to change the color of a tile, by using a function to pass in the color, and rendering the image of the tile to a new image.

I checked and found that using the sprite.loadTexture(img) to load a new image into the sprite isn't the most efficient way, but using a spritesheet for this seemed a bit of over kill. There isn't any high action sequences in this game. Heck, there's no middle action sequences in this game, so it shouldn't be a problem.

After I could switch the color, I added the functionality to handle a "card placement" in the board. The actual play state will handle the card placement, but if the card is a simple number card, it will pass that card into the board object. The board will then place the tile for the card, and check if that card causes any winning and losing combinations.

I first handled this with a simple combo counter, but decided that it probably is best to keep a JSON object of the winning and losing combinations, and instead now pass that back to the play state.

The biggest negative yet. I've used mostly Test-Driven Development these days, but in my excitement to get coding a game, I've found myself just playing around, rather than starting with testing. I might try to refactor some of my code with tests, and then start TDD. If not, it certainly will be a learning lesson next time. I've found myself slowed down a couple of times by not having correct testing.

The game is coming along well so far, other than the awkward bright blue background we're using. Hopefully it's in a playable state by tomorrow!

## October 29th, 2014
#### Travis Log
Alright so, a lot done today. First I added counters to each ability in the card selection screen, and have them increment when being bought, as well as updated most buttons throughout the game. I created some text to blink on the main screen, and set cards to max out at 100 points and not allow you to buy any extra cards. Once your deck is at 30 cards, the game will allow you to continue.

{}![](http://i.imgur.com/trNhxPG.png)

After this I jumped into the play state and got some serious business done. While Denny has all logic on the board on his hands, the logic with the cards is overseen by me. So first I added the ability to play number cards, and have their effects actually pipe into the board, which went really easy with Denny's API.

I then set it up so that you draw seven cards, and upon playing a card, that card is used, and then removed from your hand, as well as the view. Now there should be a step here in which cards being drawn at the end of the turn, but it has not been implemented yet.

I also have the second user randomly drawing cards at the very start of the game. I am debating sorting the cards for the user, or having them have the ability to sort it themselves, but that's nothing that is at the top of my TODO list right now. Next I created a second Deck, hand, and views for a second player. Denny was nice enough to create the player class and objects for me, all I had to do was create some outward facing attributes.

{}![](http://imgur.com/MRvRJbe.png)

Now when a player plays a card it actually switches to the other players hand for them to play a card. It should be said the first version will play like this, except that there will be a timer to have the other player take over. I really wish I had time to write AI, but I fear it would be to simple due to time constraints for almost every user over the age of 2. So for now, I will probably have to leave it at this. Weekends coming up though so who knows!

By tomorrow evening this will definitely be in a playable state, but I really need to attach functionality for ability cards. The next thing up on my todo is actually to transfer the cards to real classes rather than JavaScript objects because it is stupidly unorganized in the code right now, and Denny's gonna beat the hell outta me if I don't do it soon, as well as a lot of the draw options and such being baked into the player object. After that play testing!

#### Denny Log
I started to add testing to my functions. In the past, I've either had to expose my JavaScript functions to test, or not test a function. After reading an excellent post on here [testing private functions](http://philipwalton.com/articles/how-to-unit-test-private-functions-in-javascript/), I've decided to do something similar. I'm not sure how much testing will be worked into this game, but I'd love to have the app tested.

After attempting a good chunk of my night at testing, I had to leave it. Karma and Phaser don't play well together with load.image, and Phaser.loading images. unfortunately, I don't have time to work around it, and hopefully I can think of something over the week/weekend.

After much procrastinating, I allowed for scaling of the game board. It took a bit of tricky math to get all the tile's position's correctly, but it's good to go now.

I added a player class, and created two player objects. They contain their health, and allow simple ways to heal and damage. We're planning on adding a visual scale to show how well the player is doing, but for now, their health is displayed as text data.

I also handled a combo in the game board. Currently, we don't have '2 players' playing, so I have when a combo occurs, player one is the 'playing' character. When a combo connects, it will order the 'winning' combos first, and then the losing combos. This all takes place within the play state.

I added an arrow to signify which end of numbers are the strongest. If the arrow is up, playing a high number is better. If the arrow is down, playing a low number is better. This was again created as an object. This arrow is then "turned" each combo.

The game is just about in a playable state. It will definitely be good to go by tomorrow night. Hopefully we can start bouncing the game to some family and friends and see what they think.

Here's some images where it currently stands:

{}![Title Page](http://i.imgur.com/tr565q2.png)
[See More Images Here](http://imgur.com/a/cIYmQ#kl2FVWE)

## October 30th, 2014
#### Travis Log
Today was a long day of refactoring. First, I did not get a playable test of the game up today. Instead, I changed all the code to be object oriented so that the play state was not a swamp of horrors for me and Denny to have to go through.

I changed the cards or as I call them now, the commands, to start in the command object, and from there inherit outwards as needed. A regular command simply inherits the command prototype, but if the card is something like say the taunt card, that card inherits from the attack command which inherits from the ability command, which inherits from the command - command. A simple visual representation of this is TauntCommand>AttackCommand>AbilityCommand>Command.

I did this for extensibility to the cards so that creating and changing the cards was not done inside a state, instead the cards are predefined in their own classes outside the state, and the state simply passes the owner to the cards and runs more like a driver then the actual logic.

This cleaned up a couple of methods, but there is still work to be done to finish the cleanup process. First and foremost, I NEED to move functionality into the Player class. Things such as draw card, drawing you hand at the start of the game, as well as just the players deck in general should be stored inside the Player class. This would clean playState up so that all it did was essentially be a drive that calls the correct commands at the correct time, and really just hold both players commands when they play a command.

Denny did some awesome work with the game logic, but he'll surely type about that himself in his log, but he hasn't been able to test it because he needs the new objects I just created. So tomorrow will be about putting the correct flow in playing cards into the play class so that it connects my new objects and functions to Denny's new flow of game logic.

Abilities have still not been written, but the logic is there for the functionality, they just have to be written, which sounds harder than it is. The hope is to have a playable demo up by tomorrow, so that is what I will be working on then. I also have to desperately document a lot of my stuff (not the new objects, they have been fully documented), but I will do that after the refactor, since I'm going to be killing a lot of zombie functions.

{}![](http://img1.wikia.nocookie.net/__cb20100610173627/simpsons/images/thumb/2/26/Homer_and_Zombies.png/250px-Homer_and_Zombies.png)

Its getting there though!

#### Denny Log
I spent a good chunk of the night refactoring code, and then setting up the Event Chain. The event chain will handle the "chain" made when two players play their cards against one-another.

I set up a list of priority in the following way:

* Players each play a card, which passes over control to the event chain.

* Event chain Passes the Cards through the Attack Command Checks

* Did they both play attack commands. If they did, compare the values of their attack commands. The stronger attack wins.

* Did one play an attack card. That player wins, and their card action plays out.

* On both situations action play, if the other player is holding a defensive card, their attack command action is cancelled.

* Number Command Checks

* If both play a number card, compare the values of the two cards. Depending on the arrows current direction, the highest or lowest card wins.

* If only one number card is played, they win, unless the other player won with an attack command earlier.

* Defence Command Checks

* If both play a defence card, they are both cancelled out. We might allow the stronger defence to win, but this hasn't been decided yet.

* If only one defence plays, it will run its action. Currently, even if the card loses, it will run its action. That's because, theoretically, it is almost guaranteed to lose. If the action doesn't go, there would be basically no reason to ever play a defence card.

* Awe Command Checks

* If both play an awe card, they are both cancelled out. This is not currently implemented in the game. I realized last night right before bed that I hadn't added the method to resolve this, so it should be completed today.

* If a single card is played, the awe will be placed on the board in the appropriate number position.

* Resolve Awe Damage

* For any awe card on the field, the opponent will take the base awe damage value.

That's currently how the event chain works. There could be some tweaks with it, especially in balancing. unfortunately, because Travis was working on new Card Objects, I wasn't able to throughly test the chain, so that will be what I do for the first chunk of Friday.

## October 31st, 2014
#### Its OO Time!

Okay so, this blog is coming out 2 days later then it was supposed to, and this entry actually pertains to October 31st. I'm going to try and keep this shorter as my other blog posts ramble on quite a bit. I'm also going to include bullet points at the top of daily log posts to read quickly what we have done without having to go into reading the boring details.

* Set Up Node WebKit
* Set Up Pipline For Releasing On To Web
* Refactored Methods From Various States Into Classes
* Commands Now Use An Inheritance Chain To Clean Up Code
* Need To Set Up Test Suite
* Upgrading to ECMAscript 6 For Next Game
* Need Artist/Game Desginer To Help If Possible

Denny did a lot of behind the scenes stuff for us today. He focused in on getting this running with Node webkit. Not for us to actually use for this game, but just beginning to understand it for when we one day want to release on it, and knowing what things we need to focus on when actually creating a game for it. He also worked on getting a lot up online so that putting a blog up, releasing a game, etc. can easily be linked to and put online so we can continue create games at the speed we want to.

Travis focused on translating all of his dirty code into workable object oriented Javascript. While next project we will be moving to ECMAcript 6 for easier OO functionality, this project was near completion, so changing at this point would have complicated things further. So all commands now are self contained in their own objects, and through inheritance, all share a lot of functionalities that these commands need. If you want to view how this was done, you can find it at [Inheritance Commands](https://github.com/DennyScott/rotk/tree/master/app/js/objects/commands).

We are looking at implementing a few things next time that were sorely needed. First and foremost getting an actual testing suite, since both of us like to program through test driven development, and had a bit of trouble connecting the testing suite we wanted with a workable Phaser object. Now we only tried for a short time and realised that this game has quite a bit of logic, so maybe on an easier game take the time to see if we can complete the testing integration.

Last shout out and I will be done, we desperately need someone who will focus on the visual aspect of games, as well as general game design. This would be for our other games in the 12 games in 12 weeks challange, so if you are reading this and think, "Hey I kind of like aesthetics in games, as well as game design!", give us an email or something. This is for fun and such, so we can't pay you, but it would be awesome experience where you can get better while making games, and we would love you forever! Also Denny may or may not bake you a cake. I can't promise you he will, or has ever before, but let that be a tantalizing possibility if you decide to work with us. Really just simple 2D art, and someone who is focused on the actual aesthetic outcome of the game. We generally are so focused in on getting logic complete, I feel an extra pair of eyes out aesthetics would be great!

## November 1st, 2014
#### Playable Alpha

Alright so today we have our first playable alpha product! While it was kind of working the day before, today we actually got to play some games against each other. Sadly the game is only going to be able to play with 2 people sitting next to each other, and taking turns looking at the screen. We are making an android release though so that you can just pass the phone around while playing. If I were to continue this game, I can assure you this is the first thing we would switch. Alright so on to what we have done.

* Playable Alpha
* Wrapped in CocoonJS
* Animations for Actions
* Timer in Between Turns
* Event Chain (mostly) Complete
* Balancing Issues

Okay so, we first wrapped this project in CocoonJS for release to mobile. Now since these are just 1 week games, we will not be releasing to the IPhone as we would be laughed out of getting this accepted by them, so for now we are going to make a release to use on android for fun, and obviously, host online for everyone.

We focused a lot today on completing little bugs, as well as some animations between actions so that users know what is happening. Again this game required quite a bit of logic, so a simpler game like a side scroller would have been easier for this as the logic in that game is move left to right, but this was still really cool! This animation includes when commands are played, and when the users are waiting for their turn.

Which brings us to the next subject, I apologize there is no 1 player mode. With the amount of logic and polish needed to make this playable by users, I was not able to implement a simple AI, so you will have to find a friend to play this against. Sorry :( But I have put in a simple timer between turns so that you have time to make sure you friends not cheating and looking at your commands! One day I would like this to be competitive through online play, but that is not nearly in the scope of the next few hours.

Denny has done a lot of work to make sure the event chain is working correctly. The event chain being when 2 players play a command, the sequence of actions that take place afterwards with players taking damage, and commands being placed on the board. This was probably the toughest part of the game, as it is very tight to get the correct flow of logic to always maintain exactly how you want, though we are very close right now.

Lastly, we did quite of bit of balancing to try and make the game more exciting and fun, as the original alpha was very slow and tough to win since there was almost no damage going on. I suppose I forgot how in the actual RotK 10 game, the abilities would own your opponent, so it always felt like things were moving, but really, you usually won by turn 2 or 3. So a lot of time has been spent here as well. One more day though, and we will be releasing onto the web. I haven't really decided where yet, but it will be linked on this blog.

For what we do to finish this up, we need to replace a lot of the actual colors and assets used as they are not ours, get some sounds in the game, get a few more animations, complete a victory screen/state, scale the game for mobile, and just general playtesting.

## November 5th, 2014
#### Debate is complete
Hey, I apologize for not being able to get a post up for the last few days. I actually came down with a cold of some sort a few days ago, and was down for the count for a day and a bit. Currently Denny is now sick, so we'll get over this, and then get back to blogging regularly. We've discussed a few changes to the way these blogs are getting made. With each game thats made, we are going to split into a couple of blogs. We will have a development blog, which just keeps track of our progress when developing a game, and then we will have more specialised blog entries that will be shorter and easier for people to read without going into a pile of information. So I'm not sure which will be the first one we write, but by the looks of it, one will generally come out on Wednesdays, and the other on Sundays.

So for the game, it is actually complete and ready to go, but we have to adjust our server to be able to play games when users come the site. Right now, it was only made to be a portfolio site, so a bit of work will need to be done to get that fixed. Once that is ready to go, we will release the game on to the web. We went through a bit of a switch while making it honestly, because we have always gotten into games for specific reasons, and this style of games wasn't really one of those reasons.

We've felt that games in general are very focused on topics that would generally accompany a B style Action Movie. Now, I'm not at all stating these games should not exist. If people buy them, then they obviously love them. Just because I don't completely enjoy this style of game, doesn't mean nobody does. In fact record game sales proves the opposite. That isn't the type of game we want to make though, we want to make games that generally focus around a strong story. Now you may see where the problem lies with this first game. It is a game with no story.

The reason it has no story, is that for our first game made in this engine, we wanted to both focus on becoming accustomed to writing code for the engine, and getting used to gameplay elements in general. Now that we have completed this first game though, we don't feel as though its a great representation of what we want to do in the game industry. So, we will release it for feedback and improvement, but what we are really excited for is our next game. Now I don't want to spoil what this next game is before we release it, but it is completely different from Debate! It is a game focused entirely upon a story, and its writing and characters. Now, we are implementing a brand new system behind the scenes for this game (still using phaser), so it could take a bit longer then we want, but this system will likely be used in many other games that we create for this 12 weeks challenge.

With both putting up a server and implementing this new element for games into our seed project, we are going to take an extra week to get it all up and going. I know this sounds like we are breaking the rules of the challenge, but if it results in us releasing games of better quality for the challenges, I am all for it. So, the next game and this game will not be released until the server is up, so we will attempt to get that up and going as soon as possible, and then move to finishing our game for the week after. I'm very excited for this second game, and will update with more details later hopefully!
