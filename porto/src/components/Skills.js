import { FaReact, FaHtml5, FaCss3, FaDocker, FaPython } from "react-icons/fa";
import { SiDjango, SiJavascript, SiPostgresql } from "react-icons/si";
import { Container, Row, Col } from "react-bootstrap";

export const Skills = () => {
  return (
    <section className="skill" id="skills">
      <Container className="py-3 mt-5">
        <div className="skill-bx">
          <h2 className="mb-3">SKILLS</h2>
          <Row className="justify-content-md-center mb-5">
            <Col xs lg="2">
              <SiJavascript size={"3em"} className="icons" />
              <div>
                <p>Javascript</p>
              </div>
            </Col>
            <Col xs lg="2">
              <FaPython size={"3em"} className="icons" />
              <div>
                <p>Python</p>
              </div>
            </Col>
            <Col xs lg="2">
              <FaHtml5 size={"3em"} className="icons" />
              <div>
                <p>HTML</p>
              </div>
            </Col>
            <Col xs lg="2">
              <FaCss3 size={"3em"} className="icons" />
              <div>
                <p>CSS</p>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-md-center mb-2">
            <Col xs lg="2">
              <FaReact size={"3em"} className="icons" />
              <div>
                <p>React.js</p>
              </div>
            </Col>
            <Col xs lg="2">
              <SiDjango size={"3em"} className="icons" />
              <div>
                <p>Django</p>
              </div>
            </Col>
            <Col xs lg="2">
              <SiPostgresql size={"3em"} className="icons" />
              <div>
                <p>PostgreSQL</p>
              </div>
            </Col>
            <Col xs lg="2">
              <FaDocker size={"3em"} className="icons" />
              <div>
                <p>Docker</p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Skills;
