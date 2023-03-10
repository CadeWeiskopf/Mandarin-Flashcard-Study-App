import { useState } from "react";
import { Flashcard } from "../interfaces/Flashcard";
import FlashcardCard from "./FlashcardCard";

const setNewRandomCard = (
  setCurrentCard: React.Dispatch<React.SetStateAction<number>>,
  flashcards: Flashcard[]
) => {
  setCurrentCard(Math.floor(Math.random() * flashcards.length));
};

export default function FlashcardDeck(props: { flashcards: Flashcard[] }) {
  const [currentCard, setCurrentCard] = useState(-1);
  return (
    <>
      <div className="flashcarddeck">
        {currentCard < 0 ? (
          <button
            type="button"
            onClick={() => {
              setNewRandomCard(setCurrentCard, props.flashcards);
            }}
          >
            start
          </button>
        ) : (
          <FlashcardCard
            currentCard={currentCard}
            flashcards={props.flashcards}
            setCurrentCard={setCurrentCard}
            setNewRandomCard={setNewRandomCard}
          />
        )}
      </div>
    </>
  );
}
