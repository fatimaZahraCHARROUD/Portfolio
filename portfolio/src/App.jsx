import React from "react";
import { Container, Navbar, Nav,Col, Row, Card, Button,Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {FaBriefcase,FaGraduationCap,FaCheckCircle, FaLink,FaArrowRight, FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { useState } from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";

 
const App = () => {
  const education = [
    { year: "2022 - 2023", title: "Baccalauréat scientifique physique et chimie " ,local:" Lycée ibn al haytham-al aroui"},
    { year: "2023 - present", title: "École Supérieure de Technologie de Nador" ,local:"2ème année développeur d'app web & mobile " },
   ];

  const experience = [
    { year: "5/2024 - 6/2024", title: "Stage d'Initiation et realisation d’un site web" , desc:"Lors de mon premier stage d'initiation à la commune d'Al Aroui, j'ai découvert le fonctionnement administratif et les processus de gestion interne d'une collectivité locale. En parallèle, j'ai développé mon premier projet. Daribati, une application web permettant de calculer les différentes taxes, en utilisant HTML, CSS, JavaScript et PHP, renforçant ainsi mes compétences en développement web et en logique de programmation " }];
  

   
  
    const timelineItems = [
      {
        title: "Stage d'Initiation et realisation d’un site web",
        period: '(5/2024 - 6/2024)',
        description: "Lors de mon premier stage d'initiation à la commune d'Al Aroui, j'ai découvert le fonctionnement administratif et les processus de gestion interne d'une collectivité locale. En parallèle, j'ai développé mon premier projet, 'Daribati', une application web permettant de calculer les différentes taxes, en utilisant HTML, CSS, JavaScript et PHP, renforçant ainsi mes compétences en développement web et en logique de programmation",
       }
    ];

    
    return (
      <div 
      id="body" 
      style={{
        fontFamily:"cirial", 
        paddingLeft:"100px", 
        paddingRight:"80px", 
        margin:"0"
      }} 
      className="bg-light responsive-body"
    >       {/* Navbar */}
      <Navbar expand="lg">
  <Container>
    <Navbar.Brand href="#home">
      <hr className="responsive-hr" />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <Nav.Link href="#about">À Propos d </Nav.Link>
        <Nav.Link href="#skills">Compétences</Nav.Link>
        <Nav.Link href="#experience">Expérience</Nav.Link>
        <Nav.Link href="#projects">Projets</Nav.Link>

        <Nav.Link href="#contact" style={{ backgroundColor: "black", color: "white", padding: "8px 15px", borderRadius: "5px" }}>
          Contact
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>

  {/* CSS pour   la réactivité */}
  <style jsx global>{`
  /* Animation Keyframes */
  @keyframes typing {
    from { width: 0 }
    to { width: 100% }
  }

  @keyframes blink-caret {
    from, to { border-color: transparent }
    50% { border-color: black }
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  /* Desktop Screens - Animation Enabled */
  @media (min-width: 992px) {
    .animated-name {
      color: black;
      font-weight: bold;
      font-family: 'cirial', sans-serif;
      display: inline-block;
      overflow: hidden;
      white-space: nowrap;
      margin: 0 auto;
      letter-spacing: 0.1em;
      border-right: 3px solid black;
      
      font-size: 3rem;
      animation: 
        typing 3s steps(40, end),
        blink-caret 0.75s step-end infinite,
        fadeIn 2s ease-out;
    }
  }

  /* Mobile and Tablet Screens - Simple Display */
  @media (max-width: 991px) {
    .animated-name {
      color: black;
      font-weight: bold;
      font-family: 'cirial', sans-serif;
      font-size: 2rem;
      text-align: center;
      letter-spacing: 0.05em;
      animation: none;
    }
  }

  /* Comprehensive Responsive Styles */
  @media (max-width: 768px) {
    .responsive-body {
      padding-left: 15px !important;
      padding-right: 15px !important;
    }

    /* Navbar Responsiveness */
    .navbar-collapse {
      max-height: 80vh;
      overflow-y: auto;
    }

    /* Home Section Responsiveness */
    #home .row {
      flex-direction: column-reverse;
      text-align: center;
    }

    #home h1 {
      font-size: 2rem !important;
      text-align: center;
    }

    #home p {
      text-align: center;
    }

    #home .text-center {
      margin-bottom: 20px;
    }

    /* About Section Responsiveness */
    #about .container {
      padding: 20px !important;
    }

    #about p {
      text-align: justify;
    }

    /* Skills Section Responsiveness */
    #skills .card {
      margin-bottom: 20px;
    }

    .tools-list,
    .skills-list,
    .frameworks-list {
      flex-direction: column;
    }

    .tool-item,
    .skill-item,
    .framework-item {
      width: 100%;
    }

    /* Experience and Education Section */
    .timeline-container {
      margin-bottom: 30px;
    }

    /* Projects Section */
    #projects .card {
      margin-bottom: 20px;
    }

    /* Contact Section */
    #contact .d-flex {
      flex-wrap: wrap;
      justify-content: center;
    }

    #contact a {
      margin: 10px !important;
    }
  }

  /* Very Small Devices */
  @media (max-width: 375px) {
    .animated-name {
      font-size: 1.8rem;
    }
  }
`}</style>
</Navbar>

<br/><br/>  

      {/* Home */}
      <Container className="py-5" id="home" style={{ width: "100%" }}>
  <Row className="align-items-center">
    {/* Colonne pour le texte */}
    <Col xs={12} md={7}>
    <h1 className="animated-name">
              Charroud Fatima Zahra
            </h1>
      <h4>Full Stack Developer</h4>
      <p>
        Je suis Charroud Fatima Zahra, une développeuse Full Stack passionnée par la création d'applications web et mobiles.
        Mon objectif est de concevoir des solutions innovantes et performantes qui répondent aux besoins des utilisateurs.
        Vous trouverez ici une présentation de mes compétences, de mes projets réalisés et de mon parcours professionnel.
        N'hésitez pas à me contacter pour toute collaboration ou pour en savoir plus sur mes projets.
      </p>
      <div><br />
        <a href="https://www.linkedin.com/in/fatima-zahra-charroud-a657812a5/" className="mx-2 text-dark"><FaLinkedin size={30} /></a>
        <a href="https://github.com/fatimazahracharroud" className="mx-2 text-dark"><FaGithub size={30} /></a>
      </div>
    </Col>

    {/* Colonne pour l'image */}
    <Col xs={12} md={3} className="text-center">
  <img
    src="portfolioimg.png"
    alt="Fatima Zahra Charroud"
    className="responsive-img"  // Applique la classe pour l'image responsive
  />
</Col>

{/* CSS pour ajuster la taille de l'image sur les téléphones */}
<style jsx>{`
  .responsive-img {
    width:400px; /* L'image prend 100% de la largeur du conteneur */
    height: auto; /* Laissez la hauteur s'ajuster automatiquement pour maintenir les proportions */
  }

  /* Media query pour ajuster l'image sur les petits écrans (téléphones) */
  @media (max-width: 768px) {
    .responsive-img {
      width: 80%; /* Réduit la largeur de l'image sur les écrans de téléphone */
      height: auto; /* Conserve les proportions de l'image */
    }
  }
`}</style>

  </Row>
</Container>

<div id="about"><br/><br/><br/><br/><br/> 




      {/* About Me */}
     <Container className="py-5 shadow" style={{ width: "100%" }}>
  <h2 className="text-center">À Propos de Moi</h2>
  <br /><br />
  <p>
    Je suis Charroud Fatima Zahra, une développeuse Full Stack passionnée par le développement web et mobile.
    Titulaire d'un Bac en 2023 et actuellement en formation pour devenir développeuse d'applications web et mobiles à l'ESTN,
    je m'efforce de toujours apprendre et de m'améliorer dans mon domaine. Mon parcours m'a permis d'acquérir des compétences solides en
    développement front-end et back-end, et de travailler sur des projets concrets qui allient performance et innovation.
  </p>
  <p>
    J'aime relever des défis techniques et créer des applications intuitives et efficaces. Ma curiosité et ma soif d'apprendre me poussent
    à explorer constamment les nouvelles technologies pour répondre aux besoins des utilisateurs et optimiser les solutions proposées.
  </p>
  <p>
    En dehors du développement, je suis également intéressée par la gestion de projets et le travail en équipe, car je crois que la collaboration
    est essentielle pour créer des produits de qualité.
  </p>
  <p>
    <a href="CV-fatimaZahraCHARROUD.pdf" download className="btn" style={{ backgroundColor: "black", color: "white" }}>
      Télécharger mon CV
    </a>
  </p>
</Container>

      </div>
      <br/><br/><br/><br/><br/><br/> 

 


      {/* Skills */}
      <Container id="skills" className="py-5 "  style={{width:"100%"}} >
  <h2 className="text-center">Compétences techniques</h2><br /><br />
  <Row>
    <Col md={4} className="mb-4">
      <Card className="shadow card-equal-height">
        <Card.Body>
          <Card.Title>Outils et Technologies</Card.Title><br />
          <div className="tools-list">
            <div className="tool-item">
              <FaCheckCircle style={{ marginRight: '10px' }} />
              <span>Git</span>
            </div>
            <div className="tool-item">
              <FaCheckCircle style={{ marginRight: '10px' }} />
              <span>GitHub</span>
            </div>
            <div className="tool-item">
              <FaCheckCircle style={{ marginRight: '10px' }} />
              <span>Postman</span>
            </div>
          
            <div className="tool-item">
              <FaCheckCircle style={{ marginRight: '10px' }} />
              <span>MySQL</span>
            </div>
            <div className="tool-item">
              <FaCheckCircle style={{ marginRight: '10px' }} />
              <span>Agile SCRUM</span>
            </div>
            <br /><br /><br />
          </div>
        </Card.Body>
      </Card>
    </Col>

    <Col md={4} className="mb-4">
      <Card className="shadow card-equal-height">
        <Card.Body>
          <Card.Title>Langages de programmation</Card.Title><br />
          <div className="skills-list">
            <div className="skill-item">
              <FaCheckCircle style={{ marginRight: '10px' }} />
              <span>JavaScript</span>
            </div>
            <div className="skill-item">
              <FaCheckCircle style={{ marginRight: '10px' }} />
              <span>PHP</span>
            </div>
            <div className="skill-item">
              <FaCheckCircle style={{ marginRight: '10px' }} />
              <span>Java</span>
            </div>
            <div className="skill-item">
              <FaCheckCircle style={{ marginRight: '10px' }} />
              <span>C/C++</span>
            </div>

            <div className="skill-item">
              <FaCheckCircle style={{ marginRight: '10px' }} />
              <span>C#</span>
            </div> 
            <div className="skill-item">
              <FaCheckCircle style={{ marginRight: '10px' }} />
              <span>Vb.net</span>
            </div>
            <div className="skill-item">
              <FaCheckCircle style={{ marginRight: '10px' }} />
              <span>Dart</span>
            </div><br />
          </div>
        </Card.Body>
      </Card>
    </Col>

    <Col md={4} className="mb-4">
      <Card className="shadow card-equal-height">
        <Card.Body>
          <Card.Title>Frameworks et Libraries</Card.Title><br />
          <div className="frameworks-list">
            <div className="framework-item">
              <FaCheckCircle style={{ marginRight: '10px' }} />
              <span>ReactJS</span>
            </div>
            <div className="framework-item">
              <FaCheckCircle style={{ marginRight: '10px' }} />
              <span>Node.js</span>
            </div>
            <div className="framework-item">
              <FaCheckCircle style={{ marginRight: '10px' }} />
              <span>Express</span>
            </div>
            <div className="framework-item">
              <FaCheckCircle style={{ marginRight: '10px' }} />
              <span>Flutter</span>
            </div>
            <div className="framework-item">
              <FaCheckCircle style={{ marginRight: '10px' }} />
              <span>Laravel</span>
            </div>
            <div className="framework-item">
              <FaCheckCircle style={{ marginRight: '10px' }} />
              <span>Bootstrap</span>
            </div>
            <div className="framework-item">
              <FaCheckCircle style={{ marginRight: '10px' }} />
              <span>JEE</span>
            </div>
            <div className="framework-item">
              <FaCheckCircle style={{ marginRight: '10px' }} />
              <span>.NET</span>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  </Row>
  

  <style>{`
    .card-equal-height {
      height: 100%; /* Pour que toutes les cartes aient la même hauteur */
    }

    .tools-list,
    .skills-list,
    .frameworks-list {
      display: flex;
      flex-wrap: wrap;
      gap: 10px; /* Espacement entre les éléments */
    }

    .tool-item,
    .skill-item,
    .framework-item {
      display: flex;
      align-items: center;
      width: 48%; /* Chaque élément prend 48% de la largeur, donc 2 éléments par ligne */
      margin-bottom: 10px;
    }

    .tool-item span,
    .skill-item span,
    .framework-item span {
      font-size: 16px;
    }

    @media (max-width: 768px) {
      .tool-item,
      .skill-item,
      .framework-item {
        width: 100%; /* Sur les petits écrans, chaque élément prend 100% de la largeur */
      }
    }
  `}</style>
</Container>
<br/><br/><br/>
<div className="container py-5" id="experience">
  <style jsx>{`
    .timeline-container {
      max-width: 600px;
      margin: 0 auto;
    }

    .timeline-wrapper::before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 15px;
      width: 2px;
      background-color: rgb(244, 240, 239);
    }

    .timeline-item {
      padding-left: 40px;
      position: relative;
    }

    .timeline-item::before {
      content: '';
      position: absolute;
      left: 15px;
      top: 0;
      width: 10px;
      height: 10px;
      background-color: #DCA79F;
      border-radius: 50%;
      transform: translateX(-50%);
    }
  `}</style>

  <div className="row">
    {/* Education Section */}
    <div className="col-md-6 timeline-container">
      <h2 className="mb-4 "> <i className="fas fa-graduation-cap me-2"></i>Education</h2>
      <div className="timeline-wrapper position-relative">
        {/* estn */}
        <div className="timeline-item position-relative mb-4">
          <div className="timeline-content">
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="mb-1">École Supérieure de Technologie de Nador</h5>
              <small className="text-muted">(2023-present)</small>
            </div>
            <p className="text-muted mb-2">
            2ème année développeur d'app web &            mobile            </p>
            {/* <span className="badge bg-primary">Diploma in Computer Engineering</span> */}
          </div>
        </div>
        
        {/* lycee*/}
        <div className="timeline-item position-relative mb-4">
          <div className="timeline-content">
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="mb-1">Lycée ibn al haytham-al aroui</h5>
              <small className="text-muted">(2022-2023)</small>
            </div>
            <p className="text-muted mb-2">
            Baccalauréat scientifique physique et chimie            </p>
            {/* <span className="badge bg-primary">BSc in CSE</span> */}
          </div>
        </div>
        
       
      </div>
    </div>
    
    {/* Experience Section */}
    <div className="col-md-6 timeline-container">
      <h2 className="mb-4 "> <i className="fas fa-briefcase me-2"></i>Experience</h2>
      <div className="timeline-wrapper position-relative">
        {timelineItems.map((item, index) => (
          <div key={index} className="timeline-item position-relative mb-4">
            <div className="timeline-content">
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="mb-1">{item.title}</h5>
                <small className="text-muted">{item.period}</small>
              </div>
              <p className="text-muted mb-2">
                {item.description}
              </p>
              {/* <span className="badge bg-primary">{item.badge}</span> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>

    <br/><br/>



      {/* Projects */}
      <Container id="projects" className="py-5">
  <h2 className="text-center mb-5">Projets Réalisés</h2>
  <Row>
    <Col md={4} className="mb-4">
      <Card className="d-flex flex-column h-100">
        <Card.Img variant="top" src="daribati.png" />
        <Card.Body className="d-flex flex-column">
          <Card.Title>DARIBATI: Système permettant aux collectivités locales de gérer et calculer les taxes communales.
</Card.Title>
          <Card.Text>HTML, CSS, JS, PHP , MySQL</Card.Text>
          <a href="https://github.com/fatimaZahraCHARROUD/DARIBATI" target="_blank" rel="noopener noreferrer" className="btn   mt-auto">Voir sur GitHub</a>
        </Card.Body>
      </Card>
    </Col>
    <Col md={4} className="mb-4">
      <Card className="d-flex flex-column h-100">
        <Card.Img variant="top" src="school.png" />
        <Card.Body className="d-flex flex-column">
          <Card.Title>Knowledge University: Plateforme de gestion universitaire des étudiants, enseignants, filières, demandes, notes et cours.</Card.Title>
          <Card.Text>HTML, CSS, JS, PHP , MySQL</Card.Text>
          <a href="https://github.com/fatimaZahraCHARROUD/appscolaire" target="_blank" rel="noopener noreferrer" className="btn   mt-auto">Voir sur GitHub</a>
        </Card.Body>
      </Card>
    </Col>
    <Col md={4} className="mb-4">
      <Card className="d-flex flex-column h-100">
        <Card.Img variant="top" src="hotel.png" />
        <Card.Body className="d-flex flex-column">
          <Card.Title>Hôtel Luxe: Gestion des réservations, chambres et clients pour un établissement
hôtelier.
</Card.Title>
          <Card.Text>Java, JEE, JSP, EJB, JDBC , MySQL</Card.Text>
          <a href="https://github.com/fatimaZahraCHARROUD/Hotel" target="_blank" rel="noopener noreferrer" className="btn   mt-auto">Voir sur GitHub</a>
        </Card.Body>
      </Card>
    </Col>
    <Col md={4} className="mb-4">
      <Card className="d-flex flex-column h-100">
        <Card.Img variant="top" src="shopease.png" />
        <Card.Body className="d-flex flex-column">
          <Card.Title>ShopEase:Systeme de gestion e-commerce et de livraison avec une app web pour la gestion des commandes, produits, stocks et clients, et 2 app mobile offrant une interface pour les clients et livreurs.</Card.Title>
          <Card.Text>ReactJS, Node.js/Express, Flutter/Dart , MySQL</Card.Text>
          <a href="https://github.com/fatimaZahraCHARROUD/PFE_admin" target="_blank" rel="noopener noreferrer" className="btn  mt-auto"> Voir sur GitHub</a>
        </Card.Body>
      </Card>
    </Col>
  </Row>
</Container>


<Container id="contact" className="py-5">
  <Row className="text-center">
    {/* Liens de réseaux sociaux */}
    <Col>
    <h5 className="responsive-text">
  ________________________Contactez-nous_________________________
</h5>

{/* CSS pour rendre le texte responsive */}
<style jsx>{`
  .responsive-text {
    width: 100%;  /* Permet au texte de s'adapter à la largeur du conteneur */
    text-align: center;  /* Centre le texte */
    font-size: 1.25rem;  /* Ajuste la taille de la police, vous pouvez changer cela */
  }

  /* Masquer la ligne sur les petits écrans (max-width: 768px pour téléphones) */
  @media (max-width: 768px) {
    .responsive-text {
      display: none;
    }
  }
`}</style>
    <div className="d-flex justify-content-center">
        <a href="mailto:faticharroud321@gmail.com" className="mx-3" style={{ textDecoration: "none", color: "black" }}>
          <FaEnvelope size={30} />
        </a>
        <a href="https://wa.me/212776653648" className="mx-3" style={{ textDecoration: "none", color: "black" }}>
          <FaWhatsapp size={30} />
        </a>
        <a href="https://www.linkedin.com/in/fatima-zahra-charroud-a657812a5/" className="mx-3" style={{ textDecoration: "none", color: "black" }}>
          <FaLinkedin size={30} />
        </a>
        <a href="https://github.com/fatimazahracharroud" className="mx-3" style={{ textDecoration: "none", color: "black" }}>
          <FaGithub size={30} />
        </a>
         
      </div>
    </Col>
  </Row>

  <Row className="text-center mt-4">
    <Col>
      <p style={{ fontSize: "14px" }}>© {new Date().getFullYear()} Tous droits réservés</p>
    </Col>
  </Row>
</Container>
    </div> 
  );
};

export default App;
