INSERT INTO permissions (name, slug, description)
VALUES
  ('Manage Users', 'manage-users', 'Create/update/delete users'),
  ('Manage Roles', 'manage-roles', 'Manage roles and permissions'),
  ('Manage Materials', 'manage-materials', 'Manage educational materials'),
  ('Manage Categories', 'manage-categories', 'Manage material categories'),
  ('Manage Lessons', 'manage-lessons', 'Manage lessons'),
  ('Manage Files', 'manage-files', 'Upload and remove files'),
  ('View Reports', 'view-reports', 'Access reports'),
  ('View Audit Logs', 'view-audit-logs', 'Access audit trail')
ON CONFLICT (slug) DO NOTHING;
