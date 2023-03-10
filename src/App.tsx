import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown } from "react-bootstrap";
import { useState } from "react";
import FlashcardDeck from "./components/FlashcardDeck";
import { Flashcard } from "./interfaces/Flashcard";
import set1 from "./assets/set1.json";

function App() {
  // pass to FlashcardDeck
  const [selectedSet, setSelectedSet] = useState<Flashcard[] | null>(null);
  // use for display
  const [selectedSetName, setSelectedSetName] = useState("");
  return (
    <div className="App">
      <header>
        <h3>Mandarin Flashcards</h3>
        <div className="small-text">Test your knowledge.</div>
        <br />
        <Dropdown
          className="dropdown-container"
          onSelect={(e) => {
            console.log(e);
            if (e === "set1") {
              setSelectedSet(set1);
              setSelectedSetName(e);
            }
          }}
        >
          <Dropdown.Toggle>
            {selectedSetName || "Select flashcards"}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item eventKey="set1">set1</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </header>
      <main>{selectedSet && <FlashcardDeck flashcards={selectedSet} />}</main>
      <footer>footer</footer>
    </div>
  );
}

export default App;
