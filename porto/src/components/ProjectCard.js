import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, gitHub }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="project" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <a href={gitHub} target="_blank" />
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};
