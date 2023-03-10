import { useState } from "react";
import { Flashcard } from "../interfaces/Flashcard";
import FlashcardCard from "./FlashcardCard";

export default function FlashcardDeck(props: { flashcards: Flashcard[] }) {
  const [currentCard, setCurrentCard] = useState(-1);
  return (
    <>
      <div className="flashcarddeck">
        {currentCard < 0 ? (
          <button
            type="button"
            onClick={() => {
              setCurrentCard(
                Math.floor(Math.random() * props.flashcards.length)
              );
            }}
          >
            start
          </button>
        ) : (
          <FlashcardCard flashcard={props.flashcards[currentCard]} />
        )}
      </div>
    </>
  );
}
