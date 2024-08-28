import React from "react";

const NewsItem = ({ title, description, name, url }) => {
  return (
    <div
      className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2 "
      style={{ maxWidth: "330px", height: "300px" }}
    >
      <h1 className="text-center my-3">{name}</h1>
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 90)} ...</h5>
        <p className="card-text">{description}</p>
        <a href={url} className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
