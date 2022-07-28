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
      gitHub: "https://github.com/jeelason/drive-swiftly",
    },
    {
      title: "Zah Wines",
      description: "Minimalist Wine Website",
      imgUrl: projImg3,
      gitHub: "https://github.com/jeelason/zah-wines",
    },
  ];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2 className="mb-4">PROJECTS</h2>
            <Row>
              {projects.map((project, index) => {
                return <ProjectCard key={index} {...project} />;
              })}
            </Row>
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
