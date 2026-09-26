INSERT INTO system_settings (setting_key, setting_value, description, is_public)
VALUES
  ('platform.name', '"MMA"'::jsonb, 'Public platform name', TRUE),
  ('platform.maintenance_mode', 'false'::jsonb, 'Maintenance mode flag', FALSE)
ON CONFLICT (setting_key) DO NOTHING;
