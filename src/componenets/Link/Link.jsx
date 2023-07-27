import "./Link.css";

export default function Link({ href, children }) {
  return (
    <a className="nav-links" href={href}>
      {children}
    </a>
  );
}
