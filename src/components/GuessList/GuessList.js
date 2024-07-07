import React from "react";

function GuessList({ guessList }) {
  return (
    <div className="guess-results">
      {guessList.map((guess, id) => {
        return (
          <p key={id} className="guess">
            {guess.label}
          </p>
        );
      })}
    </div>
  );
}

export default GuessList;
