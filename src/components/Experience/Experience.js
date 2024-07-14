import React, { useState } from "react";
import "./Experience.css";

function Experience() {
  const workExperience = [
    {
      id: 1,
      position: "Quality Control Analyst",
      company: "Baxter International Inc.",
      location: "Skaneateles, NY",
      date: "September 2023 - December 2023",
      responsibilities: [
        "Championed a Lean Six Sigma project, leading a 5-member team to reduce defects in Reusable Blood Pressure Cuffs, achieving an 8.5% defect reduction.",
        "Conducted in-depth data analysis and root cause analysis, identifying key areas for process improvement and operational efficiency.",
        "Implemented strategic process optimizations, enhancing product quality and contributing to the overall success of manufacturing processes.",
        "Delivered actionable recommendations based on data insights, driving significant improvements in manufacturing and quality control.",
      ],
    },
    {
      id: 2,
      position: "Data Analyst Intern",
      company: "Bholanath Precision Engineering Pvt. Ltd.",
      location: "Mumbai, India",
      date: "November 2020 - October 2021",
      responsibilities: [
        "Orchestrated end-to-end data compilation and analysis for raw materials, optimizing production efficiency and communication between departments.",
        "Implemented innovative data reporting techniques, including static and dashboard methods, leading to improved decision-making capabilities.",
        "Achieved a 15% increase in production efficiency and a 10% increase in revenue through comprehensive business reports and data-driven strategies.",
        "Streamlined communication between departments, enhancing productivity and operational efficiency.",
      ],
    },
    {
      id: 3,
      position: "CEO & Administrator",
      company: "Haqurity Infotech",
      location: "Mumbai, India",
      date: "July 2017 - June 2019",
      responsibilities: [
        "Founded a cybersecurity startup with two colleagues, overseeing all operational aspects including scheduling training sessions, planning seminars, and managing finances.",
        "Collaborated with team members to drive business growth and boost organizational effectiveness.",
        "Championed the delivery of over 20 seminars on cybersecurity awareness, reaching a diverse audience and fostering community engagement.",
        "Provided comprehensive training to over 100 individuals, equipping stakeholders with essential cybersecurity skills and knowledge.",
      ],
    },
  ];

  const [expandedCards, setExpandedCards] = useState([]);

  const toggleExpand = (id) => {
    if (expandedCards.includes(id)) {
      setExpandedCards(expandedCards.filter((cardId) => cardId !== id));
    } else {
      setExpandedCards([...expandedCards, id]);
    }
  };

  return (
    <>
      <br />
      <br />
      <div className="ProjectWrapper" id="work-experience">
        <div className="Container">
          <div className="SectionTitle">Work Experience</div>
          <div className="WorkExperienceDetails">
            {workExperience.map((work) => (
              <div key={work.id} className="WorkExperienceCard">
                <h3>{work.position}</h3>
                <p>{work.company}</p>
                <p>{work.location}</p>
                <p>{work.date}</p>
                <ul>
                  {work.responsibilities.map((resp, idx) => (
                    <li
                      key={idx}
                      style={{
                        display:
                          idx < 2 || expandedCards.includes(work.id)
                            ? "block"
                            : "none",
                      }}
                    >
                      {resp}
                    </li>
                  ))}
                </ul>
                {work.responsibilities.length > 2 && (
                  <button
                    className="ViewMoreButton"
                    onClick={() => toggleExpand(work.id)}
                  >
                    {expandedCards.includes(work.id)
                      ? "View Less"
                      : "View More"}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience;
