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
        <Dropdown
          onSelect={(e) => {
            console.log(e);
            if (e === "set1") {
              setSelectedSet(set1);
              setSelectedSetName(e);
            }
          }}
        >
          <Dropdown.Toggle className="dropdownmenu">
            {selectedSetName || "Select flashcards"}
          </Dropdown.Toggle>
          <Dropdown.Menu className="dropdownmenu">
            <Dropdown.Item
              eventKey="set1"
              className="dropdownmenu-options"
            >
              set1
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </header>
      <main>{selectedSet && <FlashcardDeck flashcards={selectedSet} />}</main>
      <footer>
        <small className="small-text">Created by Cade Weiskopf</small>
      </footer>
    </div>
  );
}

export default App;
