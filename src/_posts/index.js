import staticSiteGenerator from './static-site-generator.md';
import debateGameJam from './debate-game-jam.md';
import delegateEvents from './delegates-events.md';
import firstPersonPuzzle from './first-person-puzzle.md';
import iosWhitelistingUnity from './ios-whitelisting-unity.md';
import objectOrientedJavascript from './object-oriented-javascript.md';
import unityCleanCode from './unity-clean-code.md';
import unityExtensions from './unity-extensions.md';
import unityRestOne from './unity-rest-1.md';
import unityRestTwo from './unity-rest-2.md';
import unitySublime from './unity-sublime.md';
import unityTesting from './unity-testing.md';
import windowsChocolatey from './windows-chocolatey.md';
import zephyrCodeCleanupOne from './zephyr-code-cleanup.md';
import zephyrCodeCleanupTwo from './zephyr-code-cleanup-2.md';
import zephyrCodeCleanupThree from './zephyr-code-cleanup-3.md';

import striptags from 'striptags';

const blogOne = {
  title: "Static Site Generator",
  author: "Denny Scott",
  created_at: "2017-05-21",
  html: staticSiteGenerator,
  text: striptags(staticSiteGenerator),
  id: 1,
  tags: ["React", "Development"],
  image: "https://raw.githubusercontent.com/DennyScott/zephyr-lab/master/src/assets/images/blog/1.jpg"
}

const blogTwo = {
  title: "Debate Game Jam",
  author: "Travis Scott",
  created_at: "2014-07-24",
  html: debateGameJam,
  text: striptags(debateGameJam),
  id: 2,
  tags: ["Unity3D", "Development"],
  image: "https://raw.githubusercontent.com/DennyScott/zephyr-lab/master/src/assets/images/blog/1.jpg"
}

const blogThree = {
  title: "Object Oriented Javascript",
  author: "Denny Scott",
  created_at: "2014-07-24",
  html: objectOrientedJavascript,
  text: striptags(objectOrientedJavascript),
  id: 3,
  tags: ["Javascript", "Development"],
  image: "https://raw.githubusercontent.com/DennyScott/zephyr-lab/master/src/assets/images/blog/1.jpg"
}

const blogFour = {
  title: "Decoupling Scripts using Delegates and Events",
  author: "Travis Scott",
  created_at: "2015-07-24",
  html: delegateEvents,
  text: striptags(delegateEvents),
  id: 4,
  tags: ["Unity3D", "Development"],
  image: "https://raw.githubusercontent.com/DennyScott/zephyr-lab/master/src/assets/images/blog/1.jpg"
}

const blogFive = {
  title: "Creating a Simple First Person Puzzle Game in Unity",
  author: "Travis Scott",
  created_at: "2015-07-24",
  html: firstPersonPuzzle,
  text: striptags(firstPersonPuzzle),
  id: 5,
  tags: ["Unity3D", "Development"],
  image: "https://raw.githubusercontent.com/DennyScott/zephyr-lab/master/src/assets/images/blog/1.jpg"
}

const blogSix = {
  title: "iOS Whitelisting, Frameworks, and Bundle Removal in Unity",
  autor: "Denny Scott",
  created_at: "2016-07-15",
  html: iosWhitelistingUnity,
  text: striptags(iosWhitelistingUnity),
  id: 6,
  tags: ["Unity3D", "Development"],
  image: "https://raw.githubusercontent.com/DennyScott/zephyr-lab/master/src/assets/images/blog/1.jpg"
}

const blogSeven = {
  title: "Creating Clean Unity Code",
  author: "Travis Scott",
  created_at: "2015-07-17",
  html: unityCleanCode,
  text: striptags(unityCleanCode),
  id: 7,
  tags: ["Unity3D", "Development"],
  image: "https://raw.githubusercontent.com/DennyScott/zephyr-lab/master/src/assets/images/blog/1.jpg"
}

