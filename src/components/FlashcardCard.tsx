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
  const [cardSide, setCardSide] = useState(0);
  const cardSideMap = (flashcard: Flashcard) => {
    if (cardSide === 0) {
      return (
        <>
          <h2>{flashcard.hanzi}</h2>
          <h3>{flashcard.pinyin}</h3>
        </>
      );
    } else if (cardSide === 1) {
    } else {
      throw Error(`cardSide not set properly`);
    }
  };
  return (
    <>
      <div className="flashcard">
        <div>{cardSideMap(props.flashcards[props.currentCard])}</div>
        <button
          onClick={() => {
            setCardSide(cardSide ? 1 : 0);
          }}
        >
          flip
        </button>
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
