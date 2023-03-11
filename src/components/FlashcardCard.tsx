import { useState } from "react";
import { Flashcard } from "../interfaces/Flashcard";

export default function FlashcardCard(props: {
  cardSide: number;
  setCardSide: React.Dispatch<React.SetStateAction<number>>;
  currentCard: number;
  flashcards: Flashcard[];
}) {
  const cardSideMap = (flashcard: Flashcard) => {
    if (props.cardSide === 0) {
      return (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h2 className="hanzi flashcard-highlight">{flashcard.hanzi}</h2>
          <h3 className="flashcard-highlight">{flashcard.pinyin}</h3>
        </div>
      );
    } else if (props.cardSide === 1) {
      return (
        <>
          <h2 className="flashcard-highlight">{flashcard.yingyu}</h2>
        </>
      );
    } else {
      throw Error(`cardSide not set properly`);
    }
  };
  return (
    <>
      <div className="flashcard">
        <div>{cardSideMap(props.flashcards[props.currentCard])}</div>
        <button
          className="flashcard-flip-button"
          type="button"
          onClick={() => {
            props.setCardSide(props.cardSide ? 0 : 1);
          }}
        >
          flip
        </button>
      </div>
    </>
  );
}
