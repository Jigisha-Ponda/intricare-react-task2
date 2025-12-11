import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import DailyChallenges from "./components/DailyChallenges";
import HowItWorksSection from "./components/HowItWorksSection";

function FigmaDesign() {
  return (
    <div className="container-fluid px-0">
      <Navbar/>
      <HeroSection/>
      <FeatureSection/>
      <DailyChallenges/>
      <HowItWorksSection/>
    </div>
  );
}

export default FigmaDesign;