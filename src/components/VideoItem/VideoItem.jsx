import { useState } from 'react';
import VideoControls from '../VideoControls/VideoControls';
import VideoEdit from '../VideoEdit/VideoEdit';
import './VideoItem.css';

const VideoItem = ({ video, sectionTitle, onSave }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:3001/videos/${video.id}`, {
        method: "DELETE"
      });
      window.location.reload();

      if (!response.ok) {
        throw new Error("Error al eliminar el video");
      }

    } catch (error) {
      console.error("Error al eliminar el video:", error);
    }
  };

  const borderStyles = {
    borderTopColor: '#DDD', // Gris por defecto
    borderTopWidth: '4px',
    borderTopStyle: 'solid',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Sombra predeterminada
  };

  return (
    <div className="video-item" style={borderStyles}>
      <div className="video-frame-container">
        <iframe
          src={`${video.url}?enablejsapi=1`}
          title={video.titulo}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="video-frame"
        />
      </div>
      <VideoControls
        video={video}
        onEdit={handleEdit}
        onDelete={handleDelete} // Pasar el manejo de eliminación aquí
        borderColor={sectionTitle}
      />
      {isEditing && (
        <VideoEdit
          video={video}
          onSave={onSave} // Pasar la función onSave aquí
          onClose={() => setIsEditing(false)}
        />
      )}
    </div>
  );
};

export default VideoItem;
