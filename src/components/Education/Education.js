import React, { useState } from "react";
import "./Education.css";

function Education() {
  const educationDetails = [
    {
      id: 1,
      institution:
        "Syracuse University, Martin J. Whitman School of Management",
      degree: "Master of Science in Business Analytics",
      location: "Syracuse, NY",
      date: "August 2022 - May 2024",
      gpa: "GPA: 3.8/4",
      coursework: [
        "Data Analysis & Decision Making",
        "Business Analytics",
        "Introduction to Data Science",
        "Scripting for Data Analysis",
        "Database Management Systems (DBMS)",
        "Data Warehouse",
        "Lean Six Sigma",
        "Machine Learning for Business",
        "Visual Analytics & Dashboards",
        "Natural Language Processing (NLP)",
        "Digital Marketing Analytics",
      ],
      honors:
        "Beta Gamma Sigma academic honor society (top 20% of graduate students)",
    },
    {
      id: 2,
      institution:
        "Mumbai University, K M Agrawal College of Arts, Commerce, & Science",
      degree: "Bachelor of Science in Information Technology",
      location: "Mumbai, India",
      date: "August 2017 - October 2020",
      cgpa: "CGPA: 8.32/10.00",
      gpa: "GPA: 3.36/4",
      coursework: [
        "Business Intelligence",
        "Data Structures",
        "Database Management Systems",
        "Project Management",
        "Python Programming",
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
      <div className="ProjectWrapper" id="education">
        <div className="Container">
          <div className="SectionTitle">Education</div>
          <div className="EducationDetails">
            {educationDetails.map((edu) => (
              <div key={edu.id} className="EducationCard">
                <h3>{edu.degree}</h3>
                <p>{edu.institution}</p>
                <p>{edu.location}</p>
                <p>{edu.date}</p>
                <p>{edu.cgpa || edu.gpa}</p>
                <p>Relevant course:</p>
                <ul>
                  {edu.coursework.map((course, idx) => (
                    <li
                      key={idx}
                      style={{
                        display:
                          idx < 2 || expandedCards.includes(edu.id)
                            ? "block"
                            : "none",
                      }}
                    >
                      {course}
                    </li>
                  ))}
                </ul>
                {edu.coursework.length > 2 && (
                  <button
                    className="ViewMoreButton"
                    onClick={() => toggleExpand(edu.id)}
                  >
                    {expandedCards.includes(edu.id) ? "View Less" : "View More"}
                  </button>
                )}
                {edu.honors && <p>{edu.honors}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Education;
