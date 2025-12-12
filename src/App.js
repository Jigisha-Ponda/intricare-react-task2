import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import FigmaDesign from "./FigmaDesign";

function App() {
  return (
    <div className="=w-screen">
      <Router>
        <div className="min-h-screen">
          <div className="position-fixed top-50 start-0 p-3 border bg-white translate-middle-y d-flex flex-column gap-3 z-3">
            <a
              href="https://intricare-react-task.vercel.app/"
              class="px-4 py-2 rounded fw-semibold text-decoration-none text-primary bg-blue hover-bg-primary"
            >
              Task 1
            </a>

            <a
              href="https://intricare-react-task2.vercel.app/"
              class="px-4 py-2 rounded fw-semibold text-decoration-none text-success bg-green hover-bg-success"
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
    </div>
  );
}

export default App;
