import "./Contact.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";

function Contact() {
  return (
    <section className="contact-section">

      <h2 className="contact-title">Get In Touch</h2>

      <p className="contact-description">
       I am an enthusiastic web development learner currently building projects to improve my skills. 
       This portfolio is one of my first projects. I look forward to learning and growing in this field.
      </p>

      <div className="contact-container">

        <div className="contact-card">
          <LocationOnIcon className="contact-icon" />
          <p>Nellore, Andhra Pradesh, India</p>
        </div>

      <div className="contact-card">
        <EmailIcon className="contact-icon" />
        <a 
          href="mailto:mohithsrinivasjujjuru.2006@gmail.com"
          className="contact-link"
        >
          mohithsrinivasjujjuru.2006@gmail.com
        </a>
      </div>

        <div className="contact-card">
          <PhoneIcon className="contact-icon" />
          <p>+91 7337309992</p>
        </div>

      </div>

      <div className="social-section">

        <h3>Connect with me</h3>

   <div className="social-icons-contact">

  <a href="https://www.linkedin.com/in/mohith-srinivas-jujjuru-06347434b/" target="_blank" rel="noreferrer">
    <LinkedInIcon className="social-icon"/>
  </a>

  <a href="https://github.com/Mohith-Srinivas" target="_blank" rel="noreferrer">
    <GitHubIcon className="social-icon"/>
  </a>

    <a href="https://www.instagram.com/mohith_srinivas_ms/" target="_blank" rel="noreferrer">
    <InstagramIcon className="social-icon"/>
  </a>

</div>

      </div>

    </section>
  );
}

export default Contact;