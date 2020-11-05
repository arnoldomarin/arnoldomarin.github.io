import React from "react";
import "./Offer.css";
import OfferItems from "./OfferItems";

// Container of Offer items (similar to card component) that display a pictures and associated text and overlay
function Offer() {
  return (
    <div className="offer" id="Offer">
      <h1 className="offer-heading">What I offer</h1>
      <div className="offer-container">
        <div className="offer-wrapper">
          <ul className="offer-items">
            <OfferItems
              src="/images/responsive.png"
              text="Your projects will work and look good on any device, no matter the size."
              overlayText="Responsive"
            ></OfferItems>
            <OfferItems
              src="/images/animated.png"
              text="Animated objects that bring your projects to life!"
              overlayText="Animated"
            ></OfferItems>
            <OfferItems
              src="/images/intuitive.png"
              text="Easy to use UIs with strong focus on UX."
              overlayText="Intuitive"
            ></OfferItems>
            <OfferItems
              src="/images/adaptable.png"
              text="Build the project that fits your needs."
              overlayText="Adaptable"
            ></OfferItems>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Offer;
