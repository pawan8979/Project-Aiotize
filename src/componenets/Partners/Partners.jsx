import Image1 from "./aws.png";
import Image2 from "./intel.png";
import Image3 from "./nvidia.png";
import Image4 from "./tensorflow.png";
import Image5 from "./aic.jpg";
import Image6 from "./logx.png";
import Image7 from "./mission.png";
import Image8 from "./reseau.png";
import "./Partners.css";

const Partners = () => {
  const PartnerInfo = [
    {
      title: "Partners",
      img: [Image1, Image2, Image3, Image4],
    },
    {
      title: "Accelerated By",
      img: [Image5, Image6, Image7, Image8],
    },
  ];
  return PartnerInfo.map((info) => {
    return (
      <div className="pContainer" key={info.title}>
        <h3>{info.title}</h3>
        <div className="row">
          {info.img.map((item, index) => (
            <img key={index} src={item} alt="" />
          ))}
        </div>
      </div>
    );
  });
};
export default Partners;
