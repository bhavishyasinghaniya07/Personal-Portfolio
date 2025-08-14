import "./Contact.css";
import React from "react";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call from "../../assets/call_icon.svg";
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";

const Contact = () => {
  const [result, setResult] = React.useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "f4e3fa13-b998-4189-8d21-b13367e3de3e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      alert(data.message);
      document.contact - right.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I’m currently available for new projects and open to technical
            internships. Feel free to reach out if you have a project in mind or
            if you’re interested in discussing opportunities. I’m here to help
            and eager to collaborate!
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <IoLogoLinkedin fontSize={35} />
              <a href="https://www.linkedin.com/in/bhavishya-parmar-23555a284?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BcarGZkijT12%2BZuzTyHnkGg%3D%3D">
                LinkedIn
              </a>
            </div>
            <div className="contact-detail">
              <FaGithub fontSize={35} />
              <a href="https://github.com/bhavishyasinghaniya07">GitHub</a>
            </div>
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>parmarbhavishya@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call} alt="" />
              <p>+91 7224853586</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>Bhopal, India</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} action="" className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder="Enter your Email ID" name="email" />
          <label htmlFor="">Write your message here</label>
          <textarea
            name="message"
            rows={8}
            placeholder="Enter your message"
          ></textarea>
          <button type="submit" className="contact-submit">
            Sumbit Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
