import Portfolio from "./Portfolio.jpeg";
import CDD from "./CropDiseaseDetection&Diagnosis.jpg";

const projectData = [
    {
      title: "Portfolio",
      subtitle: "React JS",
      description:
        "A personal portfolio website built using React showcasing my skills, education, and projects with a modern responsive UI.",
      image: Portfolio,
      preview: "http://localhost:3000/"
    },

    {
      title: "Crop Disease Detection and Diagnosis",
      subtitle: "React JS + Django + Deep Learning",
      description:
        "A smart system that detects crop diseases using deep learning models and provides diagnosis with recommendations for farmers.",
      image: CDD,
      preview: "https://agri-care-frontend-nine.vercel.app/"
    }
  ];

  export default projectData ;