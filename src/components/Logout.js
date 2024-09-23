import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout2 from './Layout2'; 
import imagen2 from '../imagen/imagen2.png';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    console.log('Sesión cerrada');
  }, []);

  const handleRedirectToLogin = () => {
    navigate('/login'); // Cambia aquí la ruta a '/login'
  };

  return (
    <Layout2 isLogout={true}>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <img
          src={imagen2}
          alt="Descripción de la imagen"
          className="mb-4 w-1/3 h-auto"
        />
        <h2 className="text-3xl font-bold mb-4">Has cerrado sesión</h2>
        <p className="mb-4">Gracias por usar ULINK. Esperamos verte pronto.</p>
        <button
          onClick={handleRedirectToLogin}
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          Volver al inicio
        </button>
      </div>
    </Layout2>
  );
};

export default Logout;
