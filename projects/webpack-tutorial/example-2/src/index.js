import "./styles/main.scss";
import example from "./images/example.jpg";

// Create a class property without a constructor
class Game {
  name = "Violin Charades";
}
const myGame = new Game();
// Create paragraph node
const p = document.createElement("p");
p.textContent = `I like ${myGame.name}.`;

const heading = document.createElement("h1");
heading.textContent = "Interesting";

//Creating an image
const image = document.createElement("img");
image.src = example;

const app = document.querySelector("#root");
app.append(heading, p, image);
