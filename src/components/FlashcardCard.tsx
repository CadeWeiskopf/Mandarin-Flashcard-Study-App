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
  return (
    <>
      <div>{JSON.stringify(props.flashcards[props.currentCard])}</div>
      <button
        onClick={() => {
          props.setNewRandomCard(props.setCurrentCard, props.flashcards);
        }}
      >
        new card
      </button>
    </>
  );
}
