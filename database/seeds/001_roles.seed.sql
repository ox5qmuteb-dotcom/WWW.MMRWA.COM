INSERT INTO roles (name, slug, description, is_system)
VALUES
  ('Super Admin', 'super-admin', 'Full access', TRUE),
  ('Admin', 'admin', 'Administrative access', TRUE),
  ('Editor', 'editor', 'Content editor', TRUE),
  ('User', 'user', 'Standard user', TRUE)
ON CONFLICT (slug) DO NOTHING;
