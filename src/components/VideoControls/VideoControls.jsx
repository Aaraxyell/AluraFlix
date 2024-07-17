import "./VideoControls.css";

const VideoControls = ({ video, onEdit, onDelete, borderColor }) => {
  const getBorderStyles = (title) => {
    switch (title) {
      case "Video Juegos":
        return {
          borderTopColor: "#4B0082", // Cambiado a morado oscuro
          borderTopWidth: "4px",
          borderTopStyle: "solid",
          boxShadow: "0 4px 8px rgba(75, 0, 130, 0.7)" // Morado oscuro
        };
      case "Ciencia":
        return {
          borderTopColor: "#1E90FF", 
          borderTopWidth: "4px",
          borderTopStyle: "solid",
          boxShadow: "0 4px 8px rgba(30, 144, 255, 0.7)" 
        };
      case "Paranormal":
        return {
          borderTopColor: "#32CD32", 
          borderTopWidth: "4px",
          borderTopStyle: "solid",
          boxShadow: "0 4px 8px rgba(50, 205, 50, 0.7)" 
        };
      default:
        return {
          borderTopColor: "#DDD", 
          borderTopWidth: "4px",
          borderTopStyle: "solid",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" 
        };
    }
  };

  const borderStyles = getBorderStyles(borderColor);

  const handleEdit = () => {
    onEdit(video);
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:3001/videos/${video.id}`, {
        method: "DELETE"
      });

      if (!response.ok) {
        throw new Error("Error al eliminar el video");
      }

      onDelete(video.id);
    } catch (error) {
      console.error("Error al eliminar el video:", error);
    }
  };

  return (
    <div className="video-controls" style={{ ...borderStyles }}>
      <button onClick={handleDelete}>
        <span className="icon-delete"><img src="/public/img/delete.svg" alt="Icono de Borrar" /></span>
        Borrar
      </button>
      <button onClick={handleEdit}>
        <span className="icon-edit"><img src="/public/img/edit.svg" alt="Icono de Editar" /></span>
        Editar
      </button>
    </div>
  );
};

export default VideoControls;
