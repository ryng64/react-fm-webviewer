import { useEffect, useState } from "react";
import FmCount from "./fmcount";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function callFromFM(sp) {
    // SP is sent as String. Parse for JSON
    setCount(count + 10);
    let scriptParameter = null;
    if (isJsonString(sp)) {
      scriptParameter = JSON.parse(sp);
    } else {
      scriptParameter = sp;
    }

    let message = null;
    if (typeof scriptParameter === "object" && scriptParameter !== null) {
      message = scriptParameter.message;
    } else {
      message = scriptParameter;
    }
    console.log(`Javascript Ran From Filemaker:`, message);
  }

  //add function at the window level to be called from FileMaker
  window.callFromFM = callFromFM;

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + Claris FM</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <FmCount count={count} />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

function isJsonString(str) {
  // If String can be parsed, then it is valid JSON
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}

export default App;
