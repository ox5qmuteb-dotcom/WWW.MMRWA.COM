import { apiClient } from './apiClient';

export function getReports() {
  return apiClient('/api/reports');
}
