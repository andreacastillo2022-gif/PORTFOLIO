import ProjectCard from "./tarjeta";
import color from "./assets/color.png";
import "./tarjeta.css";

function Projects() {

return( 
 <div>

      <h2 className="titulo_dos">Mis proyectos</h2>

      <div className="projects-grid">

      <ProjectCard
        title="Selector de colores"
        description="Con esta herramienta podrás encontrar todas las combinaciones de colores existentes.
        Ideal para artistas que necesiten la teoria del color para crear sus mejores obras"
        type= "React - Typescript"
        image={color}
        className= "carta-color"
      />

      <ProjectCard
        title="Asteroids (1979)"
        description="Mi primer desarrollo con JavaScript.
        Lorem ipsum dolor sit amet consectetur adipiscing elit tempor, cubilia condimentum tincidunt urna sed dictum tortor"
        type=" JavaScript - Html"
        className= "juego-atari"
      />

      <ProjectCard
        title="Portfolio"
        description="Mi portfolio personal desarrollado con React."
      />

      </div>

    </div>
)    
}

export default Projects;