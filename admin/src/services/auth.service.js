import { apiClient } from './apiClient';

export function login(payload) {
  return apiClient('/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
}
