import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form, InputGroup } from 'react-bootstrap';
import "./css/LandingPage.css";

const vendors = [
    { id: 1, name: "Royal Catering", service: "Catering", image: "/Images/catering1.jpg" },
    { id: 2, name: "Gourmet Delights", service: "Catering", image: "/Images/catering2.jpg" },
    { id: 3, name: "Taste Haven", service: "Catering", image: "/Images/catering3.jpg" },
    { id: 4, name: "Foodie Fiesta", service: "Catering", image: "/Images/catering4.jpg" },
    { id: 5, name: "Culinary Magic", service: "Catering", image: "/Images/catering5.jpg" },
    { id: 6, name: "Golden Spoon", service: "Catering", image: "/Images/catering6.jpg" },
    { id: 7, name: "Divine Dishes", service: "Catering", image: "/Images/catering7.jpg" },
    { id: 8, name: "Flavors Express", service: "Catering", image: "/Images/catering8.jpg" },
    { id: 9, name: "Epicurean Events", service: "Catering", image: "/Images/catering9.jpg" },
    { id: 10, name: "The Chef’s Touch", service: "Catering", image: "/Images/catering10.jpg" },
    { id: 11, name: "Savor Station", service: "Catering", image: "/Images/catering11.jpg" },
    { id: 12, name: "Urban Bites", service: "Catering", image: "/Images/catering12.jpg" },
    { id: 13, name: "Majestic Meals", service: "Catering", image: "/Images/catering13.jpg" },
    { id: 14, name: "Tasty Trails", service: "Catering", image: "/Images/catering14.jpg" },
    { id: 15, name: "Heavenly Platters", service: "Catering", image: "/Images/catering15.jpg" },

    // Decoration
    { id: 16, name: "Floral Dreams", service: "Decoration", image: "/Images/decor1.jpg" },
    { id: 17, name: "Sparkle & Shine", service: "Decoration", image: "/Images/decor2.jpg" },
    { id: 18, name: "Elegant Events", service: "Decoration", image: "/Images/decor3.jpg" },
    { id: 19, name: "Blissful Blooms", service: "Decoration", image: "/Images/decor4.jpg" },
    { id: 20, name: "Festive Touch", service: "Decoration", image: "/Images/decor5.jpg" },
    { id: 21, name: "Aura Decorators", service: "Decoration", image: "/Images/decor6.jpg" },
    { id: 22, name: "Dreamscape Designs", service: "Decoration", image: "/Images/decor7.jpg" },
    { id: 23, name: "Color Burst", service: "Decoration", image: "/Images/decor8.jpg" },
    { id: 24, name: "Glamour Decor", service: "Decoration", image: "/Images/decor9.jpg" },
    { id: 25, name: "Mystic Moments", service: "Decoration", image: "/Images/decor10.jpg" },
    { id: 26, name: "Celebration Creators", service: "Decoration", image: "/Images/decor11.jpg" },
    { id: 27, name: "Radiant Events", service: "Decoration", image: "/Images/decor12.jpg" },
    { id: 28, name: "Vibrant Affairs", service: "Decoration", image: "/Images/decor13.jpg" },
    { id: 29, name: "Royal Aura", service: "Decoration", image: "/Images/decor14.jpg" },
    { id: 30, name: "Decor Crafters", service: "Decoration", image: "/Images/decor15.jpg" },

    // Music/Entertainment
    { id: 31, name: "BeatDrop DJs", service: "Music", image: "/Images/music1.jpg" },
    { id: 32, name: "Rhythm Makers", service: "Music", image: "/Images/music2.jpg" },
    { id: 33, name: "Echo Beats", service: "Music", image: "/Images/music3.jpg" },
    { id: 34, name: "Soul Tunes", service: "Music", image: "/Images/music4.jpg" },
    { id: 35, name: "Bassline Events", service: "Music", image: "/Images/music5.jpg" },
    { id: 36, name: "Vibe Masters", service: "Music", image: "/Images/music6.jpg" },
    { id: 37, name: "DJ Infinity", service: "Music", image: "/Images/music7.jpg" },
    { id: 38, name: "Groove Nation", service: "Music", image: "/Images/music8.jpg" },
    { id: 39, name: "Melody Makers", service: "Music", image: "/Images/music9.jpg" },
    { id: 40, name: "Fusion Beats", service: "Music", image: "/Images/music10.jpg" },
    { id: 41, name: "SoundWave DJs", service: "Music", image: "/Images/music11.jpg" },
    { id: 42, name: "PartyPulse", service: "Music", image: "/Images/music12.jpg" },
    { id: 43, name: "Live Vibes", service: "Music", image: "/Images/music13.jpg" },
    { id: 44, name: "Amped Up", service: "Music", image: "/Images/music14.jpg" },
    { id: 45, name: "SoundSplash", service: "Music", image: "/Images/music15.jpg" },

    // Venues
    { id: 46, name: "Elite Venues", service: "Venue", image: "/Images/venue1.jpg" },
    { id: 47, name: "Grand Halls", service: "Venue", image: "/Images/venue2.jpg" },
    { id: 48, name: "Skyline Banquets", service: "Venue", image: "/Images/venue3.jpg" },
    { id: 49, name: "Lush Lawns", service: "Venue", image: "/Images/venue4.jpg" },
    { id: 50, name: "Opulent Spaces", service: "Venue", image: "/Images/venue5.jpg" },
    { id: 51, name: "Crystal Ballrooms", service: "Venue", image: "/Images/venue6.jpg" },
    { id: 52, name: "Azure Halls", service: "Venue", image: "/Images/venue7.jpg" },
    { id: 53, name: "Golden Gates Venue", service: "Venue", image: "/Images/venue8.jpg" },
    { id: 54, name: "The Gardenia", service: "Venue", image: "/Images/venue9.jpg" },
    { id: 55, name: "Twilight Terraces", service: "Venue", image: "/Images/venue10.jpg" },
    { id: 56, name: "Imperial Grounds", service: "Venue", image: "/Images/venue11.jpg" },
    { id: 57, name: "Bliss Banquets", service: "Venue", image: "/Images/venue12.jpg" },
    { id: 58, name: "The Pearl Venue", service: "Venue", image: "/Images/venue13.jpg" },
    { id: 59, name: "Sunset Pavilions", service: "Venue", image: "/Images/venue14.jpg" },
    { id: 60, name: "Enchanted Gardens", service: "Venue", image: "/Images/venue15.jpg" },

];

