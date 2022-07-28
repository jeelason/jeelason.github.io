import { useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/img/logo1.svg";
import navIcon1 from "../assets/img/nav-icon4.svg";
import navIcon2 from "../assets/img/github.svg";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => setActiveLink(value);

  const handleEmail = () => {
    window.open("mailto:jason@jasonl.dev");
  };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
        <span className="nav-bar-toggler-icon"></span>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#skills"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              SKILLS
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              PROJECTS
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/jasonlee220/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon1} alt="icon1" />
              </a>
              <a
                href="https://github.com/jeelason"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon2} alt="icon2" />
              </a>
            </div>
            <button className="vvd" onClick={handleEmail}>
              <span>Let's Connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
