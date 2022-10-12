import React from "react";
import "./AboutPage.css";
import pic1 from "./pic1.svg";
import pic2 from "./pic2.svg";
import pic3 from "./pic3.svg";
import about1 from "./about1.png";
import about2 from "./about2.png";
import about3 from "./about3.png";

import { Fade } from "react-reveal";
export const AboutPage = () => {
  return (
    <div className="aboutPage-container">
      <section className="header">
        <h1>About librum-Reader </h1>
      </section>

      <Fade right>
        <section className="about-intro-container">
          <div className="about-intro sm">
            <div className="about-intro-text">
              <h1>What is Librum-Reader?</h1>
              <p>
                An application designed to make reading as enjoyable and as
                straightforward as possible. Librum offers a wide range of
                options and features bolstered by a modern and intuitive
                interface. This will allows you to create and manage your own
                library of books and documents. You can access your library from
                any device. You can also read books, highlight sections, and
                bookmark pages that you wish to return to. Other features of
                Librum include taking notes directly from the app. The Librum
                ecosystem will also include a free in-app bookstore, amazing
                plugins, and much more.
              </p>
            </div>
            <div className="about-intro-image">
              <img src={about1} alt="" />
            </div>
          </div>
        </section>{" "}
      </Fade>
      <Fade>
        <section className="about-intro-container">
          <div className="about-intro sm2">
            <div className="about-intro-image">
              <img src={about2} alt="" />
            </div>

            <div className="about-intro-text">
              <h1>Why use Librum-Reader as oppose to similiar apps?</h1>

              <p>
                Librum-Reader is convenient and easy to use. But ultimately its
                the custom features and open source nature that will have it
                stick out. The app is meant to be the go to place for readers
                and writers alike. The purpose is the give the experience a more
                interactive feel.
              </p>
              <p>
                Librum-Reader is convenient and easy to use. But ultimately its
                the custom features and open source nature that will have it
                stick out. The app is meant to be the go to place for readers
                and writers alike. The purpose is the give the experience a more
                interactive feel.
              </p>
            </div>
          </div>
        </section>{" "}
      </Fade>

      <Fade>
        <section className="about-intro-container">
          <div className="about-intro sm">
            <div className="about-intro-text">
              <h1>Some of the features on Librum</h1>
              <ul>
                <li>
                  {" "}
                  <i className="fa fa-circle"></i>
                  Fully functional cross-platform e-reader
                </li>
                <li>
                  <i className="fa fa-circle"></i>
                  Book state syncing
                </li>
                <li>
                  <i className="fa fa-circle"></i>Highlighting and bookmarks
                </li>
                <li>
                  <i className="fa fa-circle"></i>
                  Syncing with 3rd parties (Google drive, Dropbox, Nextcloud)
                </li>
                <li>
                  <i className="fa fa-circle"></i>
                  Book meta-data editing
                </li>
                <li>
                  <i className="fa fa-circle"></i>
                  Automated page scrolling
                </li>
                <li>
                  <i className="fa fa-circle"></i>
                  Library management
                </li>
                <li>
                  <i className="fa fa-circle"></i>
                  Custom plugins and much more
                </li>
              </ul>

              {/* <button className="btn btn-about">
                Our Twitter
                <i class="fa fa-twitter"></i>
              </button> */}
            </div>
            <div className="about-intro-image">
              <img src={about3} alt="" />
            </div>
          </div>
        </section>{" "}
      </Fade>
    </div>
  );
};
