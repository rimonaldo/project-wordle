import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessList from "../GuessList/GuessList";
// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessInput, setGuessInput] = React.useState("");
  const [guessList, setGuessList] = React.useState([])
  
  const addGuess = (formatedGuess) =>{
    const newGuess = {
      label:formatedGuess,
      id:Math.random(),
      createdAt:Date.now()
    }

    const nextGuessList = [...guessList,newGuess]
    setGuessList(nextGuessList)
  }

  const handleSubmitGuess = () => {
    // if(guessInput.length < 5){
    //   return
    // }
    const formatedGuess = guessInput.toLocaleUpperCase("en-US");
    console.log("GUESS:", formatedGuess);
    addGuess(formatedGuess)
  };

  return (
    <>
      {guessList.length > 0 && <GuessList guessList={guessList}/>}
      <GuessInput
        input={guessInput}
        setInput={setGuessInput}
        submitGuess={handleSubmitGuess}
      />
    </>
  );
}

export default Game;
