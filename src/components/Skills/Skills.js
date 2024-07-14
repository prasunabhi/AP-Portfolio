import React from "react";
import { Card, CardContent, Typography, Box, Grid } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import AssessmentIcon from "@mui/icons-material/Assessment";
import WorkIcon from "@mui/icons-material/Work";
import BusinessIcon from "@mui/icons-material/Business";
import "./Skills.css";

function Skills() {
  const skillsData = [
    {
      title: "Technical Skills",
      icon: <CodeIcon style={{ fontSize: 40, color: "#3498db" }} />,
      items: [
        "Proficient in R, SQL, and Python for data analysis and machine learning.",
        "Skilled in Tableau and Power BI for dynamic dashboards.",
        "Experienced with Microsoft SQL Server, Big Query, and Access for data management.",
        "Proficient in Minitab for statistical analysis.",
        "Expertise in RStudio and Visual Studio for scripting.",
      ],
    },
    {
      title: "Analytical Techniques",
      icon: <AssessmentIcon style={{ fontSize: 40, color: "#e74c3c" }} />,
      items: [
        "Advanced skills in correlation, regression, and forecasting.",
        "Experienced in supervised and unsupervised learning techniques.",
        "Skilled in NLP techniques like TF-IDF and sentiment analysis.",
        "Proficient in designing and conducting A/B tests.",
      ],
    },
    {
      title: "Project Management and Methodologies",
      icon: <WorkIcon style={{ fontSize: 40, color: "#f1c40f" }} />,
      items: [
        "Certified Green Belt in process optimization.",
        "Knowledgeable in Agile and Kanban methodologies.",
        "Experienced in ETL processes for data integration.",
      ],
    },
    {
      title: "Business and Communication Skills",
      icon: <BusinessIcon style={{ fontSize: 40, color: "#2ecc71" }} />,
      items: [
        "Strong problem-solving and data-driven decision-making skills.",
        "Proven leadership in managing teams and projects.",
        "Excellent at presenting data insights to stakeholders.",
        "Collaborative team player with cross-functional experience.",
      ],
    },
  ];

  return (
    <>
      <br />
      <div className="SkillsWrapper" id="skills">
        <div className="Container">
          <div className="SectionTitle">Skills</div>
          <Grid container spacing={3}>
            {skillsData.map((skill, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card className="SkillCard">
                  <CardContent>
                    <Box className="IconWrapper">{skill.icon}</Box>
                    <Typography
                      variant="h6"
                      component="div"
                      className="SkillTitle"
                    >
                      {skill.title}
                    </Typography>
                    <ul className="SkillList">
                      {skill.items.map((item, index) => (
                        <li key={index} className="SkillItem">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <p className="commitment-text">
            I am dedicated to continuous learning and staying updated with the
            latest trends and advancements in the field of analytics. My
            commitment to excellence ensures that I provide the best possible
            solutions and support for your projects.
          </p>
        </div>
      </div>
    </>
  );
}

export default Skills;
