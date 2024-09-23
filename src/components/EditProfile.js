import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EditProfile = () => {
  const navigate = useNavigate();

  const [profileData, setProfileData] = useState({
    image: null,
    firstName: 'Constanza',
    lastName: 'Martinez',
    email: 'cony.anais.martinex@gmail.com',
    dateOfBirth: '2002-01-03',
    gender: 'femenino',
    description: 'Soy un estudiante apasionado por la tecnología, que esta estudiando la carrera de Ingenieria en Informatica',
    academicHistory: 'Ingeniería en Informática, UTEM',
    careerStatus: 'Pregrado',
    interests: 'Desarrollo web, Inteligencia Artificial',
    isSearchActive: true,
  });

  const handleInputChange = (field, value) => {
    setProfileData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileData((prevData) => ({
          ...prevData,
          image: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveChanges = () => {
    // Aquí puedes implementar el almacenamiento o la llamada a la API
    console.log('Datos del perfil guardados:', profileData);
    navigate('/UserProfile'); // Redirige a la vista de perfil después de guardar
  };

  return (
    <main className="flex-grow">
      <div className="max-w-6xl mx-auto p-4">
        <div className="bg-white shadow-md rounded-lg flex">
          {/* Columna izquierda: Imagen y Datos personales */}
          <div className="w-1/3 p-4 border-r border-gray-200">
            {/* Imagen */}
            <div className="mb-4 flex justify-center">
              <label className="cursor-pointer">
                <div className="w-40 h-40 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center overflow-hidden bg-gray-100">
                  {profileData.image ? (
                    <img src={profileData.image} alt="avatar" className="w-full h-full object-cover" />
                  ) : (
                    <div className="flex flex-col items-center justify-center">
                      <span className="w-12 h-12 text-gray-400">📷</span>
                      <p className="mt-2 text-sm text-gray-500">Subir Foto</p>
                    </div>
                  )}
                </div>
                <input type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
              </label>
            </div>

            {/* Campos del perfil */}
            <h2 className="text-lg font-bold">Editar Información Personal</h2>
            {['firstName', 'lastName', 'email', 'dateOfBirth'].map((field) => (
              <div key={field} className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  {field === 'firstName' ? 'Nombres' :
                   field === 'lastName' ? 'Apellidos' :
                   field === 'email' ? 'Email' :
                   'Fecha de Nacimiento'}
                </label>
                <input
                  type={field === 'dateOfBirth' ? 'date' : 'text'}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  value={profileData[field]}
                  onChange={(e) => handleInputChange(field, e.target.value)}
                />
              </div>
            ))}

            {/* Campo de género */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Género</label>
              <select
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                value={profileData.gender}
                onChange={(e) => handleInputChange('gender', e.target.value)}
              >
                <option value="masculino">Masculino</option>
                <option value="femenino">Femenino</option>
                <option value="no_binario">No Binario</option>
                <option value="prefiero_no_responder">Prefiero no responder</option>
              </select>
            </div>

            {/* Subir CV */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Sube tu CV:</label>
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                className="mt-1 block w-full text-sm text-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>

            {/* Búsqueda activa como interruptor */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-gray-700">Búsqueda Activa:</span>
              <span
                onClick={() => handleInputChange('isSearchActive', !profileData.isSearchActive)}
                className={`inline-flex items-center h-6 rounded-full w-11 cursor-pointer ${profileData.isSearchActive ? 'bg-blue-600' : 'bg-gray-200'}`}
              >
                <span
                  className={`inline-block w-4 h-4 transform bg-white rounded-full transition duration-300 ease-in-out ${profileData.isSearchActive ? 'translate-x-5' : 'translate-x-1'}`}
                />
              </span>
            </div>
          </div>

          {/* Columna derecha: Educación, Intereses Laborales y Descripción Personal */}
          <div className="w-2/3 p-4">
            <h2 className="text-lg font-bold">Educación</h2>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Historial Académico:</label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                value={profileData.academicHistory}
                onChange={(e) => handleInputChange('academicHistory', e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Nivel de Estudios:</label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                value={profileData.careerStatus}
                onChange={(e) => handleInputChange('careerStatus', e.target.value)}
              />
            </div>

            <h2 className="text-lg font-bold mt-4">Intereses Laborales</h2>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700"></label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                value={profileData.interests}
                onChange={(e) => handleInputChange('interests', e.target.value)}
              />
            </div>

            <h2 className="text-lg font-bold mt-4">Descripción Personal</h2>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700"></label>
              <textarea
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                value={profileData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
              />
            </div>

            {/* Botón para guardar cambios */}
            <div className="flex justify-end mt-4">
              <button
                onClick={handleSaveChanges}
                className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Guardar Cambios
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default EditProfile;
