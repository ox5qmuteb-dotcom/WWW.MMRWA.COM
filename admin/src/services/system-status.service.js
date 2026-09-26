import { apiClient } from './apiClient';

export function getSystemStatus() {
  return apiClient('/api/system-status');
}
