import "./Card.css";
import CardInfo from "./CardInfo";

const Card = () => {
  return CardInfo.map((info) => {
    return (
      <div className="AOW-card">
        <img src={info.img} alt="" />
        <h1 className="header-h1">{info.title}</h1>
        <ul>
          {info.tasks.map((task) => {
            return <li>{task}</li>;
          })}
        </ul>
      </div>
    );
  });
};

export default Card;
