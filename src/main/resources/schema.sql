CREATE TABLE IF NOT EXISTS hero (
	id int(11) NOT NULL AUTO_INCREMENT,
	name VARCHAR(255) NOT NULL UNIQUE,
    description TEXT NULL,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT pk_hero PRIMARY KEY (id)
);