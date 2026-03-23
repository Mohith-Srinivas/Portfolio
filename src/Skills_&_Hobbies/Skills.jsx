import "./Skills.css";
import skills from "./SkillsData";

function Skills() {

  return (
    <section className="skills-section">
      <h1 className="section-title">Technical Skills</h1>
      <p className="section-subtitle">
        Enthusiastic Web Developer skilled in building modern and responsive applications.
      </p>

      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <img src={skill.icon} alt={skill.name} />
            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>

      {/* Additional Skills Section */}
<div className="additional-section">
  <h2 className="additional-title">Non-Technical Skills</h2>

  <div className="flow-wrapper">

    {/* line from title */}
    <div className="title-connector"></div>

    <div className="flow-items">
      {[
        "Time Management",
        "Communication",
        "Microsoft Word",
        "PowerPoint",
        "Presentation Skills",
        "English Proficiency"
      ].map((skill, index) => (
        <div className="flow-item" key={index}>
          <div className="connector"></div>
          <div className="bubble">{skill}</div>
        </div>
      ))}
    </div>

  </div>
</div>
    </section>
  );
}

export default Skills;