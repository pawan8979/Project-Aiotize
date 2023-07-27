import "./Footer.css";
import FooterTop from "./FooterTop";
import Contact from "../Contact/Contact";
import facebook from "./facebook.svg";
import instagram from "./instagram.svg";
import linkedin from "./linkedin.svg";
import twitter from "./twitter.svg";

const Footer = () => {
  return (
    <>
      <Contact />
      <FooterTop />
      <div className="footer">
        <div className="container">
          <div className="footerCopyright">
            <p>@ 2022 by Aiotize. Proudly created with Love</p>
          </div>
          <div className="right">
            <p>Follow us:</p>
            <img src={facebook} alt="facebook" />
            <img src={instagram} alt="instagram" />
            <img src={linkedin} alt="linkedin" />
            <img src={twitter} alt="twitter" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
