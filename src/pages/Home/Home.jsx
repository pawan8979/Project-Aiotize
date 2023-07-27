import Partners from "../../componenets/Partners/Partners";
import "./Home.css";
import About from "../../componenets/About/About";
import AreaOfWork from "../../componenets/AreaOfWork/AreaOfWork";
import DynamicInterface from "../../componenets/DynamicInterface/DynamicInterface";
import HowItWorks from "../../componenets/HowItWorks/HowItWorks";
import VideoHome from "../../componenets/VideoHome/VideoHome";
import VideoEnd from "../../componenets/VideoEnd/VideoEnd";

const Home = () => {
  return (
    <main>
      <div className="home-landing">
        <h1>Bridging Spaces | Fly The Best</h1>
        <p className="text-white">
          Drones that are best in class and completely customizable for defence,
          logistics, healthcare, disaster management, agriculture, mining, real
          estate, and more.
        </p>
        <a href="https://www.youtube.com/watch?v=Tgb_RwOkHZc" className="btn">
          Find out more
        </a>
      </div>
      <VideoHome />
      <About />
      <AreaOfWork />
      <HowItWorks />
      <Partners />
      <DynamicInterface />
      <VideoEnd />
    </main>
  );
};
export default Home;
