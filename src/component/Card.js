import React from "react";

function Card(props) {
    const words = props.description.split(' ');
    const shortDescription = words.slice(0, 50).join(' ');
    return (
      <div className="my-3">
        <div className="card">
          <img src={props.img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{shortDescription}</p>
            <a
              href={props.newsURL}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }


export default Card;
