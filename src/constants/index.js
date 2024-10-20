import project1 from "../assets/project/enc.jpg";
import project2 from "../assets/project/ml.jpg";
import project3 from "../assets/project/cafe.jpg";
import project4 from "../assets/project/iot.jpg"

export const HERO_CONTENT = `I am a dedicated full stack developer with a strong foundation in web technologies and a passion for creating efficient and scalable applications. My expertise spans front-end frameworks like React and back-end technologies like Node.js, Java, and MongoDB. Through internships and academic projects, I have honed my skills in designing, developing, and deploying robust solutions while leveraging cloud platforms like AWS to enhance performance and scalability.`;

export const ABOUT_TEXT = `I am a motivated full stack developer with a B.E. in Electronics and Communication Engineering. Through both academic projects and internships, I have developed a solid understanding of modern web development practices. My skills include working with the MERN stack, creating RESTful APIs, and managing cloud services on AWS. I am always eager to take on new challenges, learn new technologies, and collaborate with teams to create impactful solutions.`;


export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "MERN Stack Developer",
    company: "HyperNXT Academy",
    description: `Contributing to the development of full-stack web applications using the MERN stack. Worked on designing REST APIs, front-end development with React.js, and integrating with MongoDB databases. Gained experience with Agile methodologies and microservices architecture.`,
    technologies: ["JavaScript", "React.js", "Node.js", "MongoDB", "AWS"],
  },
  {
    year: "2024",
    role: "Full Stack Java Developer",
    company: "Global Quest Technologies",
    description: `Developed full-stack applications using Java and Spring Boot for the back end and React.js for the front end. Conducted unit testing with JUnit to ensure reliable code and worked on cloud deployment using AWS services.`,
    technologies: ["Java", "Spring Boot", "React.js", "AWS", "JUnit"],
  },
  {
    year: "2023",
    role: "IoT Development Intern",
    company: "Govt Toolroom and Training Center",
    description: `Worked on IoT applications using ThingWorx, developing prototypes for automation tasks. Gained hands-on experience in IoT development and system integration.`,
    technologies: ["ThingWorx", "IoT", "Python"],
  },
  {
    year: "2023",
    role: "Full Stack Web Development Intern",
    company: "Varcons Technologies",
    description: `Designed and implemented responsive web templates for a client using HTML, CSS, and Bootstrap. Integrated the back end using MongoDB, ensuring smooth communication between front-end and back-end systems.`,
    technologies: ["HTML", "CSS", "Bootstrap", "MongoDB", "JavaScript"],
  },
];

export const PROJECTS = [
  {
    title: "Color Image Encryption Using Scrambling and Diffusion",
    image: project1, // Replace with actual image path
    description:
      "A security application utilizing a logistic chaotic map to encrypt color images, ensuring secure data transmission.",
    technologies: ["Python", "Logistic Map", "Encryption"],
  },
  {
    title: "Handwritten Digit Recognition",
    image: project2, // Replace with actual image path
    description:
      "An ML-based project to recognize handwritten digits using Python, improving data entry accuracy and efficiency.",
    technologies: ["Python", "Machine Learning", "PyCharm"],
  },
  {
    title: "Cafe-Leisure Square Web Template",
    image: project3, // Replace with actual image path
    description:
      "A responsive web template designed for a cafe, with features like menu display and location finder, using HTML, CSS, and Bootstrap.",
    technologies: ["HTML", "CSS", "Bootstrap", "MongoDB"],
  },
  {
    title: "IoT Prototype for Automation",
    image: project4, // Replace with actual image path
    description:
      "An IoT-based prototype that automates repetitive tasks, using ThingWorx for monitoring and control.",
    technologies: ["ThingWorx", "IoT", "Python"],
  },
];

export const CONTACT = {
  address: "Bengaluru, Karnataka, India",
  phoneNo: "+91-9945981633",
  email: "sadhanvshetty676@gmail.com",
};
