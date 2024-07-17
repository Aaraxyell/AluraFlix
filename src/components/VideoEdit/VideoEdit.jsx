import { useState, useEffect } from 'react';
import './VideoEdit.css';

function convertToNormalUrl(embedUrl) {
  const urlObj = new URL(embedUrl);
  const videoId = urlObj.pathname.split('/')[2];
  return `https://www.youtube.com/watch?v=${videoId}`;
}

const VideoEdit = ({ video, onSave, onClose }) => {
  const [titulo, setTitulo] = useState(video.titulo || '');
  const [categoria, setCategoria] = useState(video.categoria || '');
  const [videoUrl, setVideoUrl] = useState('');
  const [descripcion, setDescripcion] = useState(video.descripcion || '');

  useEffect(() => {
    setVideoUrl(convertToNormalUrl(video.url)); 
  }, [video.url]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedVideo = {
      ...video,
      titulo: titulo || video.titulo,
      url: videoUrl || video.url,
      descripcion: descripcion || video.descripcion,
      categoria: categoria || video.categoria
    };

    try {
      const response = await fetch(`http://localhost:3001/videos/${video.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedVideo),
      });

      if (!response.ok) {
        throw new Error('Error al actualizar el video');
      }

      const data = await response.json();
      console.log('Video actualizado:', data);
      onSave(data); 
      onClose(); 

      window.location.reload();
    } catch (error) {
      console.error('Error al actualizar el video:', error);
    }
  };

  const handleClear = () => {
    setTitulo('');
    setCategoria('');
    setVideoUrl('');
    setDescripcion('');
  };

  return (
    <div className="edit-form-container">
      <h1>EDITAR VIDEO:</h1>
      <form className="video-edit-form" onSubmit={handleSubmit}>
        <div className="form-field">
          <label>Título</label>
          <input
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            placeholder="Ingrese el título"
          />
        </div>
        <div className="form-field">
          <label>Categoría</label>
          <select
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
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
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
            placeholder="Ingrese el enlace del video"
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
          <button type="button" className="close-button" onClick={onClose}>X</button>
        </div>
      </form>
    </div>
  );
};

export default VideoEdit;
