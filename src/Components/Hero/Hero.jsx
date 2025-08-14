import "./Hero.css";
import profile_img from "../../assets/z.jpeg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import resume from "../../assets/Bhavishya_Parmar_Resume.pdf";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img className="profile" src={profile_img} alt="" />
      <h1>
        <span>Hi, I'm Bhavishya Parmar,</span> a full stack developer passionate
        about building scalable and user-centric web applications.
      </h1>
      <p>
        "MCA student at NIT Bhopal, passionate about technology,
        problem-solving, and continuous learning. "
      </p>
      <div className="hero-action">
        <div className="hero-resume">
          <a href="#contact" onClick={() => setMenu("contact")}>
            <p onClick={() => setMenu("contact")}></p>
            Let's Connect
          </a>
        </div>
        <div className="hero-resume">
          <a href={resume} download={resume}>
            My Resume
          </a>
        </div>
      </div>
      <div className="resumeX">
        <img src={resume} alt="" />
      </div>
    </div>
  );
};

export default Hero;
