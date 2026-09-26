import { apiClient } from './apiClient';

export function getMaterials() {
  return apiClient('/api/materials');
}
