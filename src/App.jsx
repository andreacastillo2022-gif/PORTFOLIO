import { useState } from 'react'
import './App.css'

function App() {
  

  return (
    <>

      <header>
        <nav>
          <ul>
            <li><a href="#presentation">Presentación</a></li>
            <li><a href="#sobremi">Sobre mi</a></li>
            <li><a href="#projects">Proyectos</a></li>
            <li><a href="#contact">Contacto</a></li>
          </ul>
        </nav>
      </header>

      <section classname="acercade" id="presentation">
        <div classname="acercade-texto">
          <h1>Mi nombre es Andrea</h1>
          <span classname="tag">SOBRE MÍ</span>
          <p>Empecé en el desarrollo web en 2025, me apasiona la programación y aprender nuevas tecnologías.
            Activamente estudiando React y trabajando en proyectos personales para mi portfolio.
            Me gusta crear cosas y ver si funcionan, mejorando mis habilidad y uso de la creatividad.
            No solo las diplomaturas me enseñaron lo que sé, sino tambien mi curiosidad constante.
          </p>
          <p>Si te interesa el trabajo creativo y el constante aprendizaje, no dudes en contactarme! </p>
        </div>

        <div classname="acercade-foto">
          <div classname="decoración-foto"></div>
          <img src="./src/assets/andrea.jpg" alt="Foto de andrea" />
        </div>
      </section>

    </>
    
    
      )}

export default App
