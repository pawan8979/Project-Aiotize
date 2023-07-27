import "./HowItWorks.css";
import HIWInfo from "./HowItWorksInfo";
const HowItWorks = () => {
  return (
    <>
      <center className="HIW-Center">
        <h1>How It Works</h1>
      </center>
      {HIWInfo.map((info) => {
        return (
          <div className="hiw-container">
            <div className="x-section">
              <div className="content-1">
                <center>
                  <h1 className="HIW-head1">{info.title}</h1>
                </center>
                <ul>
                  {info.tasks.map((task) => {
                    return <li className="HIW-li">{task}</li>;
                  })}
                </ul>
              </div>
              <div className="content-2">
                <img src={info.img} alt="" height={250} />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default HowItWorks;
