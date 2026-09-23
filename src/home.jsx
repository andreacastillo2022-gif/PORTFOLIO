import './home.css';
import andrea from "./assets/andrea.jpg";
import "./navbar.css";
import { BiSolidSmile } from "react-icons/bi";
import { FaHandshake } from "react-icons/fa6";
import { LiaCertificateSolid } from "react-icons/lia";
import { PiGearSixBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";


function Home() {

//*que la ventana se mueva*//  
const [aboutOpen, setAboutOpen]= useState(true);
const [position, setPosition] = useState({
  x: 250,
  y: 80
});
const [dragging, setDragging] = useState(false);

const [offset, setOffset] = useState({
  x: 0,
  y: 0
});

useEffect(() => {
  const handleMouseMove = (e) => {
    if (!dragging) return;

    setPosition({
      x: e.clientX - offset.x,
      y: e.clientY - offset.y
    });
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  window.addEventListener("mousemove", handleMouseMove);
  window.addEventListener("mouseup", handleMouseUp);

return () => {
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", handleMouseUp);
  };
}, [dragging, offset]);


return (

  <main className="desktop">
    <>
        <div className="desktop-icons">

          <Link className="desktop-icon" to="/projects">
            <PiGearSixBold />
            <span>Proyectos</span>
          </Link>

          <Link className="desktop-icon" to="/projects">
            <LiaCertificateSolid />
            <span>Certificados</span>
          </Link>

          <Link className="desktop-icon" to="/contact">
            <FaHandshake />
            <span>Contacto</span>
          </Link>

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
          <button>Ir a Contacto </button> 
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