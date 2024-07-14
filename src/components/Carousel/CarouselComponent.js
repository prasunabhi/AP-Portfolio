import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import ABG from "../../assets/pdfs/ABG.png";
import SixSigmaGreenBelt from "../../assets/pdfs/SixSIgmaGreenBelt.png";
import BetaGammaSigma from "../../assets/pdfs/BetaGammaSigma.png";
import CAS from "../../assets/pdfs/CAS.png";
import Coursera from "../../assets/pdfs/Coursera.png";
import GoogleAds1 from "../../assets/pdfs/Google Ads - Display Certification.png";
import GoogleAds2 from "../../assets/pdfs/Google Ads - Measurement Certification.png";
import GoogleAds3 from "../../assets/pdfs/Google Ads - Search Certification.png";
import GoogleAds4 from "../../assets/pdfs/Google_Data_Analytics_Certificate_Badge.png";

const assets = [
  { type: "image", src: ABG },
  { type: "image", src: SixSigmaGreenBelt },
  { type: "image", src: BetaGammaSigma },
  { type: "image", src: CAS },
  { type: "image", src: Coursera },
  { type: "image", src: GoogleAds1 },
  { type: "image", src: GoogleAds2 },
  { type: "image", src: GoogleAds3 },
  { type: "image", src: GoogleAds4 },
];

const CarouselComponent = () => {
  return (
    <Carousel
      showThumbs={false}
      infiniteLoop
      useKeyboardArrows
      autoPlay
      interval={3000}
    >
      {assets.map((asset, index) => (
        <div key={index}>
          <img src={asset.src} alt={`img-${index}`} />
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
