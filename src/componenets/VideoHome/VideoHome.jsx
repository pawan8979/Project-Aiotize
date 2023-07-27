import videoSource from "./VideoHome.mp4";
import "./VideoHome.css";

const VideoHome = () => {
  return (
    <>
      <video className="VideoHome" autoPlay loop muted>
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </>
  );
};
export default VideoHome;
