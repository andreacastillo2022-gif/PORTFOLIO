import { useState } from "react";

function ProjectCard({ title, description }) {

  const [transform, setTransform] = useState("");

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
      <h3>{title}</h3>
      <p>{description}</p>

      <button>Ver proyecto</button>
    </div>
  );
}

export default ProjectCard;