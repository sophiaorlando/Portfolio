// Sneaker Freakers
import I_SNEAKER_FREAKERS from '../../assets/img/projects/SneakerFreakers.png';
import I_SNEAKER_FREAKERS_VIDEO from '../../assets/img/projects/Project3Demo.gif';
//Beach Cleanup Initiative
import I_BEACH from '../../assets/img/projects/beachImg.png';
import I_BEACH_VIDEO from '../../assets/img/projects/Project2Demo.gif';
//Budget Tracker
import I_BUDGET_TRACKER from '../../assets/img/projects/BudgetTracker.png';
import I_BUDGET_IMG from '../../assets/img/projects/Budget-1.png';
// New York Times Article Search
import I_NYTS from '../../assets/img/projects/NYTS.png';
import I_NYTS_IMG from '../../assets/img/projects/NYTSearch.gif';
//Weather App on Steroids
import I_WEATHER from '../../assets/img/projects/steroids.jpg';
import I_WEATHER_VIDEO from '../../assets/img/projects/WeatherDemo.gif';
// State Visitor Centers
import I_VISITOR_CENTERS from '../../assets/img/projects/visitorCenterImg.png';
import I_VISITOR_CENTERS_VIDEO from '../../assets/img/projects/StateVisitorDemo.gif';
// Iceland Video
import I_ICELAND from '../../assets/img/projects/Flag-Iceland.jpg';
import I_ICELAND_VIDEO from '../../assets/img/projects/Iceland-3.png';
//Disney Video
import I_DISNEY from '../../assets/img/projects/Disney.jpg';
import I_DISNEY_VIDEO from '../../assets/img/projects/Disney-1.png';
//Germany video
import I_GERMANY from '../../assets/img/projects/Germany.jpg';
import I_GERMANY_VIDEO from '../../assets/img/projects/Germany-2.png';
// LLF video
import I_LLF from '../../assets/img/projects/LLF.jpg';
import I_LLF_VIDEO from '../../assets/img/projects/LLF-2.PNG';
// Zion Video
import I_ZION from '../../assets/img/projects/Zion.jpg';
import I_ZION_VIDEO from '../../assets/img/projects/ZION-2.PNG';


