import React from "react";
import { Link } from "react-router-dom";
import pic4 from "./pic4.svg";
import "./News.css";
import newslogo from "./newslogo.svg";
import bloglogo2 from "./newslogo2.svg";
export const News = () => {
  return (
    <>
      <div className="news-page">
        <div className="news-container">
          <h1>Librum Blog</h1>

          <div className="news-list">
            <div className="news-unit">
              <div className="news-image">
                <img src={newslogo} alt="news-logo" />
              </div>
              <div className="news-text">
                <div>
                  {" "}
                  <h2>Welcome to the Librum-Reader Blog </h2>
                  <small>October 15 2022</small>
                  <p>
                    Welcome to our blog page. Here you will find the latest news
                    and updates for Librum-Reader. If you would like to share an
                    article or announce an event you are organizing, feel free
                    to contact us.
                  </p>
                </div>
                <Link to={"/"}>
                  <button className="btn btn-secondary">Read More</button>
                </Link>
              </div>
            </div>

            <div className="news-unit">
              <div className="news-image">
                <img src={bloglogo2} alt="news-logo" />
              </div>
              <div className="news-text">
                <div>
                  {" "}
                  <h2>Launching of Librum Reader</h2>
                  <small>October 13 2022</small>
                  <p>
                    So, as you can tell, the beta version of the website is
                    live. Many more features are to come for this iteration. In
                    the meanwhile, feel free to browse through our pages and
                    download the latest version of Librum. Report any bugs or
                    issues to us via our contact page which is up and running
                  </p>
                </div>

                <Link to={"/"}>
                  <button className="btn btn-secondary">Read More</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="supportPage-container">
        <div className="support-page-contact">
          <div className="support-page-contact-form">
            <h2>Got Questions ?</h2>
            <p>Just Send us a Message today</p>
            <div className="form-div">
              <p className="p-form">Name</p>
              <input type="text" placeholder="Enter your Name" />
            </div>
            <div className="form-div">
              {" "}
              <p className="p-form">Email</p>
              <input type="text" placeholder="Enter your email address" />
            </div>
            <div className="form-div">
              {" "}
              <p className="p-form">Message</p>
              <textarea type="text" placeholder="Enter Message" />
            </div>

            <div>
              <button className="btn btn-secondary">Submit </button>
            </div>
          </div>
          <div className="support-page-contact-image">
            <img src={pic4} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
