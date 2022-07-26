import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/homepage.png";
import projImg2 from "../assets/img/drive.png";
import projImg3 from "../assets/img/zahwines.png";

export const Projects = () => {
  const projects = [
    {
      title: "GreatValue Builds",
      description: "Build computers",
      imgUrl: projImg1,
      gitHub: "https://github.com/jeelason/great-builds",
    },
    {
      title: "Drive Swifty",
      description: "Car dealership Solutions software",
      imgUrl: projImg2,
    },
    {
      title: "Zah Wines",
      description: "Minimalist Wine Website",
      imgUrl: projImg3,
    },
  ];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>more paragraphs here</p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              {/* <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab One</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab 3</Nav.Link>
                </Nav.Item>
              </Nav> */}
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second"></Tab.Pane>
                <Tab.Pane eventKey="third"></Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="sprite"
      ></img>
    </section>
  );
};

export default Projects;
