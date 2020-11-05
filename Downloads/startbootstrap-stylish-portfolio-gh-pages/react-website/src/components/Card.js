import React from "react";
import { Link } from "react-router-dom";

function Card(props) {
  return (
    // React fragment - allows to return multiple elements in order for the rendered HTML to be valid
    // Props.something will allow set the value for every individual prop for each card
    <>
      <li className="card-item">
        <Link className="card-item-link" to={props.path}>
          <figure
            className="card-item-picture-wrap"
            data-category={props.label}
          >
          <img src={props.src} alt="Project" className="card-item-img"></img>
          </figure>
          <div className="card-item-info">
            <h5 className="card-item-text">{props.text}</h5>
          </div>
          <div className="card-item-tech">
            <h5 className="card-item-text">{props.technologyInfo}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default Card;
