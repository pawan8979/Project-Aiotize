import videoSource from "./video.mp4";
import "./VideoBackground.css";

const VideoBackground = () => {
  return (
    <>
      <video autoPlay loop muted>
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay"></div>
    </>
  );
};
export default VideoBackground;
