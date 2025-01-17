import React from 'react';
import { Link } from 'react-router-dom';

const Layout2 = ({ children, isLogout }) => {
  return (
    <div className="flex flex-col min-h-screen bg-sky-100">
      <header className="bg-blue-600 text-white p-7">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link to="/" className="text-5xl font-bold italic pointer-events-none">ULINK</Link>
          {!isLogout && ( // Solo muestra los botones si no estás en Logout
            <div className="flex items-center space-x-4">
              <Link
                to="/UserProfile"
                className="flex items-center text-lg font-bold text-white border border-white rounded-lg px-4 py-2 hover:bg-blue-700 transition-colors"
              >
                Perfil
              </Link>
              <Link
                to="/logout"
                className="flex items-center text-lg font-bold text-white border border-white bg-red-600 rounded-lg px-4 py-2 hover:bg-red-700 transition-colors"
              >
                Salir
              </Link>
            </div>
          )}
        </div>
      </header>
      <main className="flex-grow">
        {children}
      </main>
      <footer className="bg-blue-600 text-white text-center p-6">
        <p>Desarrollado por estudiantes UTEM</p>
        <p>tallersistemasdesoftware@utem.cl / Teléfono (---) --- --- ---</p>
        <p>&copy; 2024 ULINK. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Layout2;
