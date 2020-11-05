import React from "react";

function OfferItems(props) {
  return (
    // React fragment - allows to return multiple elements in order for the rendered HTML to be valid
    <>
      <li className="offer-item">
        {/* will follow the path specified for that individual card in AllCards.js */}
        <div className="offer-item-container">
          {/* props.label will get the label from AllCards.js */}
          <figure className="offer-item-picture-wrap">
            {/* props.src will get the image from AllCards.js */}
            <img src={props.src} alt="Icon" className="offer-item-img"></img>
            <div class="overlay">
              <div class="text">{props.overlayText}</div>
            </div>
          </figure>
          <div className="offer-item-info">
            {/* props.text will get the text from AllCards.js */}
            <h5 className="offer-item-text">{props.text}</h5>
          </div>
        </div>
      </li>
    </>
  );
}

export default OfferItems;
