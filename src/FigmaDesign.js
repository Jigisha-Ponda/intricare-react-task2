import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import DailyChallenges from "./components/DailyChallenges";
import HowItWorksSection from "./components/HowItWorksSection";
import FeedbackSection from "./components/FeedbackSection";
import SalesSolution from "./components/SalesSolution";
import SupportedLeadCRM from "./components/SupportedLeadCRM";
import JoinLeadCRM from "./components/JoinLeadCRM";
import Footer from "./components/Footer";

function FigmaDesign() {
  return (
    <div className="container-fluid px-0">
      <Navbar/>
      <HeroSection/>
      <FeatureSection/>
      <DailyChallenges/>
      <HowItWorksSection/>
      <FeedbackSection/>
      <SalesSolution/>
      <SupportedLeadCRM/>
      <JoinLeadCRM/>
      <Footer/>
    </div>
  );
}

export default FigmaDesign;