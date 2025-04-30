import React from 'react';

const ServicesPage: React.FC = () => {
  return (
    <div>
      {/* Navbar */}
      <nav
        className="navbar navbar-expand-md w-100"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          backdropFilter: "blur(8px)",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)", // 👈 added slight shadow for better navbar separation
        }}
      >
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <a href="/" className="navbar-brand">
            <img src="/Images/logo.png" alt="EventHub Logo" className="logo" style={{ height: "40px" }} />
          </a>

          <ul className="navbar-nav ms-auto">
            {["Home", "About Us", "Services", "Plan Event", "Register", "Login"].map((item, index) => (
              <li className="nav-item" key={index}>
                <a href={`/${item.toLowerCase().replace(/\s+/g, "-")}`} className="nav-link text-dark">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Spacer */}
      <div style={{ height: "80px" }} />

      {/* Services Page Content */}
      <div className="services-page">

        {/* Hero Section */}
        <section className="py-5 bg-light text-center">
          <div className="container">
            <h1 className="display-4 fw-bold mb-3">Empowering Every Event with EventHub</h1>
            <p className="lead mx-auto" style={{ maxWidth: '700px' }}>
              From planning to execution, EventHub offers all the tools you need to create unforgettable experiences — easily, seamlessly, and successfully.
            </p>
          </div>
        </section>

        {/* Core Services Section */}
        <section className="py-5">
          <div className="container">
            <h2 className="text-center mb-5">🌟 Our Core Services</h2>
            <div className="row g-4">
              {[
                {
                  title: "For Event Organizers",
                  features: [
                    "🎯 Event Creation Wizard",
                    "🗓️ Task Management & Collaboration",
                    "💰 Budget Planning Tools",
                    "📢 Email Marketing & Analytics"
                  ]
                },
                {
                  title: "For Vendors",
                  features: [
                    "🏪 Professional Profiles & Listings",
                    "📩 Booking Management System",
                    "💵 Secure Payment Gateway",
                    "🌟 Client Reviews & Promotions"
                  ]
                },
                {
                  title: "For Platform Admins",
                  features: [
                    "🔒 Role-Based Access Control",
                    "🛡️ Data Security & Compliance",
                    "📊 Platform Analytics",
                    "⚙️ System Monitoring Tools"
                  ]
                }
              ].map((service, idx) => (
                <div className="col-md-4" key={idx}>
                  <div className="card h-100 shadow-sm border-0">
                    <div className="card-body text-center">
                      <h3 className="card-title fw-bold mb-3">{service.title}</h3>
                      <ul className="list-unstyled text-start">
                        {service.features.map((feature, i) => (
                          <li key={i}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services Section */}
        <section className="py-5 bg-light">
          <div className="container">
            <h2 className="text-center mb-5">🚀 Additional Features</h2>
            <div className="row g-4">
              {[
                {
                  title: "Event Enhancements",
                  features: [
                    "📋 Customizable Event Templates",
                    "🤖 AI-Powered Vendor Recommendations",
                    "🎥 Live Event Support (Virtual & On-site)"
                  ]
                },
                {
                  title: "Post-Event Tools",
                  features: [
                    "📝 Guest Feedback Collection",
                    "🔗 CRM, Zoom, and Calendar Integrations",
                    "📈 Post-Event Analytics & Reporting"
                  ]
                }
              ].map((service, idx) => (
                <div className="col-md-6" key={idx}>
                  <div className="card h-100 shadow-sm border-0">
                    <div className="card-body text-center">
                      <h4 className="card-title fw-bold mb-3">{service.title}</h4>
                      <ul className="list-unstyled text-start">
                        {service.features.map((feature, i) => (
                          <li key={i}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-5">
          <div className="container">
            <h2 className="text-center mb-5">🌟 Success Stories</h2>
            <div className="row g-4">
              {[
                {
                  quote: "EventHub made our annual tech conference seamless! Vendor management and RSVP tracking were flawless.",
                  author: "Emily R., Event Organizer"
                },
                {
                  quote: "Thanks to EventHub, I grew my catering business by 40%! Smooth bookings, timely payments, and great exposure.",
                  author: "David M., Vendor Partner"
                }
              ].map((testimonial, idx) => (
                <div className="col-md-6" key={idx}>
                  <div className="card shadow-sm border-0 p-4 h-100">
                    <blockquote className="blockquote mb-0">
                      <p className="mb-3">"{testimonial.quote}"</p>
                      <footer className="blockquote-footer">{testimonial.author}</footer>
                    </blockquote>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call-to-Action */}
        <section className="py-5 bg-primary text-white text-center">
          <div className="container">
            <h2 className="mb-4">Ready to Transform Your Event Experience?</h2>
            <p className="lead mb-4">
              Whether you're planning, providing, or managing — EventHub is your trusted partner every step of the way.
            </p>
            <div className="d-flex justify-content-center flex-wrap gap-3">
              <a href="/create-event" className="btn btn-light btn-lg">Create Your Event</a>
              <a href="/vendor-signup" className="btn btn-outline-light btn-lg">Become a Vendor</a>
              <a href="/contact" className="btn btn-secondary btn-lg">Contact Support</a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default ServicesPage;
