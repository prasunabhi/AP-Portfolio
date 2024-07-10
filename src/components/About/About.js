import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
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
                originally from Brazil and have been living in Canada for the
                past three years. During my time here, I gained valuable
                experience through various entry-level positions, which greatly
                enhanced my work ethic, communication skills, and adaptability.
              </ScrollAnimation>

              <br />
              <br />

              <ScrollAnimation animateIn="fadeInLeft">
                My journey into the world of technology began with a strong
                passion for problem-solving, which led me to pursue the Computer
                Systems Technology program. Despite its challenges, I remained
                determined and forged lasting friendships that supported me
                throughout this demanding program. Throughout my studies at
                BCIT, I had the opportunity to engage in fascinating projects.
                Notably, I contributed to the development of the RENR Safety App
                and MyMind, projects that garnered recognition from my
                colleagues, instructors, and clients alike.
              </ScrollAnimation>

              <br />
              <br />

              <ScrollAnimation animateIn="fadeInLeft">
                Working collaboratively within a team towards a shared objective
                has been an incredibly rewarding and unique experience for me. I
                am eager to continue exploring exciting projects in the future,
                with a particular interest in web development and cross-platform
                mobile development.
                <div className="tagline2">
                  I have become confident using the following technologies:
                </div>
              </ScrollAnimation>

              <Technologies>
                {stackList.map((stack, index) => (
                  <ScrollAnimation animateIn="fadeInLeft" key={index}>
                    <Tech key={index} className="tech">
                      <TechImg src={stack.img} alt={stack.name} />
                      <TechName>{stack.name}</TechName>
                    </Tech>
                  </ScrollAnimation>
                ))}
              </Technologies>
            </div>
          </div>
        </div>
      </ContactWrapper>
    </>
  );
}

export default About;
