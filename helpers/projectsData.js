import pokemonGameImageMain from "../pages/assets/pokemonGameImageMain.png";
import pokemonGameImageSecond from "../pages/assets/pokemonGameImageSecond.png";
import calculatorImageMain from "../pages/assets/calculatorImageMain.png";
import calculatorImageSecond from "../pages/assets/calculatorImageSecond.png";
import rivianImageMain from "../pages/assets/rivianImageMain.png";
import rivianImageSecond from "../pages/assets/rivianImageSecond.png";

const pokemonGameImageMainSrc = pokemonGameImageMain.src;
const pokemonGameImageSecondSrc = pokemonGameImageSecond.src;
const calculatorImageMainSrc = calculatorImageMain.src;
const calculatorImageSecondSrc = calculatorImageSecond.src;
const rivianImageMainSrc = rivianImageMain.src;
const rivianImageSecondSrc = rivianImageSecond.src;

const projects = [
  {
    index: 0,
    title: "Pokemon Battler",
    subtitle: "Pokemon Game using the PokeApi",
    img: pokemonGameImageMainSrc,
    secondImg: pokemonGameImageSecondSrc,
    howItWorks: `The rules of the game are pretty simple you can click 'Next Pokemon' on the left side 
      of the screen get select a pokemon for your team. The button on the right will initiate 
      a battle with the current pokemon! An alert will show telling you if you win or lose 
      the battle. The logic is based on the Pokemon's attack stat and typing. If the type is 
      super effective against the opponent its attack stat will double, guaranteeing a win. 
      Additionally if the types are the same it will use only the attack stat to decide the 
      winner`,
    pro: `This project was my first exposure to any JavaScript so it was all a great new 
      learning experience for me. After learning about what an API was I thought using it in 
      a project would be a great way to break into managing incoming data on a small scale. I 
      learned a lot about manipulating objects and how HTML, CSS, and JavaScript all interact. 
      This project was really simple but it was a big breakthrough in my excitement for coding 
      and web development!`,
    con: `At first I found JavaScript really confusing and honestly I really did not like it. 
      The biggest thing for me was wrapping my head around objects specifically how to access 
      specific information from an object. Especially when they go a few levels deep with different 
      indexes and properties. Thinking back on it now I can't imagine why I found it so hard 
      but I suppose understanding comes with time and exposure to something.`,
    appLink: "https://coltonkramer.github.io/pokemongame/",
    github: "https://github.com/coltonkramer/pokemongame",
  },
  {
    index: 1,
    title: "Calculator",
    subtitle: "Simple calculator app",
    img: calculatorImageMainSrc,
    secondImg: calculatorImageSecondSrc,
    howItWorks: ` You use it like you would a regular calculator. Type in a number then press one 
    of the operator buttons after you type in another number press the equal sign to see your results. 
    The purpose of this project was to push myself and build something I had never 
    attempted before. I found that by itself JavaScript is actually not that friendly to math 
    which made some things rather tedious. It ended up being a good learning experience and 
    I'd like to revisit this project in the future to make it better.`,
    pro: `I think the overall aesthetic turned out nicely. Everything is arranged with css grid 
    which gives it a nice, clean appearance. Along with the monochromatic grayscale which I find 
    to be much more inviting than a bright white screen. `,
    con: `The arithmetic can get a little weird when you string long chains of operations. If I were to rebuild this in the future I would use React which would allow the app the track the total more reliably`,
    appLink: "https://coltonkramer.github.io/Calculator-Project/",
    github: "https://github.com/coltonkramer/Calculator-Project",
  },
  {
    index: 2,
    title: "Rivian",
    subtitle: "Mock of the Rivian Homepage",
    img: rivianImageMainSrc,
    secondImg: rivianImageSecondSrc,
    howItWorks: `This was a mock website I built for the interview I had at my current internship. It 
    was my first big react project and it was the first time I had used a javascript framework at all. 
    It uses assets I got from the rivian website and I recreated some of the key components including 
    their main carousel, navigation, and part of the gear shop`,
    pro: `I learned a ton from this project and I guess I learned enough because it got me an 
    intership! But dealing with React for the first time was difficult in that the environment is 
    completely new and there are things you just don't know exist at all until you do`,
    con: `I wanted to use a content management system but sadly I could not make it happen in the time 
    I had. Although they make it easy for the developer to use when there are version incompatibilities 
    things can get weird in the backend. So that will be a challenge for another day!`,
    appLink: "https://rivianpresentationmain.gatsbyjs.io/",
    github: "https://github.com/coltonkramer/rivian-presentation",
  },
  //   {
  //     title: "Cafe",
  //     subtitle: "Preserving the natural world. Forever.",
  //     img: "https://images.rivian.com/2md5qhoeajym/O8I8PXKUbyi8FqKqWj3ib/01e2a366e911cd8857584846dcb0fdd7/3.jpg?fm=webP",
  //     value: "3",
  //   },
  //   {
  //     title: "Interior",
  //     subtitle: "Coming Together to build the future.",
  //     img: "https://images.rivian.com/2md5qhoeajym/7warGbZSv8vKMh27b0HKcm/ddeec8367e44b2573906ff96cb40595a/4.jpg?fm=webP",
  //     value: "4",
  //   },
];

export default projects;
