import React from "react";
import "./CountUp.css";
import CountUp from "react-countup";

export const CountUP = () => {
  return (
    <div className="count-up">
      <div className="count-up-container">
        <div className="count">
          <div className="count-number">
            <CountUp delay={0} start={1350} end={1605} duration={1.75}>
              {({ countUpRef, start }) => <h1 ref={countUpRef}>180</h1>}
            </CountUp>

            <i className="fa fa-plus"></i>
          </div>
          <p>Hours of Code </p>
        </div>
        <div className="count">
          <div className="count-number">
            <CountUp delay={0} start={1215} end={52015} duration={1.75}>
              {({ countUpRef, start }) => <h1 ref={countUpRef}>180</h1>}
            </CountUp>
            <i className="fa fa-plus"></i>
          </div>
          <p>Lines of Code</p>
        </div>
        <div className="count">
          <div className="count-number">
            <CountUp delay={0} start={220} end={38} duration={1.75}>
              {({ countUpRef, start }) => <h1 ref={countUpRef}>180</h1>}
            </CountUp>
            <i className="fa fa-calendar"></i>
          </div>
          <p>Days left</p>
        </div>
      </div>
    </div>
  );
};
