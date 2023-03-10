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
        <>
          <h2 className="hanzi">{flashcard.hanzi}</h2>
          <h3>{flashcard.pinyin}</h3>
        </>
      );
    } else if (props.cardSide === 1) {
      return (
        <>
          <h2>{flashcard.yingyu}</h2>
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
