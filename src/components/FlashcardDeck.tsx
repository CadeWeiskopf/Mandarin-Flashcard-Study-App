import { useEffect, useState } from "react";
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
  const [cardOrder, setCardOrder] = useState<Flashcard[]>(props.flashcards);
  useEffect(() => {
    const scrambledCardOrder = props.flashcards.sort(() => Math.random() - 0.5);
    setCardOrder(scrambledCardOrder);
  }, []);
  return (
    <>
      <div className="flashcarddeck">
        <div>
          <button
            type="button"
            onClick={() => {
              const newCard = currentCard - 1;
              setCurrentCard(newCard >= 0 ? newCard : props.flashcards.length);
            }}
          >
            -
          </button>
          <button
            type="button"
            onClick={() => {
              const newCard = currentCard + 1;
              setCurrentCard(newCard <= props.flashcards.length ? newCard : 0);
            }}
          >
            +
          </button>
        </div>
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
          />
        )}
      </div>
    </>
  );
}
