import pokemonGameImageMain from "./pokemonGameImageMain.png";
import calculatorImageMain from "./calculatorImageMain.png";

const pokemonGameImageMainSrc = pokemonGameImageMain.src;
const calculatorImageMainSrc = calculatorImageMain.src;

const projects = [
  {
    index: 0,
    title: "Pokemon Battler",
    subtitle: "Pokemon Game using the PokeApi",
    img: pokemonGameImageMainSrc,
    secondImg: "image goes here",
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
    secondImg: "image goes here",
    howItWorks: `It is intended to work like a regular calculator`,
    pro: ``,
    con: ``,
    appLink: "https://coltonkramer.github.io/Calculator-Project/",
    github: "https://github.com/coltonkramer/Calculator-Project",
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
