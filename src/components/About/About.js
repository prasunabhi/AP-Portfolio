import React from "react";
import { Image, ContactWrapper } from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
import logo from "../../assets/photo.png";
function About() {
  return (
    <>
      {" "}
      <svg
        height="100%"
        width="100%"
        id="svg"
        viewBox="0 0 1440 400"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 0,400 C 0,400 0,200 0,200 C 114.35714285714289,156.53571428571428 228.71428571428578,113.07142857142858 351,131 C 473.2857142857142,148.92857142857142 603.4999999999998,228.25 713,248 C 822.5000000000002,267.75 911.2857142857144,227.92857142857142 1029,210 C 1146.7142857142856,192.07142857142858 1293.3571428571427,196.03571428571428 1440,200 C 1440,200 1440,400 1440,400 Z"
          stroke="none"
          strokeWidth="0"
          fill="#151418ff"
          transform="rotate(-180 720 200)"
        ></path>
      </svg>
      <ContactWrapper id="about">
        <div className="Container">
          <div className="SectionTitle">About Me</div>
          <div className="BigCard">
            <ScrollAnimation animateIn="fadeInLeft">
              <Image
                style={{ borderRadius: "50%" }}
                src={logo}
                alt="photo.png"
              />
            </ScrollAnimation>
            <div className="AboutBio">
              <ScrollAnimation animateIn="fadeInLeft">
                Hello! My name is <strong>Prasun Abhishek Singh</strong>. I'm
                recent Master's graduate in Business Analytics from Syracuse
                University, I am deeply passionate about leveraging data to
                drive business success. With over three years of experience, I
                have honed my ability to decipher complex datasets and transform
                them into actionable insights that lead to profitable outcomes.
              </ScrollAnimation>
              <br />
              <ScrollAnimation animateIn="fadeInLeft">
                Throughout my career, I have led various data-driven projects
                that optimized operations and provided significant financial
                benefits. Whether developing advanced analytics models, creating
                comprehensive dashboards, or presenting critical insights to
                stakeholders, I have always aimed to foster a culture of
                data-driven decision-making. My blend of technical expertise and
                business acumen has been key to delivering strategic solutions
                that drive improvements and cost savings.
              </ScrollAnimation>
              <br />
              <ScrollAnimation animateIn="fadeInLeft">
                I thrive on solving intricate business problems with data and am
                committed to continuous learning and innovation in the field of
                analytics. My technical proficiency includes tools such as R,
                Python, SQL, Tableau, and Power BI, and I am certified in Google
                Data Analytics and Six Sigma. These skills enable me to deliver
                high-quality, data-driven solutions that enhance operational
                efficiency and support organizational growth.
                <br />
                <br />I am excited about the opportunity to apply my expertise
                in either business analyst or data analyst roles, contributing
                to impactful and transformative projects.
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </ContactWrapper>
    </>
  );
}

export default About;
