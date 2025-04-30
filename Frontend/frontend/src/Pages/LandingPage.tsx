import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/LandingPage.css";

const LandingPage: React.FC = () => {
  return (
    <div>
      <header className="position-relative" style={{ height: "95vh" }}>
        <img
          src="/Images/hero-image.png"
          alt="Hero"
          className="img-fluid w-100"
          style={{ height: "105%", objectFit: "cover" }}
        />

<nav className="navbar navbar-expand-md top-0 start-0 w-100 fixed-top" style={{ backgroundColor: "rgba(255, 255, 255, 0.8)", backdropFilter: "blur(8px)" }}>


          <div className="container-fluid d-flex justify-content-between align-items-center">
            <a href="/" className="navbar-brand">
              <img src="/Images/logo.png" alt="logo" className="logo" />
            </a>

            <div className="ml-auto">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a href="/" className="nav-link text-dark">
  Home
</a>

                </li>
                <li className="nav-item">
                  <a href="/about" className="nav-link text-dark">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/services" className="nav-link text-dark">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/plan-event" className="nav-link text-dark">
                    Plan Event
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/signup" className="nav-link text-dark">
                    Register
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/login" className="nav-link text-dark">
                    Login
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="overlay position-absolute top-50 start-50 translate-middle text-white text-center">
          <h1 className="fw-bold text-light">Effortless Events</h1>
          <p className="fw-bold">
            Plan, book, and manage your event with ease.
          </p>
          <button className="btn bg-light mt-3">Get Started</button>
        </div>
      </header>

      <div className="container mt-5">
        <h2 className="text-center fw-bold">Why Choose EventHub?</h2>
        <div className="row mt-4">
          <div className="col-md-4">
            <div className="card text-center p-4 shadow-sm h-100">
              <h5 className="fw-bold">Event Planning Tools</h5>
              <p>Manage tasks, budgets, and timelines effortlessly.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-center p-4 shadow-sm h-100">
              <h5 className="fw-bold">Vendor Booking</h5>
              <p>
                Find caterers, decorators, and service providers in one place.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card text-center p-4 shadow-sm h-100">
              <h5 className="fw-bold">Real-Time Coordination</h5>
              <p>Communicate instantly with vendors for smooth event execution.</p>
            </div>
          </div>
        </div>
      </div>

    <div className="container">
    <h2 className="fw-bold">Vendors</h2>
        <div className="row mt-4">
          <div className="col-md-4 mt-3">
            <div className="card shadow-sm h-100 d-flex flex-column">
              <img src="/Images/hero-image.png" alt="Venue" className="card-img-top" />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Venue</h5>
                <p className="card-text text-muted">
                  Find the perfect venue for events, from elegant banquet halls
                  to outdoor gardens.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mt-3">
            <div className="card shadow-sm h-100 d-flex flex-column ">
              <img src="/Images/hero-image.png"alt="Decorators" className="card-img-top" />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Decorators</h5>
                <p className="card-text text-muted">
                  Transform your event with professional decorators who bring
                  your vision to life.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mt-3">
            <div className="card shadow-sm h-100 d-flex flex-column">
              <img src="/Images/hero-image.png"alt="Caterers" className="card-img-top" />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Caterers</h5>
                <p className="card-text text-muted flex-grow-1">
                  Enjoy delicious, customized catering services for weddings,
                  parties, and corporate events.
                </p>
              </div>
            </div>
          </div>
        </div></div>
<div className="bg-light py-5">
        <div className="container">
          <h2 className="text-center fw-bold">How It Works</h2>
          <div className="row mt-4">
            <div className="col-md-3">
              <div className="card text-center p-4 shadow-sm">
                <h5 className="fw-bold">1. Sign Up</h5>
                <p>Create an account and access powerful event management tools.</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card text-center p-4 shadow-sm">
                <h5 className="fw-bold">2. Plan Your Event</h5>
                <p>Set up tasks, timelines, and budgets in minutes.</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card text-center p-4 shadow-sm">
                <h5 className="fw-bold">3. Book Vendors</h5>
                <p>Choose from a wide range of trusted service providers.</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card text-center p-4 shadow-sm">
                <h5 className="fw-bold">4. Enjoy Your Event</h5>
                <p>Relax and let EventHub simplify your event management journey.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-dark text-white py-5 mt-5">
        <div className="container text-center">
          <h2 className="fw-bold">Stay Updated!</h2>
          <p>Subscribe to our newsletter for the latest features and updates.</p>
          <div className="d-flex justify-content-center mt-3">
            <input
              type="email"
              className="form-control w-50"
              placeholder="Enter your email"
            />
            <button className="btn btn-primary ms-2">Subscribe</button>
          </div>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="text-center py-5">
        <h2 className="fw-bold">Start Planning Your Event Today!</h2>
        <button className="btn btn-primary mt-3">Sign Up Now</button>
      </div>
    </div>
   
  );
};

export default LandingPage;
