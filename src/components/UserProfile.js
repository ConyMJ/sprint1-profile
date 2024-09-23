import React from 'react';
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {
  const navigate = useNavigate();
  const profileData = {
    image: null,
    firstName: '',
    lastName: '',
    email: '',
    dateOfBirth: '',
    gender: '',
    description: '',
    academicHistory: '',
    careerStatus: '',
    interests: '',
    isSearchActive: true,
  };

  return (
    <main className="flex-grow">
      <div className="max-w-6xl mx-auto p-4">
        <div className="bg-white shadow-md rounded-lg flex">
          {/* Columna izquierda: Imagen, Datos personales, CV y búsqueda activa */}
          <div className="w-1/3 p-4 border-r border-gray-200">
            {/* Imagen */}
            <div className="mb-4 flex justify-center">
              <div className="w-40 h-40 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center overflow-hidden bg-gray-100">
                {profileData.image ? (
                  <img src={profileData.image} alt="avatar" className="w-full h-full object-cover" />
                ) : (
                  <div className="flex flex-col items-center justify-center">
                    <span className="w-12 h-12 text-gray-400">📷</span>
                    <p className="mt-2 text-sm text-gray-500">Sin imagen</p>
                  </div>
                )}
              </div>
            </div>

            {/* Datos del perfil */}
            <h2 className="text-lg font-bold">Información Personal</h2>
            <p><strong>Nombres:</strong> {profileData.firstName}</p>
            <p><strong>Apellidos:</strong> {profileData.lastName}</p>
            <p><strong>Email:</strong> {profileData.email}</p>
            <p><strong>Fecha de Nacimiento:</strong> {profileData.dateOfBirth}</p>
            <p><strong>Género:</strong> {profileData.gender}</p>

            {/* Subida de CV visible pero deshabilitada */}
            <div className="mb-4 mt-4">
              <label className="block text-sm font-medium text-gray-700">Sube tu CV:</label>
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                disabled // Deshabilitar el input
                className="mt-1 block w-full text-sm text-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 bg-gray-100 cursor-not-allowed"
              />
              <p className="text-sm text-gray-400">Este campo no está disponible para modificar.</p>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">Búsqueda Activa:</span>
              <span className={`inline-flex items-center h-6 rounded-full w-11 ${profileData.isSearchActive ? 'bg-blue-600' : 'bg-gray-200'}`}>
                <span className={`inline-block w-4 h-4 transform bg-white rounded-full ${profileData.isSearchActive ? 'translate-x-6' : 'translate-x-1'}`} />
              </span>
            </div>
          </div>

          {/* Columna derecha: Educación, Intereses Laborales y Descripción Personal */}
          <div className="w-2/3 p-4">
            {/* Sección de educación, intereses laborales y descripción personal */}
            <h2 className="text-lg font-bold">Educación</h2>
            <p><strong>Historial Académico:</strong> {profileData.academicHistory}</p>
            <p><strong>Nivel de Estudios:</strong> {profileData.careerStatus}</p>

            <h2 className="text-lg font-bold mt-4">Intereses Laborales</h2>
            <p>{profileData.interests}</p>

            <h2 className="text-lg font-bold mt-4">Descripción Personal</h2>
            <p>{profileData.description}</p>

            {/* Botón para editar perfil alineado a la derecha en la parte inferior */}
            <div className="flex justify-end mt-4">
              <button
                onClick={() => navigate('/EditProfile')}
                className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Editar Perfil
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default UserProfile;
