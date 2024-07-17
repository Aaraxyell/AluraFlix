import { useState } from 'react';
import './VideoForm.css';

const VideoForm = () => {
  const [titulo, setTitulo] = useState('');
  const [categoria, setCategoria] = useState('');
  const [video, setVideo] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!titulo || !categoria || !video) {
      alert('Todos los campos excepto descripción son obligatorios.');
      return;
    }

    const nuevoVideo = {
      id: String(Date.now()), // Convertir el id a una cadena
      titulo,
      url: video,
      descripcion,
      categoria
    };

    try {
      const response = await fetch('http://localhost:3001/videos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(nuevoVideo),
      });

      if (!response.ok) {
        throw new Error('Error al guardar el video');
      }

      const data = await response.json();
      console.log('Video guardado:', data);

      setTitulo('');
      setCategoria('');
      setVideo('');
      setDescripcion('');
    } catch (error) {
      console.error('Error al guardar el video:', error);
    }
  };

  const handleClear = () => {
    setTitulo('');
    setCategoria('');
    setVideo('');
    setDescripcion('');
  };

  return (
    <div className="form-container">
      <h1>NUEVO VIDEO</h1>
      <h2>COMPLETE EL FORMULARIO PARA CREAR UNA NUEVA TARJETA DE VIDEO</h2>
      <form className="video-form" onSubmit={handleSubmit}>
        <div className="form-field">
          <label>Título</label>
          <input
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            placeholder="Ingrese el título"
            required
          />
        </div>
        <div className="form-field">
          <label>Categoría</label>
          <select
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            required
          >
            <option value="" disabled>Seleccione una categoría</option>
            <option value="Video Juegos">Video Juegos</option>
            <option value="Ciencia">Ciencia</option>
            <option value="Paranormal">Paranormal</option>
          </select>
        </div>
        <div className="form-field">
          <label>
            Video
          </label>
          <input
            type="text"
            value={video}
            onChange={(e) => setVideo(e.target.value)}
            placeholder="Ingrese el enlace del video"
            required
          />
        </div>
        <div className="form-field">
          <label>Descripción</label>
          <textarea
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            placeholder="¿De qué se trata este video?"
          ></textarea>
        </div>
        <div className="form-buttons">
          <button type="submit">Guardar</button>
          <button type="button" onClick={handleClear}>Limpiar</button>
        </div>
      </form>
    </div>
  );
};

export default VideoForm;