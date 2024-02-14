import "./App.css";
import IFCGraph from "./assets/components/IFCGraph";
import "./App.css";
import ImportIFC from "./assets/components/ImportIFC";
import { useState } from "react";

function App() {
  const [nodes, setNodes] = useState([]);
  const [links, setLinks] = useState([]);

  return (
    <>
      <div className="App">
        <header className="App-header">
          <h2>IFC Network Graph</h2>
        </header>
        <ImportIFC />
        <div className="viewer-container">
          <IFCGraph nodes={nodes} links={links} />
        </div>
      </div>
    </>
  );
}

export default App;
