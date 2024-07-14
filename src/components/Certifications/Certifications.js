import React, { useEffect, useState } from "react";
import "./Certifications.css";
import CarouselComponent from "../Carousel/CarouselComponent";

const certificationsData = [
  {
    title: "Google Data Analytics Certification ",
    details: [
      "Developed advanced skills in data analysis, including data cleaning, visualization, and reporting, using tools essential for data analytics across various phases.",
      "Ask: Learn to frame and refine business questions to guide data analysis.",
      "Prepare: Master data collection, cleaning, and organization techniques.",
      "Process: Learn data processing techniques to transform raw data into valuable insights.",
      "Analyze: Develop skills in data analysis using spreadsheets, SQL, and R programming.",
      "Share: Gain expertise in data visualization and storytelling using tools like Tableau and Google Data Studio.",
      "Act: Apply data-driven insights to make strategic business decisions and drive organizational success.",
    ],
  },
  {
    title: "Six Sigma Green Belt ",
    details: [
      "Acquired advanced knowledge of Lean Six Sigma methodologies, focusing on process improvement and quality management. Implemented strategic process optimizations to enhance operational efficiency and product quality.",
      "Applied Lean Six Sigma principles in supply chain operations, utilizing tools like Minitab for detailed data analysis and root cause analysis. Implemented DMAIC methodology to optimize logistics processes, reduce waste, and improve overall operational efficiency, resulting in significant cost savings and increased customer satisfaction metrics.",
    ],
  },
  {
    title: "Certificate of Advanced Study (CAS) in Data Science",
    details: [
      "Completed a rigorous 15-credit hour program designed to prepare students for handling large datasets and deriving meaningful insights using information technologies.",
      "Core coursework included Data Admin Concepts & Database Management, Introduction to Data Science, Scripting for Data Analysis, Data Warehouse, and Visual Analytic Dashboards, focusing on the full data lifecycle from data acquisition to analysis and archiving.",
      "Specialized in data analytics and data visualization, gaining expertise in collecting, storing, and accessing data using applicable technologies, creating actionable insights, and applying ethical considerations in data science, including fairness, bias, transparency, and privacy.",
    ],
  },
  {
    title: "Google Ads Certification",
    details: [
      "Comprehensive certification covering the essentials of Google Ads, equipping professionals with the skills to create effective advertising campaigns across various Google platforms.",
      "Search Advertising: Mastered the fundamentals of creating, managing, and optimizing Google Search campaigns to reach potential customers actively searching for products or services. Developed strategies to maximize ad relevance and effectiveness, improving click-through rates and conversion rates.",
      "Display Advertising: Learned to create visually engaging and impactful display ads across the Google Display Network to reach a broader audience. Implemented targeting techniques to deliver ads to the right users at the right time, enhancing brand awareness and engagement.",
      "Measurement and Performance Analysis: Gained expertise in measuring and analyzing the performance of Google Ads campaigns using advanced tools and techniques. Utilized data-driven insights to optimize ad spend, improve campaign effectiveness, and drive better business outcomes.",
    ],
  },
];

function Certifications() {
  const [certifications, setCertifications] = useState([]);

  useEffect(() => {
    setCertifications(certificationsData);
  }, []);

  return (
    <>
      <div className="ProjectWrapper" id="certifications">
        <div className="SectionTitle">Certifications</div>
        <div className="certifications">
          {certifications.map((certification, index) => (
            <div className="certification" key={index}>
              <h3>{certification.title}</h3>
              <ul>
                {certification.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <br />
      <div className="Comp">
        <CarouselComponent />
      </div>
    </>
  );
}

export default Certifications;