const blogEight = {
  title: "Useful Unity Extensions",
  author: "Travis Scott",
  created_at: "2015-07-17",
  html: unityExtensions,
  text: striptags(unityExtensions),
  id: 8,
  tags: ["Unity3D", "Development"],
  image: "https://raw.githubusercontent.com/DennyScott/zephyr-lab/master/src/assets/images/blog/1.jpg"
}

const blogNine = {
  title: "Using a REST API with Unity Part 1",
  author: "Denny Scott",
  created_at: "2015-07-18",
  html: unityRestOne,
  text: striptags(unityRestOne),
  id: 9,
  tags: ["Unity3D", "Development"],
  image: "https://raw.githubusercontent.com/DennyScott/zephyr-lab/master/src/assets/images/blog/1.jpg"
}

const blogTen = {
  title: "Using a REST API with Unity Part 2",
  author: "Denny Scott",
  created_at: "2015-07-19",
  html: unityRestTwo,
  text: striptags(unityRestTwo),
  id: 10,
  tags: ["Unity3D", "Development"],
  image: "https://raw.githubusercontent.com/DennyScott/zephyr-lab/master/src/assets/images/blog/1.jpg"
}

const blogEleven = {
  title: "Unity and Sublime",
  author: "Denny Scott",
  created_at: "2015-07-05",
  html: unitySublime,
  text: striptags(unitySublime),
  id: 11,
  tags: ["Unity3D", "Development"],
  image: "https://raw.githubusercontent.com/DennyScott/zephyr-lab/master/src/assets/images/blog/1.jpg"
}

const blogTwelve = {
  title: "Unity Testing",
  author: "Denny Scott",
  created_at: "2016-07-08",
  html: unityTesting,
  text: striptags(unityTesting),
  id: 12,
  tags: ["Unity3D", "Testing", "Development"],
  image: "https://raw.githubusercontent.com/DennyScott/zephyr-lab/master/src/assets/images/blog/1.jpg"
}

const blogThirteen = {
  title: "Setting up a Clean Install of Windows with Chocolatey",
  author: "Denny Scott",
  created_at: "2016-09-08",
  html: windowsChocolatey,
  text: striptags(windowsChocolatey),
  id: 13,
  tags: ["DevOps", "Development"],
  image: "https://raw.githubusercontent.com/DennyScott/zephyr-lab/master/src/assets/images/blog/1.jpg"
}

const blogFourteen  = {
  title: "Zephyr Code Cleanup - Part One",
  author: "Travis Scott",
  created_at: "2016-09-09",
  html: zephyrCodeCleanupOne,
  text: striptags(zephyrCodeCleanupOne),
  id: 14,
  tags: ["Unity3D", "Development"],
  image: "https://raw.githubusercontent.com/DennyScott/zephyr-lab/master/src/assets/images/blog/1.jpg"
}

const blogFifteen  = {
  title: "Zephyr Code Cleanup - Part Two",
  author: "Travis Scott",
  created_at: "2016-09-10",
  html: zephyrCodeCleanupTwo,
  text: striptags(zephyrCodeCleanupTwo),
  id: 15,
  tags: ["Unity3D", "Development"],
  image: "https://raw.githubusercontent.com/DennyScott/zephyr-lab/master/src/assets/images/blog/1.jpg"
}

const blogSixteen  = {
  title: "Zephyr Code Cleanup - Part Three",
  author: "Travis Scott",
  created_at: "2016-09-12",
  html: zephyrCodeCleanupThree,
  text: striptags(zephyrCodeCleanupThree),
  id: 16,
  tags: ["Unity3D", "Development"],
  image: "https://raw.githubusercontent.com/DennyScott/zephyr-lab/master/src/assets/images/blog/1.jpg"
}

export {blogOne, blogTwo, blogThree, blogFour, blogFive, blogSix, blogSeven, blogEight,
  blogNine, blogTen, blogTwelve, blogThirteen, blogFourteen, blogFifteen, blogSixteen};
