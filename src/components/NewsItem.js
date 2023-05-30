import React from "react";

const NewsItem=(props)=> { 
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
      <div className="my-3">
        <div className="card">
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-success" style={{left:"88%", zIndex:'1'}}>
                {source}
              </span>
          <img
            src={
              imageUrl
                ? imageUrl
                : "https://www.reuters.com/resizer/_V89FpmJ7_p6cDindCDCJ_ZoVEc=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/6TXEVUIMORJDLI5UPBGZOJ6KEQ.jpg"
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              {title}
            </h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                By {author ? author : "Unknown"} on{" "}
                {new Date(date).toLocaleString(undefined, {
                  timeZone: "Asia/Kolkata",
                })}
              </small>
            </p>
            <a
              href={newsUrl}
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


export default NewsItem;
