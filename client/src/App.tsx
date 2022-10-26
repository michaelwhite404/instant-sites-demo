import "./App.css";
import InstantSiteForm from "./components/InstantSiteForm";

// const ColorModeContext = createContext({ toggleColorMode: () => {} });

function App() {
  return (
    <div className="App">
      <main className="main-container">
        <InstantSiteForm />
      </main>
      <div
        style={{
          position: "absolute",
          bottom: 12,
          right: 12,
          fontSize: 10,
        }}
      >
        Project created by Michael White
      </div>
    </div>
  );
}

export default App;
