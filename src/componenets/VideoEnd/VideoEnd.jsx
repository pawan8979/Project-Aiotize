import videoSource from "./video.mp4";
import "./VideoEnd.css";

const VideoEnd = () => {
  return (
    <>
      <video className="Video-End" autoPlay loop muted>
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </>
  );
};
export default VideoEnd;
