INSERT INTO users (role_id, name, email, password_hash, status)
SELECT r.id, 'System Admin', 'admin@mma.local', '$2b$10$replace.with.real.hash', 'active'
FROM roles r
WHERE r.slug = 'super-admin'
ON CONFLICT (email) DO NOTHING;