export const myProjects = {
  fullStack: [
    {
      imgSrc: I_BEACH,
      filterType: "filter-fullStack",
      name: "Beach Cleanup Initiative",
      id: "0",
      description: "This application is used as a resource to find local beach cleanups by county in California. Once logged in, users have to the ability to create their own events at various locations in their county. Users can organize, collaborate, and share to help keep our beaches clean!",
      github: "https://github.com/sophiaorlando/Project2",
      url: "https://thawing-temple-82462.herokuapp.com/",
      languages: "Javascript, MySQL, Sequelize, Moment.js, Node.js, Express, API",
      video: I_BEACH_VIDEO
    },
    {
      imgSrc: I_BUDGET_TRACKER,
      filterType: "filter-fullStack",
      name: "Budget Tracker",
      id: "1",
      description: "Giving users a fast and easy way to track their money is important, but allowing them to access that information anytime is even more important. Having offline functionality is paramount to my applicaiton's success. If you are traveling, you may use this application to track any withdrawls or deposits with or without a data/internet connection, so that your account balance will remain accurate.",
      github: "https://github.com/sophiaorlando/homework18",
      url: "https://rocky-springs-86918.herokuapp.com/",
      languages: "PWA (Progressive Web Application), HTML, CSS, Bootstrap, API, Node",
      vide: I_BUDGET_IMG

    },
    {
      imgSrc: I_NYTS,
      filterType: "filter-fullStack",
      name: "New York Times Article Search",
      id: "2",
      description: "Users get a 4 for 1 deal with this application. With the ability to filter through thousands of New York Times Articles, users recieve relevant articles articles per search including; Title, Author, Image, and link to the article. ",
      github: "https://sophiaorlando.github.io/New-York-Times-Article-Search/",
      url: "https://github.com/sophiaorlando/New-York-Times-Article-Search",
      languages: "jQuery, AJAX, CSS, Bootstrap, API",
      video: I_NYTS_IMG

    },
    {
      imgSrc: I_SNEAKER_FREAKERS,
      filterType: "filter-fullStack",
      name: "Sneaker Freakers",
      id: "3",
      description: "For all of the hypebeast sneaker-heads out there, Sneaker Freakers was designed to be the mecca for all things sneakers. This collaborative application is used as a resource for sneaker-heads to find featured sneakers by brands like; Adidas, Reebok, Jordan, Puma, and more. Users may view details about a specified sneaker and share their thoughts through an interactive blog page.",
      github: "https://github.com/sophiaorlando/Project3",
      url: "https://secret-beyond-86832.herokuapp.com/home",
      languages: "Javascript, React.js, Node.js, Material-UI, Bootstrap, API",
      video: I_SNEAKER_FREAKERS_VIDEO


    },
    {
      imgSrc: I_WEATHER,
      filterType: "filter-fullStack",
      name: "Weather App on Steroids",
      id: "4",
      description: "Wondering what the weather is like in Abakan, Russia? This application is for you. Programmed to feature current weather data through pie charts and graphs in any city a user can think of, Weather App on Steroids will never have you guessing what the weather will be like.",
      github: "https://github.com/sophiaorlando/hourlyWeatherApp",
      url: "https://guarded-citadel-48915.herokuapp.com/",
      languages: "Javascript, React, Nodejs, Bootstrap, Fetch API",
      video: I_WEATHER_VIDEO


    },
    {
      imgSrc: I_VISITOR_CENTERS,
      filterType: "filter-fullStack",
      name: "U.S.A Visitor Centers",
      id: "5",
      description: "Built with family travel in mind, this web application presents Visitor Center's in all 50 U.S.A states. Average gas prices per state are included to give users an idea of how costly their trip would be.",
      github: "https://github.com/sophiaorlando/State-Visitor-Centers",
      url: "https://young-shore-67722.herokuapp.com/",
      languages: "HandleBars, Javascript, MySQL, CSS, API, Express, Node",
      video: I_VISITOR_CENTERS_VIDEO


    },
  ],
  videography: [
    {
      imgSrc: I_ICELAND,
      filterType: "filter-videography",
      name: "Iceland video",
      id: "0",
      description: "Sponsored by TravelingMom, I traveled to Iceland with a tour provided by, Hidden Iceland, to capture destination content. I filmed the footage using an iPhone and edited the film using Final Cut Pro X.",
      url: "https://www.youtube.com/watch?v=XyuIrDLizE4",
      languages: "Final Cut Pro X",
      video: I_ICELAND_VIDEO

    },
    {
      imgSrc: I_GERMANY,
      filterType: "filter-videography",
      name: "Germany video",
      id: "1",
      description: "Sponsored by TravelingMom, I traveled to Germany to create a family destination video. The video was used in a published article on TravelingMom. I filmed the footage with an iPhone and edited the film using Final Cut Pro X.",
      article: "https://www.travelingmom.com/travel-tips/small-group-family-tours-in-europe/",
      url: "https://www.youtube.com/watch?v=3mcnqw8kja4",
      languages: "Final Cut Pro X",
      video: I_GERMANY_VIDEO

    },
    {
      imgSrc: I_DISNEY,
      filterType: "filter-videography",
      name: "Disney Video",
      id: "2",
      description: "Sponsored by TravelingMom, I traveled with Fran Capo, Guiness World Record's fastest talking woman for the past two decades, to Disney World in Orlando, FL. I filmed the footage using an iPhone and edited using Adobe Premiere Pro.",
      url: "https://www.youtube.com/watch?v=jN3d3NB8248&t=2s",
      languages: "Adobe Premiere Pro",
      video: I_DISNEY_VIDEO

    },
  ],
  igtv: [
    {
      imgSrc: I_LLF,
      filterType: "filter-igtv",
      name: "LLF Studios IGTV",
      id: "0",
      description: "Sponsored by TravelingMom, I produced an IGTV advertisement for LLF Studios, a local high-end jewler company to highlight their new Face Mask Chain product. It was published on TravelingMom Instagram account and gained over 220 views. I filmed the footage using an iPhone and edited the advertisement with Final Cut Pro X.",
      url: "https://www.instagram.com/tv/CGDzfJiplOM/",
      languages: "Final Cut Pro X",
      video: I_LLF_VIDEO

    },
    {
      imgSrc: I_ZION,
      filterType: "filter-igtv",
      name: "ZION IGTV",
      id: "1",
      description: "Sponsored by TravelingMom, I produced a 3-part IGTV series featuring The Narrows in Zion National Park. The series reached 1,734 users. I edited the IGTV's using Final Cut Pro X. ",
      url: "https://www.instagram.com/travelingmom/channel/",
      languages: "Final Cut Pro X",
      video: I_ZION_VIDEO

    },
  ]

}