import "./Home.css";
import profile from "../profilePhoto.jpeg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

function Home() {
  return (
    <section className="home">
      <div className="home-content">
        <h4>Hello, It's Me</h4>
        <h1>Mohith Srinivas Jujjuru</h1>
        <h2>
          And I'm a <span>Frontend Developer</span>
        </h2>
        <p>
          Enthusiastic Web Developer with a strong foundation in front-end development and programming. 
          Skilled in Python, Java, and React, with hands-on experience in building responsive and dynamic web applications. 
          Proficient in creating professional presentations using Microsoft PowerPoint and passionate about continuously learning and 
          applying modern technologies to solve real-world problems.
        </p>

        <div className="social-icons-home">
          <a href="https://www.linkedin.com/in/mohith-srinivas-jujjuru-06347434b/" target="_blank" rel="noopener noreferrer">
           <LinkedInIcon style={{ fontSize: 38, color: "#0A66C2" }} className="MUI-home" />
        </a>

          <a href="https://github.com/Mohith-Srinivas" target="_blank" rel="noopener noreferrer">
          <GitHubIcon style={{ fontSize: 38, color: "black" }} />
          </a>
        </div>
       <a href="/Mohith_Srinivas_Resume.pdf" download className="btn">Download CV</a>
      </div>

     
      <div className="profile-container">
        <div className="circle-animation"></div>
        <img src={profile} alt="Mohith" className="profile-img" />
      </div>

    </section>
  );
}

export default Home;