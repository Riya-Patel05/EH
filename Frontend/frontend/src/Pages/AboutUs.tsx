import { Container, Row} from 'react-bootstrap';
import "./css/LandingPage.css";

function AboutUs() {
    return (
        <><header className="position-relative" style={{ height: "95vh" }}>
            <img
                src="/Images/hero-about.png"
                alt="Hero"
                className="img-fluid w-100"
                style={{ height: "105%", objectFit: "cover" }} />

            <nav className="navbar navbar-expand-md w-100 fixed-top" >


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
                <h1 className="fw-bold text-light">Your Event, Our Mission</h1>
                <p className="fw-bold">
                Discover a seamless event planning experience designed around you.
                </p>
                
            </div>
        </header><Container fluid className="about-us-page mt-5 pt-5">


                <Container className="mt-5 pt-5">
                    <Row className="align-items-center">
                        
                            <h1 className="mb-4">About EventHub</h1>
                            <p className='about-us'>EventHub is a dynamic event management platform designed to simplify the planning, execution, and coordination of events by offering distinct features for users, vendors, and administrators.EventHub provides users with tools for event creation and planning, including task and timeline management, budget tracking, and vendor booking. Users can browse vendors, leave reviews, ensuring a hassle-free event management experience.Vendors can list their services, manage their profiles, and oversee orders efficiently. .The platform includes robust admin controls, enabling user and role management, vendor approvals, and profile verification.</p>

                            <p className='about-us'>
                                At <strong>EventHub</strong>, we believe every event deserves to be extraordinary. We bring organizers, vendors,
                                and attendees together on a single platform to simplify event planning, coordination, and execution.
                            </p>
                            <p className='about-us'>
                                Founded with the vision to make event management seamless and stress-free, EventHub empowers individuals
                                and organizations to create unforgettable experiences with ease. Our platform provides intuitive tools for
                                creating events, managing vendors, tracking budgets, sending invites, and coordinating real-time updates.
                            </p>
                            <p className='about-us'>
                                Whether you're planning a wedding, a corporate conference, or a community festival, EventHub offers you
                                everything you need to make your event a resounding success.
                            </p>
                            <h4 className="mt-5">Our Mission</h4>
                            <p className='about-us'>
                                To revolutionize the way people plan and experience events by providing a trusted, user-friendly, and powerful
                                event management platform.
                            </p>

                            <h4 className="mt-5">Why Choose Us?</h4>
                            <ul className='about-us'>
                                <li>Effortless Event Creation & Management</li>
                                <li>Access to a Wide Network of Trusted Vendors</li>
                                <li>Real-Time Collaboration and Communication</li>
                                <li>Secure and Reliable Platform</li>
                                <li>Post-Event Analytics and Insights</li>
                            </ul>
                        
                        {/* <Col md={6} className="d-flex justify-content-center align-items-center">
                            <img
                                src="/Images/aboutus.webp"
                                alt="About EventHub"
                                className="img-fluid"
                                style={{ maxHeight: '600px', objectFit: 'cover' }} />
                        </Col> */}
                    </Row>
                </Container>
            </Container></>
    );
}

export default AboutUs;
