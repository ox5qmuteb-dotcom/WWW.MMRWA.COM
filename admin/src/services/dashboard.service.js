import { apiClient } from './apiClient';

export function getDashboard() {
  return apiClient('/api/dashboard');
}
