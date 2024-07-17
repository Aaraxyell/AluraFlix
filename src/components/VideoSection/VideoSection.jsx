import { useState, useEffect } from "react";
import VideoItem from "../VideoItem/VideoItem";
import "./VideoSection.css";

function convertToEmbedUrl(url) {
  const urlObj = new URL(url);
  const videoId = urlObj.searchParams.get('v');
  return `https://www.youtube.com/embed/${videoId}`;
}

const VideoSection = ({ title }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch(`http://localhost:3001/videos`);
        const data = await response.json();
        const filteredVideos = data.filter(video => video.categoria === title);
        const videosWithEmbedUrl = filteredVideos.map(video => ({
          ...video,
          url: convertToEmbedUrl(video.url)
        }));
        setVideos(videosWithEmbedUrl);
      } catch (error) {
        console.error("Error fetching videos:", error);
        setVideos([]);
      }
    };

    fetchVideos();
  }, [title]);

  const getColorForTitle = (title) => {
    switch (title) {
      case "Video Juegos":
        return "#4B0082"; // Morado oscuro
      case "Ciencia":
        return "#1E90FF"; // Azul
      case "Paranormal":
        return "#32CD32"; // Verde
      default:
        return "#DDD"; // Gris por defecto
    }
  };

  const backgroundColor = getColorForTitle(title);

  const handleSaveVideo = (updatedVideo) => {
    const updatedVideos = videos.map(video =>
      video.id === updatedVideo.id ? updatedVideo : video
    );
    setVideos(updatedVideos);
  };

  return (
    <div className="video-section-container">
      <h2 className="video-section-title" style={{ backgroundColor }}>{title}</h2>
      <div className="video-section">
        {videos.map((video) => (
          <VideoItem
            key={video.id}
            video={video}
            sectionTitle={title}
            onSave={handleSaveVideo} // Pasar la función onSave al VideoItem
          />
        ))}
      </div>
    </div>
  );
};

export default VideoSection;
