
import './App.css';
import { Timer } from "./components/Timer";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(true)

  return (
    <div className="App">
    
      {/* <Timer /> */}
      {show ? <Timer /> : null}
      <button onClick={() => setShow (!show)} > {show ? "HIDE": "SHOW"}</button>
      
    </div>
  );
}

export default App;
