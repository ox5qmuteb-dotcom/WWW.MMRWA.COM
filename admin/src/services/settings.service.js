import { apiClient } from './apiClient';

export function getSettings() {
  return apiClient('/api/settings');
}
