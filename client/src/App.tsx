import { useState } from "react";
import "./App.css";
import DataField from "./components/DataField";

// const ColorModeContext = createContext({ toggleColorMode: () => {} });

function App() {
  const [data, setData] = useState({
    businessName: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    cellPhone: "",
    streetAddress: "",
    suite: "",
    city: "",
    state: "",
    zip: "",
    country: "",
  });

  const handleTextChange: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

  return (
    <div className="App">
      <main className="main-container">
        <div style={{ padding: "40px 0" }}>
          <p className="instant-step-text">
            STEP 1: Enter the Business Owner's Contact Information
          </p>
          <div className="text-fields-grid">
            <DataField
              span={4}
              label="Business Name"
              required
              value={data.businessName}
              onChange={handleTextChange}
              name="businessName"
            />
            <DataField
              span={2}
              label="First Name"
              required
              value={data.firstName}
              onChange={handleTextChange}
              name="firstName"
            />
            <DataField
              span={2}
              label="Last Name"
              required
              value={data.lastName}
              onChange={handleTextChange}
              name="lastName"
            />
            <DataField
              span={2}
              label="Business Number"
              required
              value={data.phoneNumber}
              onChange={handleTextChange}
              name="phoneNumber"
            />
            <DataField
              span={2}
              label="Email Address"
              required
              value={data.email}
              onChange={handleTextChange}
              name="email"
            />
            <DataField
              span={2}
              label="Cell Phone"
              value={data.cellPhone}
              onChange={handleTextChange}
              name="cellPhone"
            />
            <DataField span={2} label="Same" value={""} />
          </div>
          <div style={{ marginTop: 60 }} />
          <div className="text-fields-grid">
            <DataField
              span={2}
              label="Street Address"
              required
              value={data.streetAddress}
              onChange={handleTextChange}
              name="streetAddress"
            />
            <DataField
              span={2}
              label="Suite, Apt, Room #"
              value={data.suite}
              onChange={handleTextChange}
              name="suite"
            />
            <DataField
              span={1}
              label="City"
              required
              value={data.city}
              onChange={handleTextChange}
              name="city"
            />
            <DataField
              span={1}
              label="State"
              required
              value={data.state}
              onChange={handleTextChange}
              name="state"
            />
            <DataField
              span={1}
              label="Zip/Postal"
              required
              value={data.zip}
              onChange={handleTextChange}
              name="zip"
            />
            <DataField
              span={1}
              label="Country"
              value={data.country}
              onChange={handleTextChange}
              name="country"
            />
          </div>
        </div>
        <div style={{ padding: "40px 0" }}>
          <p className="instant-step-text">STEP 2: Select the template you wish to create</p>
          <div className="template-selection"></div>
        </div>
      </main>
    </div>
  );
}

export default App;
