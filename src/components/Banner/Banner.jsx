/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useRef } from 'react';
import './Banner.css';

function convertToEmbedUrl(url) {
  const urlObj = new URL(url);
  const videoId = urlObj.searchParams.get('v');
  return `https://www.youtube.com/embed/${videoId}`;
}

const Banner = () => {
  const [video, setVideo] = useState(null);
  const iframeRef = useRef(null);

  useEffect(() => {
    fetch(`http://localhost:3001/videos`)
      .then(response => response.json())
      .then(data => {
        const allVideos = data;
        const randomVideo = allVideos[Math.floor(Math.random() * allVideos.length)];
        setVideo({
          ...randomVideo,
          url: convertToEmbedUrl(randomVideo.url)
        });
      })
      .catch(error => console.error("Error fetching videos:", error));
  }, []);

  useEffect(() => {
    if (!iframeRef.current) return;

    const iframe = iframeRef.current;
    const iframeWindow = iframe.contentWindow;

    const handlePlayPause = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          iframeWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
        } else {
          iframeWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
        }
      });
    };

    const observer = new IntersectionObserver(handlePlayPause, {
      threshold: 0.5,
    });

    observer.observe(iframe);

    return () => {
      observer.disconnect();
    };
  }, [iframeRef.current]);

  return video ? (
    <div className="banner">
      <div className='banner-text'>
      <div className="banner-title">{video.titulo}</div>
      <div className="video-info">
      <p>{video.descripcion}</p>
      </div>
      </div>
      <iframe
        ref={iframeRef}
        className="banner-video"
        src={`${video.url}?enablejsapi=1&autoplay=1&mute=1`} 
        title={video.titulo}
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default Banner;
