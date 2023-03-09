import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown } from "react-bootstrap";
import { useState } from "react";

function App() {
  const [selectedSet, setSelectedSet] = useState("");
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
          }}
        >
          <Dropdown.Toggle>
            {selectedSet || "Select flashcards"}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item eventKey="test">test</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </header>
      <main>main</main>
      <footer>footer</footer>
    </div>
  );
}

export default App;
