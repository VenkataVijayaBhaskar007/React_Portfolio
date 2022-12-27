import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">V. Venkata Vijaya Bhaskar </span>
            from <span className="purple"> Andhra Pradesh, India.</span>
            <br />
            I am pursuing B.tech from <span className="purple">Rajiv Gandhi University Of Knowledge Technologies</span>,
            Nuzvid.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writting Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Drawing Portraits
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching anime
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Action is the foundational key to all success!"{" "}
          </p>
          <footer className="blockquote-footer">V. Venkata Vijaya Bhaskar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
