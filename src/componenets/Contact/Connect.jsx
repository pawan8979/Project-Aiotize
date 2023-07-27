import Image1 from "./CallEmail.png";
import Image2 from "./group.png";
import "./Connect.css";
const Connect = () => {
  const ConnectInfo = [
    {
      img: Image1,
      desc: "+91 976 300 0088 | info@aiotize.com",
    },
    {
      img: Image2,
      desc: "Aiotize Inc. IISER Institute, I-Rise Technology Business Incubator, Mohali, Punjab, India, 140308",
    },
  ];

  return (
    <>
      <h3 className="Connect-Head3">Let's Connect</h3>
      <div className="Connect-Container">
        {ConnectInfo.map((info) => {
          return (
            <div className="card" key={info.desc}>
              <img src={info.img} alt="" />
              <p>{info.desc}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Connect;
