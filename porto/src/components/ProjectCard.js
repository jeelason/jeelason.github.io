import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, gitHub, stack }) => {
  return (
    <>
      <Col size={12} sm={6} md={4}>
        <a href={gitHub} target="_blank" rel="noreferrer">
          <div className="proj-imgbox">
            <img src={imgUrl} alt="project" className="proj-img" />
            <div className="proj-text">
              <h4>{title}</h4>
              <span>{description}</span>
            </div>
          </div>
        </a>
        <span>
          <p>{stack}</p>
        </span>
      </Col>
    </>
  );
};
