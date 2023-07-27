import Home from "./pages/Home/Home";
import Navbar from "./componenets/Navbar/Navbar";
import Footer from "./componenets/Footer/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <div className="container">
        <Navbar />
        <Home />
      </div>
      <Footer />
    </div>
  );
};
export default App;
