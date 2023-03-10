import { useState } from "react";
import { Flashcard } from "../interfaces/Flashcard";

export default function FlashcardCard(props: {
  currentCard: number;
  flashcards: Flashcard[];
  setCurrentCard: React.Dispatch<React.SetStateAction<number>>;
  setNewRandomCard: (
    setCurrentCard: React.Dispatch<React.SetStateAction<number>>,
    flashcards: Flashcard[]
  ) => void;
}) {
  const [cardSide, setCardSide] = useState("front");
  const cardSideMap = (flashcard: Flashcard) => {
    if (cardSide === "front") {
      return (
        <>
          <h2>{flashcard.hanzi}</h2>
          <h3>{flashcard.pinyin}</h3>
        </>
      );
    }
  };
  return (
    <>
      <div className="flashcard">
        <div>{cardSideMap(props.flashcards[props.currentCard])}</div>
        <button>flip</button>
        <button
          onClick={() => {
            props.setNewRandomCard(props.setCurrentCard, props.flashcards);
          }}
        >
          new
        </button>
      </div>
    </>
  );
}
