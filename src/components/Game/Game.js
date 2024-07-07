import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessInput, setGuessInput] = React.useState("");

  

  const handleSubmitGuess = () => {
    // if(guessInput.length < 5){
    //   return
    // }
    const formatedGuess = guessInput.toLocaleUpperCase("en-US");
    console.log("GUESS:", formatedGuess);
  };

  return (
    <>
      <GuessInput
        input={guessInput}
        setInput={setGuessInput}
        submitGuess={handleSubmitGuess}
      />
    </>
  );
}

export default Game;
