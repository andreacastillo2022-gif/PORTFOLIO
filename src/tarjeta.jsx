import { useState } from "react";

function ProjectCard({ title, description, image, link }) {
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

      <div
        className="project-shine"
        style={{
          background: `radial-gradient(
            circle at ${shine.x}% ${shine.y}%,
            rgba(255,255,255,0.45),
            transparent 35%
          )`,
        }}
      />

      <div className="project-image">
        <img src={image} alt={`Preview de ${title}`} />
      </div>

      <div className="project-info">
        <h3>{title}</h3>

        <p>{description}</p>

        <a href={link} target="_blank" rel="noreferrer">
          Ver proyecto →
        </a>
      </div>

    </div>
  );
}

export default ProjectCard;