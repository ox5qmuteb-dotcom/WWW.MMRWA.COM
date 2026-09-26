INSERT INTO material_categories (name, slug, description)
VALUES
  ('General', 'general', 'General learning material'),
  ('Tutorials', 'tutorials', 'Guided tutorial content')
ON CONFLICT (slug) DO NOTHING;
