import NavbarComponent from "./components/navbar";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ReactMarkdown from "react-markdown";
import "./App.css";

function App() {
  return (
    <div>
      <NavbarComponent />
      <div className="container text-center mt-3">
        <h3>
          Preview <span className="underlined">Markdown</span> In Realtime
        </h3>
        <h6>
          Learn markdown{" "}
          <a
            href="https://www.markdowntutorial.com/"
            target="_blank"
            referrerPolicy="no-referrer"
            rel="noreferrer"
          >
            here
          </a>
        </h6>
        <hr />
      </div>

      <div className="container mt-3">
        <Row className="justify-content-md-center">
          <Col className="text-center col-lg-6 col-md-6 col-sm-12 col-12">
            <h5>Input</h5>
            <Form.Group>
              <Form.Control
                as="textarea"
                id="textarea"
                rows={17}
                columns={30}
                autoComplete="false"
              />
            </Form.Group>
          </Col>
          <Col className="text-center col-lg-6 col-md-6 col-sm-12 col-12">
            <h5>Markdown</h5>
            <Form.Group>
              <Form.Control
                as="textarea"
                id="textarea"
                className="markdown"
                rows={17}
                columns={30}
                readOnly
              />
            </Form.Group>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default App;
