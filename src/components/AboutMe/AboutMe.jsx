import myImage from "../../assets/images/pic.jpeg";
import "./AboutMe.css";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

function AboutMe() {
  const d = new Date();
  let years = d.getFullYear() - 2021;
  return (
    <section className="about">
      <div className="about-me-inner">
        <h1 id="about">ABOUT ME</h1>

        <div className="about-me-container image">
          <img src={myImage} alt="an image of Shreyash Vidhate" />

          <div className="about-me-text-content">
            <p>
              Hello, I'm Shreyash Vidhate, a passionate and ambitious Frontend
              Developer from India. As a 2024 graduate, I bring fresh ideas, a
              strong foundation in web technologies, and a drive to create
              intuitive and visually appealing user experiences. My journey in
              frontend development has equipped me with a deep understanding of
              HTML, CSS, Tailwind CSS JavaScript, React and Redux and I'm
              constantly learning and experimenting to stay at the forefront of
              the latest trends and best practices.
              <br />
              <br />
              I thrive in collaborative environments where I can combine
              creativity with technical expertise to solve real-world problems.
              My goal is to build seamless and engaging digital experiences that
              leave a lasting impression.
              <br />
              <br />
              Feel free to explore my portfolio and reach out—I'm excited to
              connect and contribute to innovative projects!
            </p>

            <div className="about-me-buttons">
              <a
                href="https://www.linkedin.com/in/shreyashvidhate"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="button-margin">
                  <FaLinkedin /> LinkedIn
                </button>
              </a>
              <a
                href="mailto:shreyashvidhate@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>
                  <FaEnvelope /> Gmail
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
