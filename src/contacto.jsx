
import { useState } from "react";
import "./contacto.css";

function Contacto() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const destinatario = "tucorreo@gmail.com";

    const cuerpo = `Nombre: ${form.nombre}
Email: ${form.email}
Asunto: ${form.asunto}
Mensaje:
${form.mensaje}`;

    const mailto = `mailto:${destinatario}?subject=${encodeURIComponent(
      form.asunto
    )}&body=${encodeURIComponent(cuerpo)}`;

    window.location.href = mailto;
  };


return (
    <div className="contact-page">
      <h1>Contacto</h1>
      <p className="pcontacto">¿Querés trabajar conmigo? ¡Escribime!</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre</label>
        <input
          id="nombre"
          type="text"
          name="nombre"
          placeholder="Tu nombre"
          value={form.nombre}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="tu@email.com"
          value={form.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="asunto">Asunto</label>
        <input
          id="asunto"
          type="text"
          name="asunto"
          placeholder="¿Sobre qué querés hablar?"
          value={form.asunto}
          onChange={handleChange}
          required
        />

        <label htmlFor="mensaje">Mensaje</label>
        <textarea
          id="mensaje"
          name="mensaje"
          placeholder="Contame tu idea..."
          value={form.mensaje}
          onChange={handleChange}
          rows="5"
          required
        />

        <button type="submit">Enviar mensaje</button>
      </form>
    </div>
  );
}

export default Contacto;
