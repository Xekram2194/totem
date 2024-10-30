import React from 'react';
import logo from '../assets/logo.png'; // Ruta hacia la imagen

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Universidad Andina del Cusco" className="logo" />
      <nav className="nav">
        <ul>
          <li><a href="#inicio">INICIO</a></li>
          <li><a href="#universidad">UNIVERSIDAD</a></li>
          <li><a href="#admission">ADMISIÓN</a></li>
          <li><a href="#pregrado">PREGRADO</a></li>
          <li><a href="#posgrado">POSGRADO</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

