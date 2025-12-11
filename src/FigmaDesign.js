import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import DailyChallenges from "./components/DailyChallenges";

function FigmaDesign() {
  return (
    <div className="container-fluid">
      <Navbar/>
      <HeroSection/>
      <FeatureSection/>
      <DailyChallenges/>
    </div>
  );
}

export default FigmaDesign;