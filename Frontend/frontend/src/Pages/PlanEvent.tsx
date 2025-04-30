// src/pages/CreateEvent.tsx
import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const CreateEvent: React.FC = () => {
  const navigate = useNavigate();
  const [eventData, setEventData] = useState({
    eventName: '',
    eventDate: '',
    eventLocation: '',
    budget: '',
    description: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEventData({
      ...eventData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Event Created:", eventData);

    // After creating event, redirect to Vendors List
    navigate('/vendors');
  };

  return (
    <>
      <div className="container-fluid">
        <nav className="navbar navbar-expand-md" style={{ backgroundColor: "rgba(255, 255, 255, 0.8)", backdropFilter: "blur(8px)" }}>
          <div className="container-fluid d-flex justify-content-between align-items-center">
            <a href="/" className="navbar-brand">
              <img src="/Images/logo.png" alt="EventHub Logo" className="logo" />
            </a>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item"><a href="/" className="nav-link text-dark">Home</a></li>
              <li className="nav-item"><a href="/about" className="nav-link text-dark">About Us</a></li>
              <li className="nav-item"><a href="/services" className="nav-link text-dark">Services</a></li>
              <li className="nav-item"><a href="/plan-event" className="nav-link text-dark">Plan Event</a></li>
              <li className="nav-item"><a href="/signup" className="nav-link text-dark">Register</a></li>
              <li className="nav-item"><a href="/login" className="nav-link text-dark">Login</a></li>
            </ul>
          </div>
        </nav>
      </div>

      <Container className="mt-3 pt-5">
        <h2 className="text-center mb-4">Create Your Event</h2>
        <Row className="justify-content-center">
          <Col md={8}>
            <Form onSubmit={handleSubmit} className="p-4 shadow rounded bg-light">
              <Form.Group className="mb-3">
                <Form.Label>Event Name</Form.Label>
                <Form.Control
                  type="text"
                  name="eventName"
                  value={eventData.eventName}
                  onChange={handleChange}
                  placeholder="Enter event name"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Event Date</Form.Label>
                <Form.Control
                  type="date"
                  name="eventDate"
                  value={eventData.eventDate}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Location</Form.Label>
                <Form.Control
                  type="text"
                  name="eventLocation"
                  value={eventData.eventLocation}
                  onChange={handleChange}
                  placeholder="Enter location"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Budget (Optional)</Form.Label>
                <Form.Control
                  type="number"
                  name="budget"
                  value={eventData.budget}
                  onChange={handleChange}
                  placeholder="Enter budget"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Event Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  name="description"
                  value={eventData.description}
                  onChange={handleChange}
                  placeholder="Tell us about your event..."
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100 mt-3">
                Create Event
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CreateEvent;
