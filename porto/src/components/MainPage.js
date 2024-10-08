import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/me.png";

export const MainPage = () => {
  const handleEmail = () => {
    window.open("mailto:jason@jasonl.dev");
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>Hi I'm Jason</h1>
            <p>
              I am a <strong>full stack software engineer</strong> who is always
              curious and strives for efficiency and functionality. I was a
              winemaker for over a decade and took an interest in web
              development when I created a website for a personal wine label. I
              found myself immersed in software development and have since
              completed an accelerated coding bootcamp with Hack Reactor in July
              2022. I am open to network and new work opportunities to continue and grow
              as a software engineer.
            </p>
            <button onClick={handleEmail}>
              Let's Connect <ArrowRightCircle size={35} />
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="header img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default MainPage;
