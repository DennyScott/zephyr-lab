import imageFour from '../assets/images/portfolio/img-4.jpg';
import imageFive from '../assets/images/portfolio/img-5.jpg';
import imageSix from '../assets/images/portfolio/img-6.jpg';
import imageSeven from '../assets/images/portfolio/img-7.jpg';

const portfolio = [
  {
    id: 1,
    title: "Garage Builder",
    images: [imageFour, imageFive, imageSix, imageSeven],
    description: "Developed in Unity, this app allows a user to create there own virtual garage in a Canadian Tire store using a 85 inch 4K touch screen TV and a Oculus Rift. Users create there garage in a controlled first person experience that allows you to move products around, then can explore there space by moving around using the touch screen, or putting on the Oculus Rift to see it in Virtual Reality.",
    date: "November 2015",
    client: "Canadian Tire",
    technology: "Unity 3D, PC, Oculus Rift",
    relatedWork: [2,3,4]
  },
  {
    id: 2,
    title: "WOWVR",
    images: [imageFour, imageFive, imageSix, imageSeven],
    description: "Developed in Unity, this app allows users to create their dream patio on their mobile iOS or Android device and look around there patio using GoogleVR. They will place their products from a birds eye view, and set up the patio just the way they want, and then they can go to explore view or VR view to look around the patio in a first person perspective. Both modes will use VR to allow you to look around, but GoogleVR allows you to place it in a Cardboard device to actually get the full experience.",
    date: "May 2016",
    client: "Canadian Tire",
    technology: "Unity 3D, Android, iOS, GoogleVR",
    relatedWork: [1,3,4]
  },
  {
    id: 3,
    title: "Canadian Sports Hall of Fame VR",
    images: [imageFour, imageFive, imageSix, imageSeven],
    description: "This app was created to invite members to the Canadian Sports Hall of Fame induction for 2016 using Google Cardboard/VR. This app would have users turn on there devices and find themselves in a full auditorium where they would be invited by a video playing to come to the event.",
    date: "July 2016",
    client: "Canadian Tire",
    technology: "Unity 3D, Android, iOS, GoogleVR",
    relatedWork: [2,1,4]
  },
  {
    id: 4,
    title: "Canada's Dream Backyard And Patio Builder",
    images: [imageFour, imageFive, imageSix, imageSeven],
    description: "Developed in Unity this is an app that connects an 85 inch 4K touch screen with an Oculus Rift to create an awesome patio creation experience. Users can create a patio through a top down builder on the touch screen and switch to first person explore mode and examine their creation. Share mode allows them to either share their creation there friends, or email themselves a shopping list that contains all of the items right down to the isle the item can be found in. If the customer is feeling adventurous, they can go into VR mode and walk around the patio and see what this patio set up would actually look like as if they were really there, while everyone around can watch what that user is looking at on the 4K screen.",
    date: "June 2015",
    client: "Canadian Tire",
    technology: "Unity 3D, PC, Oculus Rift",
    relatedWork: [2,3,1]
  },
  {
    id: 5,
    title: "Endless Aisle",
    images: [imageFour, imageFive, imageSix, imageSeven],
    description: "Endless Aisle allows our clients to extend their shelf space virtually without need for floor space. Customers can browse and purchase products, even if they aren't directly available in store. Endless Aisle is built in Unity 3D, and connects to a multitude of omnichannel services in the IQMetrix ecosystem. Our app is deployed to instore tablets regularliry, and gives customers an easy way to navigate through available products.",
    date: "Current",
    client: "IQMetrix",
    technology: "Unity 3D, Noesis, Android, iOS",
    relatedWork: [2,3,4]
  },
  {
    id: 6,
    title: "Parasite",
    images: [imageFour, imageFive, imageSix, imageSeven],
    description: "Requiring social deduction, lying, and patience, Parasite pits players in two seperate teams, trying to survive the cold arctic winters until help arrives. In the vein of great classic board games like Avalon, Werewolf, and Secret Hitler, players either play for the scientists or the parasites, and must outwit the other team to survive. But perhaps they can't even trust their own team. To be released shortly for Android and iOS.",
    date: "Current",
    client: "Personal",
    technology: "Unity 3D, NodeJS, React, Android, iOS",
    relatedWork: [2,3,4]
  }
];

export default portfolio;
