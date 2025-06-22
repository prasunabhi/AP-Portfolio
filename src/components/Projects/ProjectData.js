import p1 from "../../assets/project/calculating-premium.png";
import p2 from "../../assets/project/Sport Analysis- Cricket .png";
import p3 from "../../assets/project/DBMS.jpg";
import p4 from "../../assets/project/Datawarehouse.png";
import p5 from "../../assets/project/SHARK TANK.png";
import p6 from "../../assets/project/SPAM Detection in Email.png";
import p7 from "../../assets/project/EnergyEfficiency.jpg";
import p8 from "../../assets/project/Heart Failure Medical Analysis.png";
import p9 from "../../assets/project/Divorce Analysis.png";
import p10 from "../../assets/project/HPA.png";
import p11 from "../../assets/project/ab-testing.png";

export const ProjectList = [
  {
    img: p1,
    title: "Analysis of Health Cost Information",
    description:
      "Analyzed the impact of various attributes on medical expenses using R programming and advanced statistical modeling techniques.",
    tech_stack: ["R", "Shiny Web App"],
    github_url:
      "https://github.com/prasunabhi/Healthcare-Cost-Information-Analysis",
    demo_url: "",
    key_contributions: [
      "Conducted comprehensive data cleaning and preprocessing to ensure high-quality input for analysis.",
      "Utilized linear regression, support vector machines, and association rules mining to uncover patterns and predict medical expenses.",
      "Developed an interactive Shiny web application to visualize and explore the findings, enabling stakeholders to make informed decisions.",
      "Achieved an 87.8% accuracy in predicting medical expense categories, providing actionable insights for cost management.",
    ],
    duration: "Sep 2022 – Dec 2022",
    overview: "Intro to Data Science (Technology used: R)",
    skills: [
      "Data Cleaning",
      "Data Analysis",
      "Statistical Modeling",
      "Data Visualization",
      "Predictive Modeling",
      "R Programming",
      "Shiny Web App Development",
      "Exploratory Data Analysis (EDA)",
      "Handling Multicollinearity",
      "Association Rules Mining",
    ],
  },
  {
    img: p2,
    title: "Sport Analysis: Cricket",
    description:
      "Conducted a comprehensive data analysis of the Indian Premier League (IPL) dataset to derive actionable insights.",
    tech_stack: ["Python"],
    github_url:
      "https://github.com/prasunabhi/Indian-Premier-League-Sports-Analysis",
    demo_url: "",
    key_contributions: [
      "Analyzed team performance trends, match location influence, and player performance using Python.",
      "Developed visualizations to facilitate informed decision-making for cricket management and operations.",
      "Provided detailed reports on player statistics, match outcomes, and team strategies, aiding in performance optimization.",
      "Collaborated with cricket analysts to refine the analysis and ensure practical applicability of insights.",
    ],
    duration: "Jan 2023 – May 2023",
    overview: "Scripting for Data Analysis",
    skills: [
      "Scripting (Python)",
      "Data Collection",
      "Data Cleaning",
      "Data Analysis",
      "Data Visualization",
      "Statistical Analysis",
    ],
  },
  {
    img: p3,
    title: "CUSE Sports",
    description:
      "Developed a robust and scalable database structure for an educational institution's sports management system.",
    tech_stack: ["SQL"],
    github_url:
      "https://github.com/prasunabhi/Cuse-Sports-Data-Management-Analysis",
    demo_url: "",
    key_contributions: [
      "Designed a dynamic database architecture to enhance sports management and communication.",
      "Created functions, procedures, and triggers to ensure data integrity and system efficiency.",
      "Implemented data security measures and optimized database performance for handling large datasets.",
      "Provided training and documentation for end-users to effectively utilize the database system.",
    ],
    duration: "Jan 2023 – May 2023",
    overview: "Data Admin Concepts and Database Management",
    skills: [
      "Database Management",
      "SQL",
      "Data Modeling",
      "Data Normalization",
      "Database Design",
      "Data Integration",
    ],
  },
  {
    img: p4,
    title: "FudgeInc Order Fulfillment",
    description:
      "Addressed delayed shipments and inconsistencies in order fulfillment through comprehensive data analysis.",
    tech_stack: ["SQL", "Power BI"],
    github_url: "https://github.com/prasunabhi/Order-Fulfillment-Warehousing",
    demo_url: "",
    key_contributions: [
      "Developed an SQL script and built a data warehouse structure for efficient data integration.",
      "Produced Power BI visualizations to analyze order lag times and delivery performance, providing recommendations for process optimization.",
      "Identified key bottlenecks in the order fulfillment process and suggested actionable improvements.",
      "Collaborated with cross-functional teams to implement changes and track performance improvements.",
    ],
    duration: "Jun 2023 – Aug 2023",
    overview: "Data Warehouse",
    skills: [
      "Data Warehousing",
      "ETL Processes",
      "SQL",
      "Data Integration",
      "Data Modeling",
      "Data Analysis",
    ],
  },
  {
    img: p5,
    title: "SHARK TANK Analysis Dashboard",
    description:
      "Visualized 14 seasons of 'Shark Tank USA' to analyze investment trends and pitch effectiveness.",
    tech_stack: ["Tableau"],
    github_url: "https://github.com/prasunabhi/SHARK-TANK-Analysis",
    demo_url: "",
    key_contributions: [
      "Developed interactive dashboards to explore investment trends and conduct industry analysis.",
      "Provided valuable insights into the show's evolution and shark decision-making patterns.",
      "Analyzed data on successful pitches, investment amounts, and industry preferences to identify key factors for success.",
      "Presented findings to stakeholders, offering strategic recommendations for aspiring entrepreneurs.",
    ],
    duration: "Aug 2023 – Dec 2023",
    overview: "Tableau",
    skills: [
      "Data Visualization",
      "Tableau",
      "Dashboard Creation",
      "Data Analysis",
      "Business Intelligence",
      "Storytelling with Data",
    ],
  },
  {
    img: p6,
    title: "SPAM Detection in Email",
    description:
      "Applied machine learning and NLP techniques to differentiate spam from non-spam emails.",
    tech_stack: ["Python", "NLTK"],
    github_url: "https://github.com/prasunabhi/Email-Spam-Detection-Analysis",
    demo_url: "",
    key_contributions: [
      "Implemented text processing methods such as tokenization, stemming, and lemmatization.",
      "Evaluated various classifiers, with Multinomial Naive Bayes with Lemmatizer achieving the highest performance.",
      "Created a robust spam detection model with high accuracy, reducing unwanted email traffic.",
      "Provided detailed documentation and user guides for implementing the model in real-world applications.",
    ],
    duration: "Dec 2023 – Jan 2024",
    overview: "NLP and Machine Learning",
    skills: [
      "Natural Language Processing (NLP)",
      "Machine Learning",
      "Data Preprocessing",
      "Text Classification",
      "Feature Engineering",
      "Model Evaluation",
    ],
  },
  {
    img: p7,
    title: "Energy Efficiency",
    description:
      "Conducted a machine learning analysis on energy efficiency data.",
    tech_stack: ["R", "Machine Learning"],
    github_url: "https://github.com/prasunabhi/Energy-Efficiency-Analysis",
    demo_url: "",
    key_contributions: [
      "Applied modeling techniques such as perceptrons, SVMs, neural networks, and K-nearest neighbors.",
      "Achieved notable accuracies, providing insights for energy-efficient building design.",
      "Developed predictive models to identify factors influencing energy consumption and efficiency.",
      "Presented findings to stakeholders, offering recommendations for improving energy management practices.",
    ],
    duration: "Aug 2023 – Dec 2023",
    overview: "Machine Learning for Business",
    skills: [
      "Data Analysis",
      "Predictive Modeling",
      "Data Visualization",
      "Machine Learning Algorithms",
      "Feature Engineering",
      "Model Evaluation",
    ],
  },
  {
    img: p8,
    title: "Heart Failure Medical Analysis",
    description:
      "Analyzed heart failure predictors using machine learning techniques.",
    tech_stack: ["R", "Machine Learning"],
    github_url: "https://github.com/prasunabhi/Heart-Failure-Medical-Analysis",
    demo_url: "",
    key_contributions: [
      "Applied visualizations, perceptrons, and SVMs to predict heart failure with high accuracy.",
      "Conducted feature selection and model optimization to enhance prediction performance.",
      "Provided actionable insights for healthcare providers to improve patient outcomes.",
      "Collaborated with medical experts to validate findings and ensure clinical relevance.",
    ],
    duration: "Aug 2023 – Dec 2023",
    overview: "Machine Learning for Business",
    skills: [
      "Data Analysis",
      "Predictive Modeling",
      "Data Visualization",
      "Machine Learning Algorithms",
      "Feature Engineering",
      "Model Evaluation",
    ],
  },
  {
    img: p9,
    title: "Divorce Analysis",
    description: "Analyzed divorce predictors using machine learning methods.",
    tech_stack: ["R", "Machine Learning"],
    github_url: "https://github.com/prasunabhi/Divorce-Analysis",
    demo_url: "",
    key_contributions: [
      "Employed visualization, VIF analysis, and neural networks to identify influential factors.",
      "Achieved a 94.23% accuracy in predicting divorce, providing valuable insights into relationship dynamics.",
      "Developed a comprehensive report highlighting key predictors and their impact on marital stability.",
      "Presented findings to stakeholders, offering recommendations for relationship counseling and intervention strategies.",
    ],
    duration: "Aug 2023 – Dec 2023",
    overview: "Machine Learning for Business",
    skills: [
      "Data Analysis",
      "Predictive Modeling",
      "Data Visualization",
      "Machine Learning Algorithms",
      "Feature Engineering",
      "Model Evaluation",
    ],
  },
  {
    img: p10,
    title: "House Price Analysis",
    description:
      "Conducted an analysis of U.S. house prices using machine learning techniques.",
    tech_stack: ["Python", "Machine Learning"],
    github_url: "https://github.com/prasunabhi/House-Price-Analysis",
    demo_url: "",
    key_contributions: [
      "Utilized visualizations, VIF analysis, and neural networks to uncover key factors influencing house prices.",
      "Provided valuable insights for the real estate industry.",
      "Developed predictive models to estimate house prices based on various features.",
      "Collaborated with real estate professionals to validate findings and ensure practical applicability.",
    ],
    duration: "Aug 2023 – Dec 2023",
    overview: "Machine Learning for Business",
    skills: [
      "Data Analysis",
      "Predictive Modeling",
      "Data Visualization",
      "Variance Inflation Factor (VIF) Analysis",
      "Neural Networks",
      "Machine Learning Algorithms",
    ],
  },
  {
    img: p11,
    title: "A/B Testing for Hi Tea",
    description:
      "Optimized social media engagement for Hi Tea's Instagram page through A/B Testing.",
    tech_stack: ["Qualtrics", "A/B Testing"],
    github_url: "https://github.com/prasunabhi/A-B-Testing-Analysis",
    demo_url: "",
    key_contributions: [
      "Implemented diverse imagery beyond traditional content, increasing engagement.",
      "Conducted randomization checks and regression testing, providing actionable recommendations for digital presence enhancement.",
      "Developed detailed reports on A/B test results, highlighting successful strategies and areas for improvement.",
      "Collaborated with the marketing team to implement findings and track engagement metrics.",
    ],
    duration: "Jan 2024 – May 2024",
    overview: "Marketing Optimization",
    skills: [
      "A/B Testing",
      "Experimental Design",
      "Statistical Analysis",
      "Data Collection",
      "Data Analysis",
      "Hypothesis Testing",
      "Market Research",
    ],
  },
];
