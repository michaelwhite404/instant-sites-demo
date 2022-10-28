import React from "react";
import { Site } from "../App";

interface Props {
  newSite: Site | undefined;
  setNewSite: React.Dispatch<React.SetStateAction<Site | undefined>>;
  setPageState: React.Dispatch<React.SetStateAction<string>>;
}

export default function CreatedSite({ newSite, setNewSite, setPageState }: Props) {
  const link = newSite
    ? `${
        process.env.NODE_ENV === "production" ? window.location.href : "http://localhost:9000/"
      }${newSite.industry.toLowerCase()}/${newSite.customId}/${newSite.slug}`
    : undefined;

  const reset = () => {
    setPageState("editing");
    setNewSite(undefined);
  };

  return (
    <>
      <h2>Site Created!</h2>
      {newSite && (
        <div className="create-site-section">
          <div style={{ marginBottom: 40 }}>
            <div>
              <span>Business Name:</span> {newSite.businessName}
            </div>
            <div>
              <span>First Name:</span> {newSite.firstName}
            </div>
            <div>
              <span>Last Name:</span> {newSite.lastName}
            </div>
            <div>
              <span>Business Phone Number:</span> {newSite.phoneNumber}
            </div>
            {newSite.cellPhone && (
              <div>
                <span>Cell Phone Number:</span> {newSite.cellPhone}
              </div>
            )}
            <div>
              <span>Email:</span> {newSite.email}
            </div>
          </div>
          <div style={{ marginBottom: 20 }}>
            <div>
              <span>Street Address:</span> {newSite.streetAddress}
            </div>
            {newSite.suite && (
              <div>
                <span>Suite, Apt, Room #:</span> {newSite.suite}
              </div>
            )}
            <div>
              <span>City:</span> {newSite.city}
            </div>
            <div>
              <span>State:</span> {newSite.state}
            </div>
            <div>
              <span>Zip:</span> {newSite.zip}
            </div>
            <div>
              <span>Country:</span> {newSite.country}
            </div>
          </div>
          <div>
            <span>Final Link:</span>{" "}
            <a className="site-link" href={link} target="_blank" rel="noreferrer">
              {link}
            </a>
          </div>
          <div style={{ marginTop: 30, textAlign: "center" }}>
            <button className="reset-button" onClick={reset}>
              Create New Instant Site
            </button>
          </div>
        </div>
      )}
    </>
  );
}
