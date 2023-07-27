import "./FooterTop.css";

const FooterTop = () => {
  return (
    <div className="FooterTop">
      <div className="name">
        <h5>AIOTIZE Pvt. Ltd.</h5>
        <p>
          Aiotize develops bespoke Business Intelligence solutions for
          enterprises and governments worldwide by applying a layer of analytics
          through our proprietary cloud-based, AI Engine Cognixa.
        </p>
      </div>
      <div className="solutions">
        <p>Solutions</p>
        <a href="#">IOX</a>
        <a href="#">AOS</a>
        <a href="#">COGNIXA</a>
      </div>
      <div className="services">
        <p>Services</p>
        <a href="#">Ecosystem</a>
        <a href="#">Surveying</a>
        <a href="#">Maintenance</a>
      </div>
      <div className="company">
        <p>Company</p>
        <a href="#">Aiotize Academy</a>
        <a href="#">Contact Us</a>
        <a href="#">Career</a>
      </div>
    </div>
  );
};
export default FooterTop;
