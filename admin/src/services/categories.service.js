import { apiClient } from './apiClient';

export function getCategories() {
  return apiClient('/api/categories');
}
