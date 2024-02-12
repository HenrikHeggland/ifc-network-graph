import "./App.css";
import { ChangeEvent, useState } from "react";
import IFCGraph from "./assets/components/IFCGraph";
import * as OBC from "openbim-components";
import "./App.css";

function App() {
  const [nodes, setNodes] = useState([]);
  const [links, setLinks] = useState([]);

  // Function to handle file upload and parse the IFC
  const handleFileUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (!file) {
      return;
    }
    const viewer = new OBC.Components();
    const ifcLoader = new OBC.FragmentIfcLoader(viewer);
    ifcLoader.settings.wasm = {
      path: "https://unpkg.com/web-ifc@0.0.43/",
      absolute: true,
    };

    const reader = new FileReader();
    reader.onload = async (e) => {
      const content = e.target?.result;
      try {
        // Parse the IFC content
        ifcLoader.onIfcLoaded.add(async (model) => {
          console.log(model);
        });
        // Assuming the IFC model is now loaded, you can start extracting data

        // Example: Extract nodes and links from the IFC model
        // This part will require understanding of the IFC model structure and web-ifc API
        // const extractedNodes = []; // Fill with actual data extraction logic
        // const extractedLinks = []; // Fill with actual data extraction logic

        // setNodes(extractedNodes);
        // setLinks(extractedLinks);
      } catch (error) {
        console.error("Error loading IFC:", error);
      }
    };
    reader.readAsArrayBuffer(file);
  };

  return (
    <>
      <div className="App">
        <header className="App-header">
          <h2>IFC Network Graph</h2>
          <input type="file" onChange={handleFileUpload} accept=".ifc" />
        </header>
        <IFCGraph nodes={nodes} links={links} />
      </div>
    </>
  );
}

export default App;
