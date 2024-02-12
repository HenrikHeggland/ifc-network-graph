import "./App.css";
import IFCGraph from "./assets/components/IFCGraph";
import "./App.css";

const mockNodes = [
  { id: "1", name: "Node 1" },
  { id: "2", name: "Node 2" },
  { id: "3", name: "Node 3" },
  { id: "4", name: "Node 4" },
  { id: "5", name: "Node 5" },
  { id: "6", name: "Node 6" },
];

const mockLinks = [
  { source: "1", target: "2" },
  { source: "2", target: "3" },
  { source: "2", target: "4" },
  { source: "4", target: "5" },
  { source: "2", target: "6" },
];

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <h2>IFC Network Graph</h2>
        </header>
        <IFCGraph nodes={mockNodes} links={mockLinks} />
      </div>
    </>
  );
}

export default App;
