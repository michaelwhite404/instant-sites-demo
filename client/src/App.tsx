import { useState } from "react";
import "./App.css";
import CreatedSite from "./components/CreatedSite";
import InstantSiteForm from "./components/InstantSiteForm";

// const ColorModeContext = createContext({ toggleColorMode: () => {} });

export interface Site {
  businessName: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  cellPhone?: string;
  streetAddress: string;
  suite?: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  industry: string;
  customId: number;
  slug: string;
}

function App() {
  const [pageState, setPageState] = useState("editing");
  const [newSite, setNewSite] = useState<Site>();
  return (
    <div className="App">
      <main className="main-container">
        <div style={{ paddingTop: 60 }}>
          <h1>Instant Site Creator Demo</h1>
          <p>
            Enter the data and industry template you wish to create and we will build the fully
            custom website.
          </p>
        </div>
        {pageState === "editing" && (
          <InstantSiteForm setPageState={setPageState} setNewSite={setNewSite} />
        )}
        {pageState === "created" && (
          <CreatedSite newSite={newSite} setNewSite={setNewSite} setPageState={setPageState} />
        )}
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
