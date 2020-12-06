import NavbarComponent from "./components/navbar";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./App.css";

const marked = require("marked");

function App() {
  const [code, setInputCode] = useState("");

  const handleInputChange = (e) => {
    setInputCode(e.target.value);
  };

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
      </div>

      <div className="container">
        <Row className="justify-content-md-center">
          <Col className="col-lg-6 col-md-6 col-sm-12 col-12">
            <h5>Input</h5>
            <Form.Group>
              <Form.Control
                as="textarea"
                id="textarea"
                rows={17}
                columns={30}
                value={code}
                onChange={handleInputChange}
                autoComplete="false"
              />
            </Form.Group>
          </Col>
          <Col>
            <h5>Markdown</h5>
            <div
              className="markdown p-2 col-lg-12 col-md-6 col-sm-12 col-12"
              dangerouslySetInnerHTML={{ __html: marked(code) }}
            ></div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default App;
