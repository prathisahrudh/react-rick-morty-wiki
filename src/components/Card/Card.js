import React from "react";
import "./Card.css";

const Card = ({ results }) => {
  let display;
  if (results) {
    display = results.map((item) => {
      let { id, name, image, location } = item;
      return (
        <div key={id} className="d-grid col-4 mb-4">
          <div className="cards-main">
            <img src={image} alt="" className="img-fluid image-card" />
            <div className="content-card">
              <div className="fs-4 fw-bold mb-4">{name}</div>
              <div className="fs-6">Last Location</div>
              <div className="fs-5">{location.name}</div>
            </div>
          </div>
        </div>
      );
    });
  } else {
    // eslint-disable-next-line no-unused-vars
    display = "Not Results Found :/";
  }
  return <>{display}</>;
};

export default Card;
