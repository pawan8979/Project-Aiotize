import "./About.css";
import IOX from "../../img/iox.png";
import COGNIXA from "../../img/cognixa.png";

const About = () => {
  return (
    <>
      <div className="A-Container">
        <center>
          <h1>About</h1>
          <p>
            Aiotize develops bespoke business intelligence & automation
            solutions for companies and government that focus on making the work
            & production environments efficient, reliable and versatile. It
            caters to various market segments such as defence, logistics,
            healthcare, disaster management, agriculture, mining, real estate,
            etc.
          </p>
          <div className="sections">
            <div className="section-1">
              <center>
                <img src={IOX} alt="" height={100} />
                <h1>IOX</h1>
              </center>
              <ul>
                <li>
                  It is a concept built on the Internet of Things, which would
                  allow deployment of connected UAVs.
                </li>
                <li>
                  Allows drones to do a variety of tasks in an efficient and
                  scalable manner.
                </li>
              </ul>
            </div>
            <div className="section-2">
              <center>
                <img src={COGNIXA} alt="" height={100} />
                <h1>COGNIXA</h1>
              </center>
              <ul>
                <li>
                  At Cognixa we use Machine Learning (ML) tools and algorithms
                  to develop AI-driven products and solutions.
                </li>
                <li>
                  Our team has extensive knowledge and experience in creating,
                  implementing, and integrating AI solutions into the business
                  environment.
                </li>
              </ul>
            </div>
          </div>
        </center>
      </div>
    </>
  );
};

export default About;
