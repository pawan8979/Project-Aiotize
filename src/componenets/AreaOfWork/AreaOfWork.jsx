import Card from "./Card";
import "./AreaOfWork.css";
const AreaOfWork = () => {
  return (
    <>
      <div className="AOW-Container">
        <center>
          <h1 className="head1">Areas of Work</h1>
          <p className="AOW-p">Deep Tech</p>
          <p className="AOW-p">Automation</p>
          <p className="AOW-p">Computer Vision</p>
          <p className="AOW-p">Machine Learning</p>
          <p className="AOW-p">Business Intelligence</p>
          <p className="AOW-p">Innovation Consultancy</p>
          <p className="AOW-p">
            These are amongst the many areas we would like to work in.
          </p>
          <div className="Card-Container">
            <Card />
          </div>
        </center>
      </div>
    </>
  );
};

export default AreaOfWork;
