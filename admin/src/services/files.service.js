import { apiClient } from './apiClient';

export function getFiles() {
  return apiClient('/api/files');
}
