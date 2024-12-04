// src/App.tsx

import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Importa Routes y Route para el enrutamiento
import Home from './pages/home';
import ProjectDetails from './Components/ProjectDetail';
import MoreInfo from './pages/ more-info';

const App: React.FC = () => {
  return (
    <Routes> {/* Define tus rutas aquí */}
      <Route path="/" element={<Home />} /> {/* Ruta para la página de inicio */}
      <Route path="/projects/:id" element={<ProjectDetails />} /> {/* Ruta dinámica para detalles del proyecto */}
      <Route path="/more-info" element={<MoreInfo />} />
    </Routes>
  );
};

export default App;
