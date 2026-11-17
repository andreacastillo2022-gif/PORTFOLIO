import './home.css';
import andrea from "./assets/andrea.jpg";
import "./navbar.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FileFind3, Msnp32FolderIcon, Awfxcg321304 } from "@react95/icons";
import Projects from "./Proyectos.jsx";
import './tarjeta.css';
import Contacto from "./contacto.jsx";

function Home() {

//*que la ventana se mueva*//  
const [aboutOpen, setAboutOpen]= useState(true);
const [projectsOpen, setProjectsOpen] = useState(false);
const [contactOpen, setContactOpen] = useState(false);


//*que se mueva proyectos*//
const [projectsPosition, setProjectsPosition] = useState({
  x: 350,
  y: 120
});
const [projectsDragging, setProjectsDragging] = useState(false);
const [projectsOffset, setProjectsOffset] = useState({
  x: 0,
  y: 0
});

//*que se mueva aboutme*//
const [position, setPosition] = useState({
  x: 250,
  y: 80
});
const [dragging, setDragging] = useState(false);
const [offset, setOffset] = useState({
  x: 0,
  y: 0
});

//* que se mueva contacto *//
const [contactPosition, setContactPosition] = useState({
  x: 450,
  y: 150
});
const [contactDragging, setContactDragging] = useState(false);
const [contactOffset, setContactOffset] = useState({
  x: 0,
  y: 0
});


useEffect(() => {
  const handleMouseMove = (e) => {
    if (dragging){

    setPosition({
      x: e.clientX - offset.x,
      y: e.clientY - offset.y
    });}

    if (projectsDragging) {
    setProjectsPosition({
      x: e.clientX - projectsOffset.x,
      y: e.clientY - projectsOffset.y
      });
    }

     if (contactDragging) {
    setContactPosition({
      x: e.clientX - contactOffset.x,
      y: e.clientY - contactOffset.y
      });
    }
};

  const handleMouseUp = () => {
  setDragging(false);
  setProjectsDragging(false);
  setContactDragging(false);
  };

  window.addEventListener("mousemove", handleMouseMove);
  window.addEventListener("mouseup", handleMouseUp);

return () => {
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", handleMouseUp);
  };
}, [dragging, offset, projectsDragging,projectsOffset, contactDragging, contactOffset]);


return (

  <main className="desktop">
    <>
      <div className="desktop-icons">

          <button
            className="desktop-icon"
            onClick={() => setProjectsOpen(true)}>
            <Msnp32FolderIcon variant="32x32_4"/>
            <span>Proyectos</span>
          </button>

          <Link className="desktop-icon" to="/projects">
            <FileFind3 variant="32x32_4"/>
            <span>Certificados</span>
          </Link>

          <button
            className="desktop-icon"
            onClick={() => setContactOpen(true)}>
            <Awfxcg321304 variant="32x32_4"/>
            <span>Contacto</span>
          </button>

          <button
            className="desktop-icon"
            onClick={() => setAboutOpen(true)}>
            <Awfxcg321304 variant="32x32_4"/>
            <span>Sobre Mí</span>
          </button>

        </div>
 
    {aboutOpen&& (
      <div className="window about-window" 
      style={{
      left: `${position.x}px`,
      top: `${position.y}px`}}

      onMouseDown={(e) => {
      setDragging(true);
      setOffset({
        x: e.clientX - position.x,
        y: e.clientY - position.y});}}>

  
        <div className="window-titlebar">
          <span>👤 Sobre mí</span>

          <div className="window-buttons">
            <button>_</button>
            <button>□</button>
            <button onClick={() => setAboutOpen(false)}>×</button>
            </div>
      </div>


      <section className="acercade" id="presentation">

        <div className="acercade-texto">
          <h1>Andrea Agustina Castillo</h1>
          <span className="tag">SOBRE MÍ</span>
          <p>Empecé en el desarrollo web en 2025, me apasiona la programación y aprender nuevas tecnologías.<br />
            Actualmente trabajando en proyectos personales para mi portfolio personal.
            Me gusta crear cosas y ver si funcionan, mejorando mi habilidad y uso de la creatividad; Aprovechando al máximo mis conocimientos.
            No solo las diplomaturas me enseñaron lo que sé, sino tambien mi curiosidad constante.
          </p>
          <p>Si te interesa el trabajo creativo y el constante crecimiento, no dudes en contactarme! </p>
        </div>

        

        <div className="acercade-foto" onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();

            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const rotateX = ((y / rect.height) - 0.5) * -12;
            const rotateY = ((x / rect.width) - 0.5) * 12;

          e.currentTarget.style.transform = `
          perspective(800px)
          rotateX(${rotateX}deg)
          rotateY(${rotateY}deg)
          translateY(-8px)
          `;
          }}

          onMouseEnter={(e) => {
          e.currentTarget.classList.add("brillo");
          }}

          onMouseLeave={(e) => {
            e.currentTarget.style.transform = `
            perspective(800px)
            rotateX(0deg)
            rotateY(0deg)
            translateY(0)
            `;

            e.currentTarget.classList.remove("brillo");
            }}
            >

          <div className="decoración-foto"></div>
          <img src={andrea} alt="Foto de Andrea" />

        </div>
      </section>
      </div>)}


{projectsOpen && (
      <div className="projects-window" style={{
        left: `${projectsPosition.x}px`,
        top: `${projectsPosition.y}px`}}>

      <div className="window-titlebar"onMouseDown={(e) =>{setProjectsDragging(true); setProjectsOffset({
          x: e.clientX - projectsPosition.x,
          y: e.clientY - projectsPosition.y
          });
          }}>

          <span>📁 Proyectos</span>

          <div className="window-buttons">

              <button onMouseDown={(e) => e.stopPropagation()} onClick={() => setProjectsOpen(false)}>_</button>
              <button onMouseDown={(e) => e.stopPropagation()} onClick={() => setProjectsOpen(false)}>□</button>
              <button onMouseDown={(e) => e.stopPropagation()} onClick={() => setProjectsOpen(false)}>×</button>
          </div>
        </div>

        <div className="projects-content">
             <Projects />
        </div>

      </div>
)}

{contactOpen && (
  <div
    className="contact-window"
    style={{
      left: `${contactPosition.x}px`,
      top: `${contactPosition.y}px`
    }}
  >
    <div
      className="window-titlebar"
      onMouseDown={(e) => {
        setContactDragging(true);
        setContactOffset({
          x: e.clientX - contactPosition.x,
          y: e.clientY - contactPosition.y
        });
      }}
    >
      <span>✉ Contacto</span>

      <div className="window-buttons">
        <button onMouseDown={(e) => e.stopPropagation()}
          onClick={() => setContactOpen(false)}>_</button>

        <button onMouseDown={(e) => e.stopPropagation()}
          onClick={() => setContactOpen(false)}>□</button>

        <button onMouseDown={(e) => e.stopPropagation()}
          onClick={() => setContactOpen(false)}>×</button>
      </div>
    </div>

    <div className="contact-content">
      <Contacto />
    </div>
  </div>
)}

      <div className="taskbar">
          <button className="start-button">
            🪟 Start
          </button>

          <div className="taskbar-time">
            21:00
          </div>
      </div>

  </>
  </main>
)}
export default Home