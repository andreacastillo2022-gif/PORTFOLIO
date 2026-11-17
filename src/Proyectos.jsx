
import { useState } from "react";
import ProjectCard from "./tarjeta";
import color from "./assets/color.png";
import "./tarjeta.css";

function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);

  const projects = [
    {
      title: "Selector de colores",
      description: `Con esta herramienta podrás encontrar todas las combinaciones de colores existentes.
      Ideal para artistas que necesiten la teoria del color para crear sus mejores obras`,
      type: "React - Typescript",
      image: color,
      className: "carta-color",
    },
    {
      title: "Asteroids (1979)",
      description: `Mi primer desarrollo con JavaScript.
      Lorem ipsum dolor sit amet consectetur adipiscing elit tempor, cubilia condimentum tincidunt urna sed dictum tortor`,
      type: "JavaScript - Html",
      className: "juego-atari",
    },
    {
      title: "Portfolio",
      description: "Mi portfolio personal desarrollado con React.",
      type: "proyecto - 3",
      className: "proyecto-3",
    },
  ];

  const nextProject = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setActiveIndex((prev) => 
      (prev - 1 + projects.length) % projects.length
    );
  };

  return (


    <div className="projects-section">
  
      <div className="projects-carrusel">

        <button
          className="carrusel-flecha izquierda"
          onClick={prevProject}
          aria-label="Proyecto anterior"
        >
        ❮
        </button>

        <div className="carrusel-ventana">
          <div
            className="carrusel-pista"
            style={{
              transform: `translateX(-${activeIndex * 100}%)`,
            }}
          >
            {projects.map((project, index) => (
              <div className="carrusel-slide" key={index}>
                <div className="project-mini">
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    type={project.type}
                    image={project.image}
                    className={project.className}
                    mini
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          className="carrusel-flecha derecha"
          onClick={nextProject}
          aria-label="Proyecto siguiente"
        >
          ❯
        </button>

        <div className="carrusel-puntos">
          {projects.map((_, index) => (
            <button
              key={index}
              className={`carrusel-punto ${
                activeIndex === index ? "active" : ""
              }`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Ir al proyecto ${index + 1}`}
              aria-current={activeIndex === index ? "true" : undefined}
            />
          ))}
        </div>

      </div>
    </div>
  );
}

export default Projects;
