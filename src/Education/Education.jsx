import React, { useEffect } from "react";
import educationData from "./EducationData";
import "./Education.css";

function Education() {

  useEffect(() => {
    const boxes = document.querySelectorAll(".content");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    }, { threshold: 0.3 });

    boxes.forEach((box) => observer.observe(box));
  }, []);

  return (
    <div className="education-section">
      <h2 className="edu-title">My Education Roadmap</h2>

      <div className="timeline">
        {educationData.map((item) => (
          
          /* 🔥 ROW WRAPPER (IMPORTANT FIX) */
          <div className="timeline-row" key={item.id}>

            {/* LEFT → TEXT */}
            <div className="timeline-item left">
              <div className="content">
                <h2>{item.title}</h2><br />
                <hr /><br />
                <p>{item.institution}</p>
                <p>{item.duration}</p>
                <p>{item.score}</p>
              </div>
            </div>

            {/* RIGHT → IMAGE */}
            <div className="timeline-item right">
              <div className="content image-box">
                <img src={item.image} alt={item.title} />
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;