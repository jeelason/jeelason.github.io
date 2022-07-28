import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, gitHub }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbox">
        <img src={imgUrl} alt="project" className="proj-img" />
        <div className="proj-text">
          <a href={gitHub} target="_blank" rel="noreferrer">
            <h4>{title}</h4>
          </a>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};
