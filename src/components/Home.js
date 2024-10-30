import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const navigate = useNavigate();

  const handleInfoClick = () => {
    navigate('/info');
  };

  return (
    <div className="home-container">
      <video autoPlay loop className="background-video">
        <source src="/frontal.mp4" type="video/mp4" />
        Tu navegador no soporta el elemento de video.
      </video>
      <div className="video-overlay"></div> {/* Capa oscura sobre el video */}
      <div className="overlay">
        <button className="info-button" onClick={handleInfoClick}>
          DIRECCION DE SERVICIOS ACADEMICOS
        </button>
      </div>
    </div>
  );
}

export default Home;
