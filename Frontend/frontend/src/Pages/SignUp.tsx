import React, { useState } from "react";
import { Form, Container, Row, Col } from "react-bootstrap";
import "./css/LandingPage.css";

const Signup: React.FC = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
    contactNumber: "",
    agree: false,
  });

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    if (!formData.agree) {
      alert("You must agree to the Terms & Conditions before signing up.");
      return;
    }
  
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
  
    try {
      const response = await fetch("http://localhost:3000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      const result = await response.json();
  
      if (!response.ok) {
        throw new Error(result.message || "Signup failed");
      }
  
      alert("Signup successful!");
      console.log("API Response:", result);
  
      // Optionally redirect or reset the form
      // window.location.href = "/login";
  
    } catch (error: any) {
      alert(error.message || "An error occurred during signup.");
      console.error("Signup error:", error);
    }
  };
  

  return (
    <>
      <div className="container-fluid">
    <nav className="navbar navbar-expand-md w-100 " style={{ backgroundColor: "rgba(255, 255, 255, 0.8)"}}>
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
      </nav>
      <div style={{ height: "80px" }} /> 
    </div>
    
    
      <Container className=" d-flex align-items-center">
        <Row className="w-100 d-flex flex-column flex-md-row justify-content-center align-items-center">
          <Col md={6}>
            <Form onSubmit={handleSubmit} className="p-4 rounded shadow-sm w-100" >
              <h3 className="text-center mb-4">SIGN UP</h3>

              {/* Username */}
              <Form.Group controlId="username" className="mb-3">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              {/* Password */}
              <Form.Group controlId="password" className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              {/* Confirm Password */}
              <Form.Group controlId="confirmPassword" className="mb-3">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              {/* Email */}
              <Form.Group controlId="email" className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              {/* Contact Number */}
              <Form.Group controlId="contactNumber" className="mb-3">
                <Form.Label>Contact Number</Form.Label>
                <Form.Control
                  type="text"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              {/* Agree to Terms */}
              <Form.Group controlId="agree" className="mb-3">
                <Form.Check
                  type="checkbox"
                  name="agree"
                  checked={formData.agree}
                  onChange={handleChange}
                  label={
                    <span>
                      I agree to the{" "}
                      <a href="/terms-condition" className="text-primary" target="_blank" rel="noopener noreferrer">
                        Terms & Conditions
                      </a>
                    </span>
                  }
                  required
                />
              </Form.Group>

              {/* Submit Button */}
              <button type="submit" className="w-100 btn btn-primary mt-3">
                Sign Up
              </button>

              {/* Already have account */}
              <div className="text-center mt-3">
                <span>
                  Already have an account?{" "}
                  <a href="/login" className="text-decoration-none">
                    Login
                  </a>
                </span>
              </div>
            </Form>
          </Col>

          {/* Signup Image */}
          <Col md={6} className="d-none d-md-flex justify-content-center align-items-center">
            <img src="/Images/signup.webp" alt="Signup" className="img-fluid"  />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Signup;
