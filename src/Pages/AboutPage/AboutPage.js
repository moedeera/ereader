import React from "react";
import "./AboutPage.css";
import pic1 from "./pic1.svg";
import pic2 from "./pic2.svg";
import pic3 from "./pic3.svg";
import about1 from "./about-intro-image.svg";
import about2 from "./about-intro-image2.svg";
export const AboutPage = () => {
  return (
    <div className="aboutPage-container">
      <div className="header-container-2">
        <section className="header-2">
          <div className="header-info-2">
            <div>
              {" "}
              <h1>About </h1>
              <p>
                Home{" "}
                <i
                  className="fa fa-circle"
                  style={{ fontSize: "12px", color: "purple" }}
                ></i>{" "}
                About
              </p>
            </div>
          </div>
          <div className="header-image-2">
            <img src={pic2} alt="" />
          </div>
        </section>
      </div>
      <section className="header" style={{ marginBottom: "30px" }}>
        <h1>About librum-Reader </h1>
      </section>

      <section className="about-intro-container">
        <div className="about-intro sm">
          <div className="about-intro-text">
            <h3 id="spe">
              <i class="fa fa-circle"></i>

              <span style={{ margin: "0 3px" }}>WHEN</span>

              <i class="fa fa-circle"></i>
            </h3>
            <h1>When will Librum-Reader launch?</h1>
            <p>
              Librum-Reader is set to launch on August 1st and is currently in
              the final stages of development. After that stage is done we will
              start a round of testing to make sure there are'nt any bugs . If
              the first phase of testing goes well, we will launch a beta
              version of the application for our users to tryout. In the
              meanwhile you can keep up to date with us on our social media
              feeds to see whats new. Below our some of the features we plan to
              include.
            </p>
            <ul>
              <li>
                {" "}
                <i className="fa fa-circle"></i>
                Snippets, this feature allows user to summarize and save
                chapters of any book they are reading into a public summary
                post.
              </li>
              <li>
                <i className="fa fa-circle"></i>
                Chapter rating system, this allows you to rate and discuss
                chapters you enjoyed or did not like.
              </li>
              <li>
                <i className="fa fa-circle"></i>A MyStory section that allows
                you to write your own stories
              </li>
            </ul>
            <button className="btn btn-about">
              Follow us
              <i class="fa fa-facebook"></i>
            </button>
          </div>
          <div className="about-intro-image">
            <img src={about1} alt="" />
          </div>
        </div>
      </section>

      <section className="about-intro-container">
        <div className="about-intro sm2">
          <div className="about-intro-image">
            <img src={about2} alt="" />
          </div>

          <div className="about-intro-text">
            <h3 id="spe">
              <i class="fa fa-circle"></i>

              <span style={{ margin: "0 3px" }}>WHY</span>

              <i class="fa fa-circle"></i>
            </h3>
            <h1>Why use Librum-Reader as oppose to similiar apps?</h1>
            <p>
              Librum-Reader is set to launch on August 1st and is currently in
              the final stages of development. After that stage is done we will
              start a round of testing to make sure there are'nt any bugs . If
              the first phase of testing goes well, we will launch a beta
              version of the application for our users to tryout. In the
              meanwhile you can keep up to date with us on our social media
              feeds to see whats new. Below our some of the features we plan to
              include.
            </p>
            <ul>
              <li>
                {" "}
                <i className="fa fa-circle"></i>
                Snippets, this feature allows user to summarize and save
                chapters of any book they are reading into a public summary
                post.
              </li>
              <li>
                <i className="fa fa-circle"></i>
                Chapter rating system, this allows you to rate and discuss
                chapters you enjoyed or did not like.
              </li>
              <li>
                <i className="fa fa-circle"></i>A MyStory section that allows
                you to write your own stories
              </li>
            </ul>
            <button className="btn btn-about">
              Learn more
              <i class="fa fa-chevron-circle-right"></i>
            </button>
          </div>
        </div>
      </section>

      <section className="about-reasons">
        <div className="reason">
          <div className="reason-image">
            <img src={pic1} alt="" />
          </div>
          <div className="reason-text">
            <h2>High appearance customization</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              a diam eu augue interdum tincidunt non hendrerit est. Nulla
              pharetra mauris dolor, vel pretium tellus luctus at. Nunc iaculis
              ullamcorper ligula, at pharetra lorem suscipit eget. Vestibulum
            </p>
          </div>
        </div>
        <div className="reason">
          <div className="reason-text">
            <h2>Book state syncing across devices</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              a diam eu augue interdum tincidunt non hendrerit est. Nulla
              pharetra mauris dolor, vel pretium tellus luctus at. Nunc iaculis
              ullamcorper ligula, at pharetra lorem suscipit eget. Vestibulum
            </p>
          </div>

          <div className="reason-image">
            <img src={pic2} alt="" />
          </div>
        </div>
        <div className="reason">
          <div className="reason-image">
            <img src={pic3} alt="" />
          </div>
          <div className="reason-text">
            <h2>Note-taking functionality</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              a diam eu augue interdum tincidunt non hendrerit est. Nulla
              pharetra mauris dolor, vel pretium tellus luctus at. Nunc iaculis
              ullamcorper ligula, at pharetra lorem suscipit eget. Vestibulum
            </p>
          </div>
        </div>
        <div
          className="reason-text"
          style={{ width: "100%", maxWidth: "500px" }}
        >
          <h2>Have ideas for more features?</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a
            diam eu augue interdum tincidunt non hendrerit est. Nulla pharetra
            mauris dolor, vel pretium tellus luctus at. Nunc iaculis ullamcorper
            ligula, at pharetra lorem suscipit eget. Vestibulum
          </p>
        </div>
      </section>
    </div>
  );
};
