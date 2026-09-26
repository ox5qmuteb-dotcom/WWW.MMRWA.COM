import { apiClient } from './apiClient';

export function getAuditLogs() {
  return apiClient('/api/audit-logs');
}