const VendorsList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
  };

  const filteredVendors = vendors.filter(vendor =>
    vendor.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory ? vendor.service === selectedCategory : true)
  );

  return (
    <><nav className="navbar navbar-expand-md top-0 start-0 w-100 fixed-top" style={{ backgroundColor: "rgba(255, 255, 255, 0.8)", backdropFilter: "blur(8px)" }}>


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

              <Container className="mt-5 pt-5">
              <h2 className="text-center mb-4">Find the Perfect Vendor for Your Event</h2>

              {/* Search and Filters */}
              <Row className="mb-4">
                  <Col md={6}>
                      <InputGroup>
                          <Form.Control
                              placeholder="Search Vendors"
                              value={searchTerm}
                              onChange={handleSearchChange} />
                      </InputGroup>
                  </Col>

                  <Col md={6}>
                      <Form.Select value={selectedCategory} onChange={handleCategoryChange}>
                          <option value="">All Categories</option>
                          <option value="Catering">Catering</option>
                          <option value="Decoration">Decoration</option>
                          <option value="Photography">Photography</option>
                          <option value="Venue">Venue</option>
                          <option value="Entertainment">Entertainment</option>
                      </Form.Select>
                  </Col>
              </Row>

              {/* Vendor Cards */}
              <Row>
                  {filteredVendors.map((vendor) => (
                      <Col md={6} lg={4} key={vendor.id} className="mb-4">
                          <Card className="vendor-card shadow-sm">
                              <Card.Img variant="top" src={vendor.image} style={{ height: '200px', objectFit: 'cover' }} />
                              <Card.Body>
                                  <Card.Title>{vendor.name}</Card.Title>
                                  <Card.Text>Category: {vendor.service}</Card.Text>

                                  <Button variant="success" className="w-100">
                                      Select Vendor
                                  </Button>
                              </Card.Body>
                          </Card>
                      </Col>
                  ))}
              </Row>

              {/* Pagination / Load More */}
              <div className="text-center mt-4">
                  <Button variant="outline-primary">Load More Vendors</Button>
              </div>
          </Container></>
  );
};

export default VendorsList;
