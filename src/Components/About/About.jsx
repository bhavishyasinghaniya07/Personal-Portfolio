import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTailwindcss,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostman,
  SiRedux,
  SiGit,
  SiGithub,
  SiSqlite,
  SiCloudinary,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { BsDatabase } from "react-icons/bs";
import { MdConnectWithoutContact } from "react-icons/md";
import "./About.css";
import profile_img from "../../assets/z.jpeg";

export default function AboutMeRightPane() {
  const techStack = [
    { name: "Java", icon: <FaJava color="#007396" /> }, // Java Blue
    { name: "HTML5", icon: <SiHtml5 color="#E34F26" /> },
    { name: "CSS3", icon: <SiCss3 color="#1572B6" /> },
    { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss color="#38B2AC" /> },
    { name: "React.js", icon: <SiReact color="#61DAFB" /> },
    { name: "Git", icon: <SiGit color="#6E6E6E" /> },
    { name: "Node.js", icon: <SiNodedotjs color="#339933" /> },
    { name: "Express.js", icon: <SiExpress color="#6E6E6E" /> },
    {
      name: "REST APIs",
      icon: <MdConnectWithoutContact color="#6E6E6E" />,
    },
    { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
    { name: "SQL", icon: <SiSqlite color="#003B57" /> },
    { name: "Firestore", icon: <BsDatabase color="#FFA611" /> },
    { name: "GitHub", icon: <SiGithub color="#6E6E6E" /> },

    { name: "Postman", icon: <SiPostman color="#FF6C37" /> },
  ];

  return (
    <div className="about-container">
      <div id="about" className="about">
        <div className="about-tittle">
          <h1>About Me</h1>
        </div>
        <div className="about-sections">
          <div className="about-left">
            <img src={profile_img} alt="" />
          </div>
          <div className="about-right">
            <div className="about-para">
              <p>
                Hi, I’m Bhavishya, a self-taught web developer with a strong
                focus on Node.js, Express.js, and MongoDB. I’m passionate about
                building dynamic, responsive web applications and am always
                excited to learn new technologies to expand my development
                skills.
              </p>
              <p>
                I have a strong foundation in Data Structures and Algorithms
                (DSA), DBMS, Operating Systems, and Computer Networking, helping
                me solve complex problems effectively.
              </p>
              <p>
                Apart from tech, I’m a member of the Rubik's Club at NIT Bhopal
                and have a passion for photography and videography, combining
                creativity with technology.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section education-section">
        {/* Adjusted Heading */}
        <h3 className="section-heading">Education</h3>

        <p className="education-item">
          <span className="institution-name">
            Maulana Azad National Institute Of Technology, Bhopal
          </span>
          <span className="date-range">2023-2026</span>
        </p>
        <p className="course-details">
          <span className="course-name">Masters in Computer Applications</span>
          <span className="grade">CGPA: 8.57</span>
        </p>

        <p className="education-item education-item-mt">
          <span className="institution-name">
            Devi Ahilya University , Indore
          </span>
          <span className="date-range">2019-2022</span>
        </p>
        <p className="course-details">
          <span className="course-name">
            Bachelors in Computer Applications
          </span>
          <span className="grade">CGPA: 8.40</span>
        </p>
        <p className="education-item education-item-mt">
          <span className="institution-name">
            Madhya Pradesh Board of Secondary Education , Bhopal
          </span>
          <span className="date-range">2018-2019</span>
        </p>
        <p className="course-details">
          <span className="course-name">Higher Secondary</span>
          <span className="grade">Percentage: 85.00%</span>
        </p>

        <p className="education-item education-item-mt">
          <span className="institution-name">
            Madhya Pradesh Board of Secondary Education , Bhopal
          </span>
          <span className="date-range">2016-2017</span>
        </p>
        <p className="course-details">
          <span className="course-name">High School</span>
          <span className="grade">Percentage: 89.83%</span>
        </p>
      </div>

      <div className="section tech-section">
        {/* Adjusted Heading */}
        <h3 className="section-heading">Tech Stack</h3>
        <div className="tech-grid">
          {techStack.map((ts) => {
            return (
              <span className="tech-item" key={ts.name}>
                {ts.icon}
                <span>{ts.name}</span>
              </span>
            );
          })}
        </div>
      </div>

      <div className="about-achivements">
        {" "}
        <div className="about-achivement">
          <h1>10+</h1>
          <p>Projects Completed</p>{" "}
        </div>
        <hr />{" "}
        <div className="about-achivement">
          <h1>500+</h1>
          <p>DSA Problems Solved</p>{" "}
        </div>
        <hr />{" "}
        <div className="about-achivement">
          <h1>AIR 317</h1>
          <p>In NIMCET 2023</p>{" "}
        </div>{" "}
      </div>
    </div>
  );
}
