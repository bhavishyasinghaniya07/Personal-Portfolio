import "./Work.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_data from "../../assets/mywork_data";
import arrow_icon from "../../assets/arrow_icon.svg";

const Work = () => {
  return (
    <div id="work" className="mywork">
      <div className="mywork-title">
        <h1>Projects</h1>
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => {
          return (
            <div className="projects">
              <div>
                <div className="heading">
                  <h2>{work.w_title}</h2>

                  <p>{work.w_detail}</p>
                  <button className="mywork-button">
                    <a href={work.w_link}>Visit Project</a>
                  </button>
                </div>
                <div className="images">
                  <img key={index} src={work.w_img2} alt="" />
                </div>
              </div>
              <div>
                <div className="images">
                  <img key={index} src={work.w_img} alt="" />
                </div>
                <div className="heading">
                  <p>{work.w_detail2}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Work;
