import React from "react";
import "./Tools.css";

const toolsData = [
  {
    name: "MS Excel",
    logo: "https://1000logos.net/wp-content/uploads/2020/08/Microsoft-Excel-Logo.png",
  },
  {
    name: "RStudio",
    logo: "https://www.rstudio.com/wp-content/uploads/2014/06/RStudio-Ball.png",
  },
  {
    name: "MS Word",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Microsoft_Office_Word_%282019%E2%80%93present%29.svg",
  },
  {
    name: "Big Query",
    logo: "https://www.gstatic.com/bricks/image/ddd1546c4483060fe3062d61e75fdabe7ae1cd711f36088695d4021624fa6e79.svg",
  },
  {
    name: "MS Access",
    logo: "https://1000logos.net/wp-content/uploads/2020/08/Microsoft-Access-Logo.png",
  },
  {
    name: "Google Analytics 4",
    logo: "https://www.vixendigital.com/wp-content/uploads/2023/04/Logo_Google_Analytics.png",
  },
  {
    name: "Google Ads",
    logo: "https://i1.wp.com/mediashift.org/wp-content/uploads/2017/04/google-adwords-logo.jpg",
  },
  {
    name: "Tableau",
    logo: "https://cdn.worldvectorlogo.com/logos/tableau-software.svg",
  },
  {
    name: "Power BI",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg",
  },
  {
    name: "Visual Studio",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/59/Visual_Studio_Icon_2019.svg",
  },
  {
    name: "Microsoft SQL Server Integration Services (SSIS)",
    logo: "https://banner2.cleanpng.com/20180518/rfq/kisspng-microsoft-sql-server-sql-server-management-studio-5afe6e84cfae82.5694733115266238768507.jpg",
  },
  {
    name: "Microsoft SQL Server Analysis Services (SSAS)",
    logo: "https://media.licdn.com/dms/image/D5612AQGt5dUnnUQLzQ/article-cover_image-shrink_423_752/0/1666358219828?e=1726099200&v=beta&t=j9h_pbI_Z3JTPQBV9Y4wRpDTYRVlRCrxTtFoTIgcO5U",
  },
  {
    name: "Microsoft SQL Server Reporting Services (SSRS)",
    logo: "https://www.edwinmsarmiento.com/wp-content/uploads/2016/01/SSRS_logo.png",
  },
  {
    name: "Minitab Statistical Software",
    logo: "https://cdn.worldvectorlogo.com/logos/minitab.svg",
  },
  {
    name: "Qualtrics",
    logo: "https://mma.prnewswire.com/media/1311410/Qualtrics_XM_Logo.jpg",
  },
];

function Tools() {
  return (
    <>
      <br />
      <div className="ProjectWrapper" id="tools">
        <div className="Container">
          <div className="SectionTitle">Tools</div>
          <div className="ToolsList">
            {toolsData.map((tool, index) => (
              <div className="ToolCard" key={index}>
                <img src={tool.logo} alt={tool.name} />
                <div className="ToolName">{tool.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Tools;
