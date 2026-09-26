import { apiClient } from './apiClient';

export function getPermissions() {
  return apiClient('/api/permissions');
}
