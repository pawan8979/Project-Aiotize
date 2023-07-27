import Link from "../Link/Link";
import "./Navbar.css";
import logo from "./logo.png";

const Navbar = () => {
  return (
    <div className="nav">
      <img src={logo} alt="logo" />
      <Link href="#">Home</Link>
      <Link href="#">Product</Link>
      <Link href="#">Solutions</Link>
      <Link href="#">Services</Link>
      <Link href="#">Demos</Link>
      <Link href="#">Resources</Link>
      <Link href="#">More</Link>
    </div>
  );
};
export default Navbar;
