import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from './Card';
import './InfoPage.css';
import useInactivityRedirect from '../hooks/useInactivityRedirect'; // Importamos el hook
import logo from '../assets/logo.png'; // Ruta hacia la imagen

function InfoPage() {
//   useInactivityRedirect(60000); // Redirigir al Home después de 1 minuto de inactividad
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

    // Arreglo con los datos de cada tarjeta
    const cardData = [
        {
          title: "Guía de matrícula 2024-II",
          description: "La matrícula es la inscripción oficial de un estudiante en un programa educativo",
          url: "https://www.uandina.edu.pe/guia-matricula/"
        },
        {
          title: "Dispensa de Semestre",
          description: "Los estudiantes regulares que por diversos motivos no pueden continuar con sus estudios, podrán realizar la Dispensa de Estudios",
          url: "https://www.uandina.edu.pe/descargas/documentos/dsa/guia-dispensa-semestre-pregrado-050424.pdf"
        },
        {
          title: "RETIRO DE 1 A 3 ASIGNATURAS",
          description: "Los estudiantes matriculados en el semestre vigente, que de forma voluntaria quieran retirarse de una (01) o hasta tres (03) asignaturas",
          url: "https://www.uandina.edu.pe/descargas/documentos/dsa/guia-retiro-1a3-asignaturas-05042024.pdf"
        },
        {
          title: "REINICIO DE ESTUDIOS",
          description: "Los estudiantes que NO han sido separados de la UAC por desaprobar una misma asignatura tres veces (trica) y deseen realizar su reinicio de estudios",
          url: "https://www.uandina.edu.pe/descargas/documentos/dsa/guia-reinicio-estudios-pregrado-030123.pdf"
        },
        {
          title: "CONVALIDACIÓN DE ASIGNATURAS",
          description: "Los estudiantes ingresantes o regulares que deseen solicitar convalidación de asignaturas",
          url: "https://www.uandina.edu.pe/descargas/documentos/dsa/guia-convalidacion-pregrado-1072023.pdf"
        },
        {
          title: "Constancias y Certificados",
          description: "Los estudiantes ingresantes o regulares que deseen solicitar constancias y certificados",
          url: "https://www.uandina.edu.pe/tramites-digitales/"
        },
        // Aquí puedes agregar más tarjetas si lo necesitas
      ];

  return (
    <div className="info-page">
      <div className="logo-container">
        <img src={logo} alt="Universidad Andina del Cusco" className="logo"  onClick={handleLogoClick}/>
      </div>
      <main>
        <section className="section">
            {cardData.map((card, index) => (
                <Card 
                key={index} 
                title={card.title} 
                description={card.description} 
                url={card.url} 
                />
          ))}
        </section>
      </main>
    </div>
  );
}

export default InfoPage;
