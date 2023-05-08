DROP TABLE IF EXISTS gardenButtons;
DROP TABLE IF EXISTS watered;
DROP TABLE IF EXISTS plantFavorites;

CREATE TABLE gardenButtons (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL
);

CREATE TABLE watered (
  id SERIAL PRIMARY KEY,
  memberName TEXT NOT NULL
);

CREATE TABLE plantFavorites(
  favorite_id SERIAL PRIMARY KEY,
  user_username TEXT NOT NULL,
  user_password TEXT NOT NULL,
  plant_name TEXT NOT NULL,
  plant_description TEXT NOT NULL,
  growth_notes TEXT NOT NULL
);

INSERT INTO gardenButtons (name) VALUES ('Eunhae');
INSERT INTO gardenButtons (name) VALUES ('Levi');
INSERT INTO gardenButtons (name) VALUES ('Davis');