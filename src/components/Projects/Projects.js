import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import PAWS from "../../Assets/Projects/PAWS.png";
import UIUX from "../../Assets/Projects/UIUX.png";
import portfolio from "../../Assets/Projects/portfolio.png";
import NLP from "../../Assets/Projects/NLP.png";
import volume from "../../Assets/Projects/volume.png";
import Search from "../../Assets/Projects/Search.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PAWS}
              isBlog={false}
              title="PAWS Ecommerce website"
              description="PAWS is an ecommerce website which is created for animals, especially for the pets. I made PAWS with html, css, and javascript."
              ghLink="https://github.com/VenkataVijayaBhaskar007/PAWS_Responsive_Ecommerce_website"
              demoLink="https://paws-9ysldjn19-venkatavijayabhaskar007.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={UIUX}
              isBlog={false}
              title="UIUX"
              description="These are my UIUX works which I post them in this repository. You can view them by clicking below links."
              ghLink="https://github.com/VenkataVijayaBhaskar007/My_UI_work"
              demoLink="https://github.com/venkatavijayabhaskar007/My_UI_work"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Portfolio"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website."
              ghLink="https://github.com/venkatavijayabhaskar007/React_Portfolio"
              demoLink="https://react-portfolio-venkatavijayabhaskar007.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={NLP}
              isBlog={false}
              title="Restarunt reviews using NLP"
              description="This project will give info of reviews given by the users by using Natural Language Processing."
              ghLink="https://github.com/VenkataVijayaBhaskar007/Restarunt_reviews_using_NLP"
              demoLink="https://github.com/venkatavijayabhaskar007/Restarunt_reviews_using_NLP"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={volume}
              isBlog={false}
              title="Wireless Volume control"
              description="This project is about control of volume of a system with hand gestures by using python algorithm"
              ghLink="https://github.com/venkatavijayabhaskar007/Wireless_volume_control_using_hand_gestures"
              demoLink="https://github.com/venkatavijayabhaskar007/Wireless_volume_control_using_hand_gestures" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Search}
              isBlog={false}
              title="Search github user"
              description="In this project we can search a github user by searching their name. Works with API call in javascript and react."
              ghLink="https://github.com/VenkataVijayaBhaskar007/Search_GITHUB_user_using_REACT"
              demoLink="https://search-github-user-using-react.vercel.app/"   
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
