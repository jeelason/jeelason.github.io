import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/homepage.png";
import projImg2 from "../assets/img/drive.png";
import projImg3 from "../assets/img/zahwines.png";

export const Projects = () => {
  const projects = [
    {
      title: "GreatValue Builds",
      description: "Full stack custom PC building application",
      imgUrl: projImg1,
      gitHub: "https://github.com/jeelason/great-builds",
      stack: "React.JS | FastAPI | PostgreSQL",
    },
    {
      title: "Drive Swifty",
      description: "Car dealership Solutions software",
      imgUrl: projImg2,
      gitHub: "https://github.com/jeelason/drive-swiftly",
      stack: "Python | Django | React.JS | Bootstrap",
    },
    {
      title: "Zah Wines",
      description: "Minimalist Wine Website",
      imgUrl: projImg3,
      gitHub: "https://github.com/jeelason/zah-wines",
      stack: "Python | Django | HTML | CSS",
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
    </section>
  );
};

export default Projects;
