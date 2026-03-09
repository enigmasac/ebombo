CREATE TABLE IF NOT EXISTS experiences (
  id INT AUTO_INCREMENT PRIMARY KEY,
  slug VARCHAR(255) NOT NULL,
  title VARCHAR(500) NOT NULL,
  lang ENUM('es','en') NOT NULL DEFAULT 'es',
  badge VARCHAR(100) NOT NULL DEFAULT '',
  duration VARCHAR(50) NOT NULL DEFAULT '',
  image VARCHAR(1000) NOT NULL DEFAULT '',
  hero_description TEXT,
  meta_pills JSON,
  body_content JSON,
  word_count INT NOT NULL DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  UNIQUE KEY idx_slug_lang (slug, lang),
  INDEX idx_lang (lang),
  INDEX idx_badge (badge)
);
