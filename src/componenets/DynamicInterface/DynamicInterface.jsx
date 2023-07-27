import DynamicInterfaceInfo from "./DynamicInterfaceInfo";
import "./DynamicInterface.css";

const DynamicInterface = () => {
  return (
    <>
      <center>
        <h1 className="Dynamic-head1">Dynamic Interface</h1>
        <p className="Dynamic-p">
          The system is configurable for challenging operational environments.
          The Drones/System is equipped with cameras.
        </p>
      </center>
      <div className="Dynamic-container">
        {DynamicInterfaceInfo.map((infos) => {
          return (
            <div className="section">
              <img src={infos.img} alt="" />
              <div className="Dynamic-Info">
                <h3 className="Dynamic-Title">{infos.title}</h3>
                <p className="Dynamic-Content">{infos.info}</p>
                <button className="Dynamic-btn">Learn More</button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default DynamicInterface;
