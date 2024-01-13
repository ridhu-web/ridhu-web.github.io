import self from "../img/self.png";
import mock1 from "../img/mock1.png";
import turnbyturn from "../img/TurnByTurnNavigation.jpg";
import mock3 from "../img/mock3.png";
import mock4 from "../img/mock4.png";
import boolean from "../img/BooleanAlgebra.png";
import fluid from "../img/FluidSimulation.png";

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
  firstName: " Ridhuparan",
  lastName: " Kungumaraju",
  initials: "RK", // the example uses first and last, but feel free to use three or more if you like.
  position: "a Full Stack Developer",
  selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [
    // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
    {
      emoji: "☕",
      text: "fueled by coffee",
    },
    {
      emoji: "🌎",
      text: "based in the US",
    },
    {
      emoji: "💼",
      text: "Graduate Student at UIC | Ex Intern Regions Bank | Ex Hewlett Packard Enterprise",
    },
    {
      emoji: "📧",
      text: "kridhuparan.mail@gmail.com",
    },
  ],
  socials: [
    {
      link: "https://github.com",
      icon: "fa fa-github",
      label: "github",
    },
    {
      link: "https://linkedin.com",
      icon: "fa fa-linkedin",
      label: "linkedin",
    },
    // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
    // Just change the links so that they lead to your social profiles.
  ],
  bio: "Hello World! I'm Ridhuparan. I'm a Full Stack Developer with a passion for building beautiful, functional, and accessible websites and applications. I'm currently a Graduate Student at UIC, pursuing my Masters in Computer Science. I'm also Interned at Regions Bank and Worked as a full-time at Hewlett Packard Enterprise.",
  skills: {
    proficientWith: [
      "javascript",
      "react",
      "git",
      "github",
      "bootstrap",
      "html5",
      "css3",
      "figma",
    ],
    exposedTo: ["nodejs", "python", "adobe illustrator"],
  },
  hobbies: [
    {
      label: "reading",
      emoji: "📖",
    },
    {
      label: "yoga",
      emoji: "🎭",
    },
    {
      label: "movies",
      emoji: "🎥",
    },
    {
      label: "cooking",
      emoji: "🌶",
    },
    // Same as above, change the emojis to match / relate to your hobbies or interests.
    // You can also remove the emojis if you'd like, I just think they look cute :P
  ],
  portfolio: [
    // This is where your portfolio projects will be detailed
    {
      title: "Covid Data Visualization",
      live: "https://paytonpierce.dev", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: "https://github.com/ridhu-web/Covid_Data_Visualization", // this should be a link to the **repository** of the project, where the code is hosted.
      image: mock1,
    },

    {
      title: "Google Maps Customized for Bikers",
      live: "https://paytonpierce.dev", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: "https://github.com/ridhu-web/Bike-Navigation-System-Android", // this should be a link to the **repository** of the project, where the code is hosted.
      image: turnbyturn,
    },
    {
      title: "Boolean-Algebra-with-OOPs (Scala)",
      live: "https://paytonpierce.dev", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: "https://github.com/ridhu-web/Boolean-Algebra-with-OOP", // this should be a link to the **repository** of the project, where the code is hosted.
      image: boolean,
    },
    {
      title: "Chicago Skyscrapers Shadow Analysis",
      live: "https://paytonpierce.dev", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: "https://github.com/ridhu-web/Chicago_Shadows", // this should be a link to the **repository** of the project, where the code is hosted.
      image: mock3,
    },
    {
      title: "Fluid Simulation",
      live: "https://paytonpierce.dev", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: "https://github.com/ridhu-web/Fluid-Simulation", // this should be a link to the **repository** of the project, where the code is hosted.
      image: fluid,
    },
    {
      title: "US Crimes Analysis",
      live: "https://paytonpierce.dev", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: "https://github.com/ridhu-web/Chicago_Crimes_Visualization", // this should be a link to the **repository** of the project, where the code is hosted.
      image: mock4,
    },
  ],
};