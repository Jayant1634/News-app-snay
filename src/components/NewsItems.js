import React from "react";

const NewsItems=(props)=> {
    let { title, description, imageUrl, newsUrl, author, date, source } =props;
    return (
      <div className="container my-3">
        <div className="card">
          <div
            className="container" style={{ display: "flex", justifyContent: "flex-end", position: "absolute", right: "0",}}>
            <span className="badge rounded-pill bg-danger">{source}</span>
          </div>
          <img src={!imageUrl? "https://c.ndtvimg.com/2024-08/64ukblgg_pm-modi-afp-_625x300_15_August_24.jpeg?im=FeatureCrop,algorithm=dnn,width=1200,height=738"  : imageUrl} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-body-secondary"> By {!author ? "unknown" : author} on{" "} {new Date(date).toGMTString()}
              </small>
            </p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-dark">{" "}Go somewhere</a>
          </div>
        </div>
      </div>
    );
}

export default NewsItems;
