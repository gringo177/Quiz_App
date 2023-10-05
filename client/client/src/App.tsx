import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [answer, setAnswer] = useState("");
// In summary, this part of the code sets up a React component with a reference to an input element and a state variable

  useEffect(() => {
    inputRef.current?.focus();
  }, []);
// The code uses the useEffect hook in a React functional component. This hook is used for side effects in a React component, such as interacting with the DOM or fetching data.
  return (
    <>
      <div className="app">
        <div className="top">
          <h2 className="text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga
            distinctio dicta ratione! Alias veniam eaque odio voluptate odit
            minus accusamus optio ab totam aliquam fugit nisi quaerat harum,
            illum _______.
          </h2>
          <input
            ref={inputRef}
            className="input"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="answer"
            onBlur={() => inputRef.current?.focus()}
          />
        </div>
        <div className="bottom">
          <div className="hint">
            <button className="button">Show the answer</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
// It returns JSX code that represents the structure of a web page. This JSX code defines the layout and content of the component.



// could you help me to run the server?

// what am i missing in the project, what else i can add?

