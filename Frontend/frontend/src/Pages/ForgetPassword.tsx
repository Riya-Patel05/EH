import React, { useState } from "react";
import { Form, Container, Row, Col } from "react-bootstrap";


const ForgetPwd: React.FC = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
    contactNumber: "",
    agree: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (    <><nav className="navbar navbar-expand-md w-100" style={{ backgroundColor: "rgba(255, 255, 255, 0.8)", backdropFilter: "blur(8px)" }}>
      <div className="container-fluid d-flex justify-content-between align-items-center">
          <a href="/" className="navbar-brand">
              <img src="/Images/logo.png" alt="EventHub Logo" className="logo" />
          </a>
          <ul className="navbar-nav ml-auto">
              <li className="nav-item"><a href="/" className="nav-link text-dark">Home</a></li>
              <li className="nav-item"><a href="/about" className="nav-link text-dark">About Us</a></li>
              <li className="nav-item"><a href="/services" className="nav-link text-dark">Services</a></li>
              <li className="nav-item">
                  <a href="/plan-event" className="nav-link text-dark">
                    Plan Event
                  </a>
                </li>

              <li className="nav-item"><a href="/signup" className="nav-link text-dark">Register</a></li>
              <li className="nav-item"><a href="/login" className="nav-link text-dark">Login</a></li>
          </ul>
      </div>
  </nav><Container className="vh-100 d-flex align-items-center">
          <Row className="w-100 d-flex flex-column flex-md-row justify-content-center align-items-center">
              <Col md={6} className="p-4">


                  <Form
                      onSubmit={handleSubmit}
                      className="p-4 rounded shadow-sm bg-white"
                  >
                      <h3 className="text-center mb-4">FORGET PASSWORD</h3>

                      <Form.Group controlId="email">
                          <Form.Label>Email:</Form.Label>
                          <Form.Control
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange} />
                      </Form.Group>

                      <div className="text-end mt-2">
                          <a href="login" className="forget-pwd">
                              Back To Login
                          </a>
                      </div>


                      <button className="w-100 mt-3 p-1 border-0 text-light">
                          GENERATE OTP
                      </button>
                  </Form>
              </Col>

              <Col
                  md={6}
                  className="d-none d-md-flex justify-content-center align-items-center"
              >
                  <img
                      src="/Images/Forgetpassword.png"
                      alt=""
                      className="img-fluid"
                      style={{ maxHeight: "500px" }} />
              </Col>
          </Row>
      </Container></>
  );
};

export default ForgetPwd;
