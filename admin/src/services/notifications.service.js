import { apiClient } from './apiClient';

export function getNotifications() {
  return apiClient('/api/notifications');
}
