import React, { useState, useEffect } from "react";
import { Container, Navbar, Nav, Col, Row, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { FaBriefcase, FaGraduationCap, FaCheckCircle, FaLink, FaArrowRight, FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import "@fortawesome/fontawesome-free/css/all.min.css";

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  

  const timelineItems = [
    { period: "4/2025 - 6/2025", title: "Web Developer Intern (Remote) – Majorelle Communication", description: "Developed 'Allo Nadafa', a booking platform for cleaning services. Implemented frontend & backend services using Mern Stack(Reactjs, Nodejs, Expressjs, MongoDB). Designed and maintained RESTful APIs to support frontend operations." },
    { period: "5/2024 - 6/2024", title: "Web Developer Intern (Onsite) – Al Aaroui Municipality", description: "Developed 'Daribati', a web application for municipal tax calculations. Built frontend with HTML, CSS, and JavaScript, and backend logic using PHP and integrated databases for data management. Ensured smooth communication between frontend and backend components." }
  ];

  return (
    <div id="body" className="bg-light">
      {/* Navbar with scroll effect */}
      <Navbar expand="lg" fixed="top" className={isScrolled ? "navbar-scrolled" : "navbar-transparent"}>
        <Container>
          <Navbar.Brand href="#home" className="d-flex align-items-center">
            <span className="brand-line"></span>
            <span className="brand-name">FZC</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#services">Services</Nav.Link>
               <Nav.Link href="#experience">Experience</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#contact" className="nav-contact-btn">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Home Section */}
      <section id="home" className="home-section">
        <Container>
          <Row className="align-items-center min-vh-80">
  {/* Image column first on mobile, second on desktop */}
  <Col 
    lg={5} 
    className="home-image text-center order-1 order-lg-2"
  >
    <div className="image-container">
      <img 
        src="portfolioimg.webp" 
        alt="Fatima Zahra Charroud" 
        className="profile-image mb-2"
        loading="lazy" 
      />
      <div className="image-overlay"></div>
    </div>
  </Col>

  {/* Text column second on mobile, first on desktop */}
  <Col 
    lg={7} 
    className="home-content order-2 order-lg-1"
  >
    <div className="intro-text">
      <h6 className="text-uppercase text-primary mb-3">Web & Mobile Developer • Software Engineering Student</h6>
      <h1 className="animated-name mb-4">Charroud Fatima Zahra</h1>
      <p className="lead mb-4">
        Passionate about building responsive web and mobile applications, integrating seamless front-end experiences with powerful back-end systems using React, React native, Flutter, Node.js, Express, and MySQL/MongoDB. </p>
      <div className="social-icons mb-4">
        <a href="https://www.linkedin.com/in/fatima-zahra-charroud-a657812a5/" className="social-link">
          <FaLinkedin size={24} />
        </a>
        <a href="https://github.com/fatimazahracharroud" className="social-link">
          <FaGithub size={24} />
        </a>
      </div>
      <Button href="#projects" className="btn-primary me-3">
        View My Work
      </Button>
      <Button href="#contact" variant="outline-primary">
        Contact Me
      </Button>
    </div>
  </Col>
</Row>

        </Container>
      </section>

      {/* About Section */}
      <section id="about" className="section-py bg-white">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center">
              <h2 className="section-title mb-5">About Me</h2>
              <p className="about-text mb-5">
               I am Charroud Fatima Zahra, a Web & Mobile Developer experienced in creating full-stack applications for both web and mobile platforms. Skilled in front-end development with React and Flutter, and back-end technologies including Node.js, Express & Nest.js, and MySQL/MongoDB. Passionate about crafting intuitive user interfaces, efficient architectures, and scalable solutions through teamwork and continuous learning. Here, you can explore my skills, projects, and professional journey.         </p>
              <Button 
                href="CV-fatimaZahraCHARROUD.pdf" 
                download 
                className="btn-download"
              >
                Download My CV
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Section */}
<section id="services" className="section-py bg-light">
  <Container className="text-center">
    <h2 className="text-center section-title mb-5">Services I Offer</h2>
    <p className="text-center mb-5 lead">
      Full-Stack Web & Mobile Development solutions — from intuitive front-ends to scalable back-ends.
    </p>

    <Row>
      {/* Frontend Development */}
      <Col lg={6} className="mb-4">
        <Card className="service-card h-100">
          <Card.Body>
            <div className="d-flex align-items-center mb-3">
              <div className="service-icon me-2">
                <i className="fas fa-laptop-code"></i>
              </div>
              <Card.Title>Frontend Development</Card.Title>
            </div>
            <ul className="service-list text-start">
              <li>Responsive web interfaces with React</li>
              <li>Cross-platform mobile apps with React Native and Flutter</li>
              <li>UI/UX optimization for performance & accessibility</li>
            </ul>
          </Card.Body>
        </Card>
      </Col>

      {/* Backend Development & APIs */}
      <Col lg={6} className="mb-4">
        <Card className="service-card h-100">
          <Card.Body>
            <div className="d-flex align-items-center mb-3">
              <div className="service-icon me-2">
                <i className="fas fa-code"></i>
              </div>
              <Card.Title>Backend Development & APIs</Card.Title>
            </div>
            <ul className="service-list text-start">
              <li>Design and build RESTful APIs with Node.js & Express</li>
              <li>Integrate third-party APIs (payments, maps, mail, etc.)</li>
              <li>Implement secure authentication (JWT, OAuth2, SSO)</li>
            </ul>
          </Card.Body>
        </Card>
      </Col>

      {/* Database Design & Management */}
      <Col lg={6} className="mb-4">
        <Card className="service-card h-100">
          <Card.Body>
            <div className="d-flex align-items-center mb-3">
              <div className="service-icon me-2">
                <i className="fas fa-database"></i>
              </div>
              <Card.Title>Database Design & Management</Card.Title>
            </div>
            <ul className="service-list text-start">
              <li>Relational (MySQL) & NoSQL (MongoDB) databases</li>
              <li>Schema design, data validation, and optimization</li>
              <li>Business logic & error handling implementation</li>
            </ul>
          </Card.Body>
        </Card>
      </Col>

      {/* E-Commerce Systems */}
      <Col lg={6} className="mb-4">
        <Card className="service-card h-100">
          <Card.Body>
            <div className="d-flex align-items-center mb-3">
              <div className="service-icon me-2">
                <i className="fas fa-shopping-cart"></i>
              </div>
              <Card.Title>E-Commerce Solutions</Card.Title>
            </div>
            <ul className="service-list text-start">
              <li>Product catalogs, cart, and checkout systems</li>
              <li>Payment integrations (Stripe, PayPal)</li>
              <li>Order & inventory management dashboards</li>
            </ul>
          </Card.Body>
        </Card>
      </Col>

      {/* Dashboards & CMS */}
      <Col lg={6} className="mb-4">
        <Card className="service-card h-100">
          <Card.Body>
            <div className="d-flex align-items-center mb-3">
              <div className="service-icon me-2">
                <i className="fas fa-cogs"></i>
              </div>
              <Card.Title>Dashboards & CMS</Card.Title>
            </div>
            <ul className="service-list text-start">
              <li>Admin panels to manage content and users</li>
              <li>Analytics & reporting systems</li>
              <li>Custom role-based access controls</li>
            </ul>
          </Card.Body>
        </Card>
      </Col>

      {/* Real-Time Features */}
      <Col lg={6} className="mb-4">
        <Card className="service-card h-100">
          <Card.Body>
            <div className="d-flex align-items-center mb-3">
              <div className="service-icon me-2">
                <i className="fas fa-comment-alt"></i>
              </div>
              <Card.Title>Real-Time Features</Card.Title>
            </div>
            <ul className="service-list text-start">
              <li>Live chat & notifications using Socket.io</li>
              <li>Email, SMS, and push notification systems</li>
            </ul>
          </Card.Body>
        </Card>
      </Col>

      {/* Monitoring & Maintenance */}
      <Col lg={6} className="mb-4">
        <Card className="service-card h-100">
          <Card.Body>
            <div className="d-flex align-items-center mb-3">
              <div className="service-icon me-2">
                <i className="fas fa-chart-line"></i>
              </div>
              <Card.Title>Monitoring & Maintenance</Card.Title>
            </div>
            <ul className="service-list text-start">
              <li>Performance optimization and debugging</li>
              <li>Error tracking & logging</li>
              <li>System and database performance tuning</li>
            </ul>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
</section>


      {/* Skills Section */}
<section id="skills" className="section-py bg-white">
  <Container className="text-center">
    <h2 className="section-title text-center mb-5">Technical Skills</h2>
    <Row>

      {/* Backend Development */}
      <Col md={4} className="mb-4">
        <Card className="skill-card">
          <Card.Body className="text-center">
            <div className="skill-icon mb-4">
              <i className="fas fa-server"></i>
            </div>
            <Card.Title>Backend Development</Card.Title>
            <div className="skills-list">
              {[
                'Node.js',
                'Express.js',
                'Nest.js',
                'PHP',
                'RESTful APIs',
                'Authentication (JWT, OAuth2)',
                'MVC Architecture'
              ].map((skill, index) => (
                <div key={index} className="skill-item">
                  <FaCheckCircle className="text-primary me-2" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </Card.Body>
        </Card>
      </Col>

      {/* Databases & Tools */}
      <Col md={4} className="mb-4">
        <Card className="skill-card">
          <Card.Body className="text-center">
            <div className="skill-icon mb-4">
              <i className="fas fa-database"></i>
            </div>
            <Card.Title>Databases & Tools</Card.Title>
            <div className="skills-list">
              {[
                'MySQL',
                'PostgreSQL',
                'MongoDB',
                'Postman',
                'Jest',
                'SuperTest',
                'Git & GitHub',
              ].map((skill, index) => (
                <div key={index} className="skill-item">
                  <FaCheckCircle className="text-primary me-2" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </Card.Body>
        </Card>
      </Col>

      {/* Frontend & Mobile Development */}
      <Col md={4} className="mb-4">
        <Card className="skill-card">
          <Card.Body className="text-center">
            <div className="skill-icon mb-4">
              <i className="fas fa-laptop-code"></i>
            </div>
            <Card.Title>Frontend & Mobile Development</Card.Title>
            <div className="skills-list">
              {[
                'React.js',
                'React Native',
                'Flutter',
                'HTML',
                'CSS / Bootstrap',
                'JavaScript / TypeScript',
                'Responsive Design'
              ].map((skill, index) => (
                <div key={index} className="skill-item">
                  <FaCheckCircle className="text-primary me-2" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>

    
    {/* Soft Skills Section */}
    <Row className="mt-5">
      <Col className="text-center">
        <h3 className="mb-4">Soft Skills</h3>
        <div className="d-flex flex-wrap justify-content-center">
          {['Teamwork', 'Problem-solving', 'Fast adaptability', 'Communication', 'Time management'].map((skill, index) => (
            <div key={index} className="soft-skill-pill me-3 mb-2">
              {skill}
            </div>
          ))}
        </div>
      </Col>
    </Row>
  </Container>

 
</section>

 {/* Education Section */}
<section id="education" className="section-py bg-light">
  <Container className="text-center">
    <Row className="justify-content-center">
      <Col lg={10}>
        <h2 className="section-title  text-center mb-5">
          <FaGraduationCap className="me-2" /> Education
        </h2>
        <div className="education-timeline">
          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <div className="d-flex justify-content-between flex-column flex-md-row">
                <h4>Software Engineering </h4>
                <span className="timeline-date">2025-Present</span>
              </div>
              <p className="text-muted mb-0">Ecole Nationale d'IA et de Digital, Berkane (ENIADB)</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <div className="d-flex justify-content-between flex-column flex-md-row">
                <h4>DUT - Web and Mobile Application Development</h4>
                <span className="timeline-date">2023-2025</span>
              </div>
              <p className="text-muted mb-0">Ecole Supérieure de Technologie, Nador (ESTN)</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <div className="d-flex justify-content-between flex-column flex-md-row">
                <h4>Baccalaureate in Physical Sciences</h4>
                <span className="timeline-date">2022-2023</span>
              </div>
              <p className="text-muted mb-0">Lycee Ibn Al Haytham, Al Aaroui</p>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  </Container>
</section>

{/* Experience Section */}
<section id="experience" className="section-py bg-white">
  <Container className="text-center">
    <Row className="justify-content-center">
      <Col lg={10}>
        <h2 className="section-title  text-center mb-5">
          <FaBriefcase className="me-2" /> Experience
        </h2>
        <div className="experience-timeline">
          {timelineItems.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="d-flex justify-content-between flex-column flex-md-row">
                  <h4>{item.title}</h4>
                  <span className="timeline-date">{item.period}</span>
                </div>
                <div className="text-muted"><ul className="text-start">
  {item.description
    .split('.')
    .filter(sentence => sentence.trim() !== '')
    .map((sentence, i) => (
      <li key={i}>{sentence.trim()}.</li>
  ))}
</ul></div>
              </div>
            </div>
          ))}
        </div>
      </Col>
    </Row>
  </Container>
</section>

 

      {/* Projects Section */}
      <section id="projects" className="section-py bg-light">
        <Container className="text-center">
          <h2 className="section-title   mb-5">Projects</h2>
          <Row>
            {[
              
              {
                title: "Allo Nadafa: Cleaning Service Booking Application",
                description: "Allo Nadafa is a cleaning service booking application that allows users to schedule cleaning services and enables admins to manage bookings and service providers.",
                tech: "ReactJS, Node.js/Express, Mongodb ,REST APIs",
                image: "allonadafa.png",
                link: "https://github.com/fatimaZahraCHARROUD/Cleaning-dynamic",
                date: 2025
              },
              
              {
                title: "ShopEase: E-commerce Management System",
                description: "E-commerce and delivery management system with web app for order management and mobile apps for customers and delivery personnel.",
                tech: "ReactJS, Flutter/Dart, Node.js/Express, MySQL",
                image: "shopease.webp",
                link: "https://github.com/fatimaZahraCHARROUD/PFE_admin",
                date: 2025
              },
              {
                title: "DARIBATI: Municipal Tax Management System",
                description: "System allowing local communities to manage and calculate municipal taxes.",
                tech: " HTML, CSS, JS, PHP, MySQL",
                image: "daribati.webp",
                link: "https://github.com/fatimaZahraCHARROUD/DARIBATI",
                date: 2024
              },
              {
                title: "Knowledge University: University Management Platform",
                description: "Platform for managing students, teachers, programs, requests, grades and courses.",
                tech: " HTML, CSS, JS, PHP, MySQL",
                image: "school.webp",
                link: "https://github.com/fatimaZahraCHARROUD/appscolaire",
                date: 2024
              },
              {
                title: "Hôtel Luxe: Hotel Management System",
                description: "Management of bookings, rooms and customers for a hotel establishment.",
                tech: "Java, JEE, JSP, EJB, JDBC, MySQL",
                image: "hotel.webp",
                link: "https://github.com/fatimaZahraCHARROUD/Hotel",
                date: 2024
              }
            ].map((project, index) => (
              <Col md={6} lg={4} className="mb-4" key={index}>
                <Card className="project-card h-100">
                  <div className="project-image">
                    <Card.Img variant="top" src={project.image}  alt={project.title} loading="lazy" />
                    <div className="project-overlay">
                      <Button href={project.link} target="_blank" className="project-btn">
                        View Project
                      </Button>
                    </div>
                  </div>
                  <Card.Body>
                    <Card.Title>{project.title}</Card.Title>
                      {/* ✅ Add date here */}
      <small className="text-muted d-block mb-2">{project.date}</small>
      
                    <Card.Text>{project.description}</Card.Text>
                    <div className="project-tech">
                      <small>{project.tech}</small>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-py bg-white">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center">
              <h2 className="section-title mb-4">Get In Touch</h2>
              <p className="mb-5">Feel free to contact me for collaboration or to learn more about my work.</p>
              <div className="contact-links">
                <a href="mailto:fatimazahracharroud92@gmail.com" className="contact-link">
                  <FaEnvelope size={24} />
                  <span>Email</span>
                </a>
                <a href="https://wa.me/212776653648" className="contact-link">
                  <FaWhatsapp size={24} />
                  <span>WhatsApp</span>
                </a>
                <a href="https://www.linkedin.com/in/fatima-zahra-charroud-a657812a5/" className="contact-link">
                  <FaLinkedin size={24} />
                  <span>LinkedIn</span>
                </a>
                <a href="https://github.com/fatimazahracharroud" className="contact-link">
                  <FaGithub size={24} />
                  <span>GitHub</span>
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Footer */}
      <footer className="footer py-4">
        <Container>
          <Row>
            <Col className="text-center">
              <p className="mb-0">© {new Date().getFullYear()} Charroud Fatima Zahra. All rights reserved.</p>
            </Col>
          </Row>
        </Container>
      </footer>

        
     </div>
  );
};

export default App;