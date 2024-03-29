import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
//import pdf from "../../Assets/../Assets/N170820_Vadada Venkata Vijaya Bhaskar resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink =
  "https://raw.githubusercontent.com/VenkataVijayaBhaskar007/VenkataVijayaBhaskar007/main/vadada venkata vijaya bhaskar resume 2023.pdf";

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
        <h3> ***hint : If pdf loading takes time, Then click on "download cv" to view it</h3>
          <Button
            variant="primary"
            href="https://raw.githubusercontent.com/VenkataVijayaBhaskar007/VenkataVijayaBhaskar007/main/N170820_Vadada Venkata Vijaya Bhaskar resume.pdf"
            target="_blank"
            style={{ maxWidth: "250px" }}
          > 
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          <Document file={resumeLink} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href="https://raw.githubusercontent.com/VenkataVijayaBhaskar007/VenkataVijayaBhaskar007/main/vadada venkata vijaya bhaskar resume 2023.pdf"
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
