import { useState } from "react";

function ProjectCard({ title, description, image, link, type = "WEB APP" }) {
  const [transform, setTransform] = useState("");
  const [shine, setShine] = useState({
    x: 50,
    y: 50,
  });

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    setTransform(
      `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`
    );

    setShine({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    });
  };

  const handleMouseLeave = () => {
    setTransform(
      "perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)"
    );
  };

  return (
    <div
      className="project-card"
      style={{ transform }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >

      {/* REFLEJO */}
      <div
        className="project-shine"
        style={{
          background: `radial-gradient(
            circle at ${shine.x}% ${shine.y}%,
            rgba(255,255,255,0.4),
            transparent 30%
          )`,
        }}
      />

      {/* NOMBRE */}
      <div className="card-header">
        <h3>{title}</h3>
        <span className="card-symbol">✦</span>
      </div>

      {/* IMAGEN */}
      <div className="project-image">

        <img
          src={image}
          alt={`Preview de ${title}`}
        />

        <div className="preview-overlay">
          <span>VER PROYECTO</span>
        </div>

      </div>

      {/* TIPO */}
      <div className="card-type">
        <span>{type}</span>
        <span>✦</span>
      </div>

      {/* DESCRIPCIÓN */}
      <div className="card-description">
        <p>{description}</p>
      </div>

      {/* FOOTER */}
      <div className="card-footer">
        <span>ANDY</span>
        <span>2026</span>
      </div>

      {/* LINK */}
      <a
        className="card-link"
        href={link}
        target="_blank"
        rel="noreferrer"
        aria-label={`Ver proyecto ${title}`}
      />

    </div>
  );
}

export default ProjectCard;