import { apiClient } from './apiClient';

export function getLessons() {
  return apiClient('/api/lessons');
}
