DROP DATABASE IF EXISTS video_game_list;

CREATE DATABASE video_game_list;

USE video_game_list;

-- DROP TABLE IF EXISTS games;

CREATE TABLE games (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  platform VARCHAR(255) NOT NULL,
  completed BOOLEAN NOT NULL
);

-- CREATE TABLE hours_played (
--   id INT PRIMARY KEY AUTO_INCREMENT,
--   game_id INT NOT NULL,
--   hours_played INT NOT NULL
-- );

INSERT INTO games (title, platform, completed)
  values
    ('God of War', 'Playstation', true),
    ('Escape From Tarkov', 'PC', false),
    ('Destiny', 'Multiple', true),
    ('Halo 3', 'Xbox', true);