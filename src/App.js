import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import FigmaDesign from "./FigmaDesign";

function App() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // compute whether to show floating box
    const checkVisibility = () => {
      const pageHeight = document.body.scrollHeight;
      const vh = window.innerHeight;
      const scrollY = window.scrollY || window.pageYOffset || 0;

      // page must be scrollable
      if (pageHeight <= vh) {
        setIsVisible(false);
        return;
      }

      // show only when scrolled past first viewport and not into last viewport
      const scrolledPastFirstViewport = scrollY > vh;
      const beforeLastViewport = scrollY < (pageHeight - vh - 100);

      setIsVisible(scrolledPastFirstViewport && beforeLastViewport);
    };

    // run once on mount
    checkVisibility();

    // attach listeners
    window.addEventListener("scroll", checkVisibility, { passive: true });
    window.addEventListener("resize", checkVisibility);

    // cleanup
    return () => {
      window.removeEventListener("scroll", checkVisibility);
      window.removeEventListener("resize", checkVisibility);
    };
  }, []);

  return (
    <div className="=w-screen">
      <Router>
        <div className="min-h-screen">
          <div className="position-fixed top-50 start-0 p-3 border bg-white translate-middle-y d-flex flex-column gap-3 z-3">
            <a
              href="https://intricare-react-task.vercel.app/"
              className="px-4 py-2 rounded fw-semibold text-decoration-none text-primary bg-blue hover-bg-primary"
            >
              Task 1
            </a>

            <a
              href="https://intricare-react-task2.vercel.app/"
              className="px-4 py-2 rounded fw-semibold text-decoration-none text-success bg-green hover-bg-success"
            >
              Task 2
            </a>

          </div>


          <Routes>
            <Route path="https://intricare-react-task.vercel.app/" />
            <Route path="/" Component={FigmaDesign} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </Router>

    {/* Bottom Floating Wrapper */}
      {isVisible && (
        <div className={`floating-wrapper ${isVisible ? "slide-up" : "slide-down"} d-flex justify-content-center my-3`}>
          <div className="floating-box">

            {/* Top Row */}
            <div className="top-row d-flex justify-content-between align-items-center p-3 rounded">

              {/* Avatars + Text */}
              <div className="d-flex align-items-center">
                <div className="avatars d-flex me-2">
                  <img src="/images/user1.png" className="avatar" alt="user1" />
                  <img src="/images/user2.png" className="avatar" alt="user2" />
                  <img src="/images/user3.png" className="avatar" alt="user3" />
                </div>
                <h5 className="m-0 heading me-2">
                  Join with our Thousands of professionals Now!
                </h5>
              </div>

              {/* Button */}
              <button className="trial-btn">
                Get a Free Trial Now!
              </button>
            </div>

            {/* Bottom Row */}
            <div className="bottom-row d-flex justify-content-center gap-5 pt-3">

              <div className="d-flex align-items-center">
                <img src="/images/card-icon.png" className="info-icon me-2" alt="" />
                <span className="info-text">
                  <strong>No Credit Card</strong> Required
                </span>
              </div>

              <div className="d-flex align-items-center">
                <img src="/images/clock-icon.png" className="info-icon me-2" alt="" />
                <span className="info-text">
                  <strong>14 Days Free</strong> Trial
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
