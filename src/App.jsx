import './App.css';
import andrea from "./assets/andrea.jpg";
import "./navbar.css";
import { BiSolidSmile } from "react-icons/bi";
import { FaHandshake } from "react-icons/fa6";
import { LiaCertificateSolid } from "react-icons/lia";
import { PiGearSixBold } from "react-icons/pi";
import ProjectCard from "./tarjeta";
import color from "./assets/color.png";
import "./tarjeta.css";

function App() {
  

  return (
    <>
      <header>
        <nav>
          <ul className="nav">
            <li>
            <a href="#sobremi">
              <i className='contenedor-i'><BiSolidSmile /></i>
              <div className="circle"></div>
              <div className ="titulos">Sobre mi</div>
            </a>
            </li>

            <li>
            <a href="#projects">
              <i className='contenedor-i'><PiGearSixBold /></i>
              <div className="circle"></div>
              <div class ="titulos">Projectos</div>
            </a>
            </li>

            <li>
            <a href="#certificados">
              <i className='contenedor-i'><LiaCertificateSolid /></i>
              <div className="circle"></div>
              <div className ="titulos">certificados</div>
            </a>
            </li>

            <li>
            <a href="#contacto">
              <i className='contenedor-i'><FaHandshake /></i>
              <div className="circle"></div>
              <div className ="titulos">contacto</div>
            </a>
            </li>
            
          </ul>
        </nav>
      </header>

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


        </div><p id='seguí'>Seguí bajando para ver mis proyectos!</p>
      
      </section>

  
    <section className="projects">

      <h2>Mis proyectos</h2>

      <div className="projects-grid">

      <ProjectCard
        title="Selector de colores"
        description="Una herramienta para obtener códigos de colores."
        image={color}
      />

      <ProjectCard
        title="Juego Atari"
        description="Mi primer juego desarrollado con JavaScript."
      />

      <ProjectCard
        title="Portfolio"
        description="Mi portfolio personal desarrollado con React."
      />

      </div>

    </section>

    </>
    
    
      )}

export default App
