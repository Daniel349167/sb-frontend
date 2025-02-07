import api from './api';

export async function getAllEntities() {
  const response = await api.get('/api/governmententity');
  return response.data;
}

export async function getEntityById(id) {
  const response = await api.get(`/api/governmententity/${id}`);
  return response.data;
}

export async function createEntity(entityData) {
  const response = await api.post('/api/governmententity', entityData);
  return response.data;
}

export async function updateEntity(id, entityData) {
  const response = await api.put(`/api/governmententity/${id}`, entityData);
  return response.data;
}

export async function deleteEntity(id) {
  const response = await api.delete(`/api/governmententity/${id}`);
  return response.data;
}
