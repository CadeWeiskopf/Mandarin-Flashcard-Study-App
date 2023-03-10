import { Flashcard } from "../interfaces/Flashcard";

export default function FlashcardDeck(props: { flashcards: Flashcard[] }) {
  return (
    <>
      {props.flashcards.map((flashcard) => {
        return <>{JSON.stringify(flashcard)}</>;
      })}
    </>
  );
}
