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
    <React.Fragment key={item.id}>

      {/* Text Card ALWAYS LEFT */}
      <div className="timeline-item left">
        <div className="content">
          <h2>{item.title}</h2><br />
          <hr></hr><br />
          <p>{item.institution}</p>
          <p>{item.duration}</p>
          <p>{item.score}</p>
        </div>
      </div>

      {/* Image Card ALWAYS RIGHT */}
      <div className="timeline-item right">
        <div className="content image-box">
          <img src={item.image} alt={item.title} />
        </div>
      </div>

    </React.Fragment>
  ))}
</div>
    </div>
  );
}

export default Education;