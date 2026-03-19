/** @format */

import Joke from "./Joke";
import jokesData from "../src/assets/Datas/JokeDatas";

export default function App() {
  const jokeElements = jokesData.map((joke) => {
    return <Joke key={joke.id} setup={joke.setup} punchline={joke.punchline} />;
  });
  return <div>{jokeElements}</div>;
}
