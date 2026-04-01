import Portfolio from "./Portfolio.jpeg";
import CDD from "./CropDiseaseDetection&Diagnosis.jpg";
import cura from "./CuraPredict.jpeg"

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
    },
    {
      title: "CuraPredict - Intelligent Health Prediction System",
      subtitle: "React JS + Django + Machine Learning",
      description:"A smart healthcare web application that predicts possible diseases based on user symptoms using machine learning models. It provides early diagnosis, recommendations, and maintains user history for better health tracking.",
      image: cura,
      preview: ""
    }
  ];

  export default projectData ;