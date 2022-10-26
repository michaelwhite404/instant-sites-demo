import React from "react";
import "./IndustryButton.css";

export default function IndustryButton(props: IndustryButtonProps) {
  const { name, color, onClick, selected, thumbnail } = props;

  return (
    <label className="radio-button-field" onClick={onClick}>
      <input type="radio" name="Industry" value="HVAC" />
      <div
        className="instant-card-wrapper"
        style={{
          borderColor: selected ? color : undefined,
          backgroundColor: selected ? color : undefined,
        }}
      >
        <div
          className="instant-site-card-thumbnail"
          style={{ borderColor: color, backgroundImage: `url(${thumbnail})` }}
        >
          <div
            className="check-badge"
            style={{ backgroundColor: color, display: selected ? "block" : "none" }}
          >
            <img
              className="check"
              src="	https://uploads-ssl.webflow.com/5c42a983fe04b162953d3f3a/5e7d52c4a8f7aecab3a06f4f_Check.png"
              alt="Check"
            />
          </div>
        </div>
        <div className="instant-card-bottom">
          <div className="instant-card-text" style={{ color: selected ? "white" : "inherit" }}>
            {name}
          </div>
        </div>
      </div>
    </label>
  );
}

interface IndustryButtonProps {
  name: string;
  color: string;
  onClick?: React.MouseEventHandler<HTMLLabelElement>;
  thumbnail: string;
  selected?: boolean;
}
