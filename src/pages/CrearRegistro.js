import React, { useState } from 'react';
import { createEntity } from '../services/governmentEntity';
import { useNavigate } from 'react-router-dom';

export default function CrearRegistro() {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newEntity = { nombre, descripcion };
      await createEntity(newEntity);
      alert('Registro creado exitosamente');
      navigate('/consulta');
    } catch (error) {
      console.error(error);
      alert('Error al crear el registro');
    }
  };

  return (
    <div>
      <h1>Crear Nueva Entidad Gubernamental</h1>
      <form onSubmit={handleSubmit} style={{ marginTop: '1rem' }}>
        <div>
          <label>Nombre: </label>
          <input 
            type="text" 
            value={nombre} 
            onChange={e => setNombre(e.target.value)}
            required
          />
        </div>
        <div style={{ marginTop: '1rem' }}>
          <label>Descripción: </label>
          <input 
            type="text" 
            value={descripcion} 
            onChange={e => setDescripcion(e.target.value)}
            required
          />
        </div>
        <button type="submit" style={{ marginTop: '1rem' }}>Guardar</button>
      </form>
    </div>
  );
}
