import axios from "axios";
import { useState } from "react";
import DataField from "./DateField";
import IndustryButton from "./IndustryButton";

const industries = [
  {
    name: "HVAC",
    color: "#2388da",
    thumbnail:
      "https://assets.website-files.com/5ea6357d7899692584d2b70b/5ed74563f8c57fcb92b37ba5_New%20HVAC%20Hero%20No%20Nav.png",
  },
  {
    name: "Landscaping",
    color: "#21bb09",
    thumbnail:
      "https://assets.website-files.com/5ea6357d7899692584d2b70b/5ea6379c7899692474d2bd89_Landscaping%20Hero%20No%20Nav.png",
  },
];

export default function InstantSiteForm() {
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
    industry: "",
  });

  const handleTextChange: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

  const submittable = Object.keys(data).every((key) => {
    if (key === "cellPhone" || key === "suite") return true;
    return data[key as keyof typeof data].length > 0;
  });

  const createSite = (body: typeof data) => {
    if (!submittable) return;
    const res = axios.post("/api/sites", body);
  };
  return (
    <form>
      <div style={{ paddingTop: 60 }}>
        <h1>Instant Site Creator Demo</h1>
        <p>
          Enter the data and industry template you wish to create and we will build the fully custom
          website.
        </p>
      </div>
      <div style={{ padding: "40px 0" }}>
        <p className="instant-step-text">STEP 1: Enter the Business Owner's Contact Information</p>
        <div className="text-fields-grid">
          <DataField
            id="business-name"
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
          {/* <DataField span={2} label="Same" value={""} /> */}
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
        <div className="template-selection">
          {industries.map(({ name, color, thumbnail }) => (
            <IndustryButton
              key={name}
              name={name}
              color={color}
              thumbnail={thumbnail}
              selected={name === data.industry}
              onClick={() => setData({ ...data, industry: name })}
            />
          ))}
        </div>
      </div>
      <div style={{ padding: "30px 0", width: "100%", display: "flex", justifyContent: "center" }}>
        <button type="submit" className="create-website-button" disabled={!submittable}>
          Create {data.industry} Website
        </button>
      </div>
    </form>
  );
}
