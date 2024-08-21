import email from "../../assets/icons/email-icon.svg";
import arrow from "../../assets/icons/light-arrow.svg";
import linkedin from "../../assets/icons/linkedin.svg"
import github from "../../assets/icons/github-2-icon.svg";
import "./ContactMe.css";

function ContactMe() {
  return (
    <section className="contact">
      <div className="contact-inner">
        <h1 id="contact">CONTACT ME</h1>

        <div className="contact-container">
          <div className="email">
            <div className="icon-container">
              <img src={email} alt="email icon" />
            </div>

            <a
              title="shreyashvidhate88@gmail.com"
              href="mailto:shreyashvidhate88@gmail.com"
              target="_blank"
              className="email-link"
            >
              Send me an email <img src={arrow} alt="arrow" />
            </a>
          </div>

          <div className="linkedin">
            <div className="icon-container">
              <img src={linkedin} alt="linkedin icon" />
            </div>

            <a
              href="https://www.linkedin.com/in/shreyashvidhate/"
              target="_blank"
              className="linkedin-link"
            >
              Message me on LinkedIn <img src={arrow} alt="arrow icon" />
            </a>
          </div>

          <div className="github">
            <div className="icon-container">
              <img src={github} alt="github icon" />
            </div>

            <a
              target="_blank"
              href="https://github.com/shreyash-0928"
              className="github-link"
            >
              Check out my Github
              <img src={arrow} alt="arrow icon" />
            </a>
          </div>
        </div>

        <p className="attr">Designed and built by Shreyash Vidhate</p>
      </div>
    </section>
  );
}

export default ContactMe;
