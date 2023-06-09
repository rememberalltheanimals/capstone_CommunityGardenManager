DROP TABLE IF EXISTS gardenButtons;
DROP TABLE IF EXISTS watered;
DROP TABLE IF EXISTS plantFavorites;
DROP TABLE IF EXISTS plantFavorites2;
DROP TABLE IF EXISTS feed;
DROP TABLE IF EXISTS feed2;
DROP TABLE IF EXISTS members;
DROP TABLE IF EXISTS members2;
DROP TABLE IF EXISTS contact;

CREATE TABLE feed (
  id SERIAL PRIMARY KEY,
  idea VARCHAR(300)
);

CREATE TABLE feed2 (
  id SERIAL PRIMARY KEY,
  idea TEXT NOT NULL
);


CREATE TABLE gardenButtons (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL
);

CREATE TABLE watered (
  id SERIAL PRIMARY KEY,
  memberName TEXT NOT NULL
);

CREATE TABLE members (
  id SERIAL PRIMARY KEY,
  memberName TEXT NOT NULL,
  userName TEXT NOT NULL,
  email TEXT NOT NULL,
  phoneNumber TEXT NOT NULL,
  zipCode INT NOT NULL,
  gardenTime TEXT NOT NULL,
  memberPassword TEXT NOT NULL,
  garden TEXT NOT NULL
);

CREATE TABLE members2 (
  id SERIAL PRIMARY KEY,
  memberName TEXT NOT NULL,
  userName TEXT NOT NULL,
  email TEXT NOT NULL,
  phoneNumber TEXT NOT NULL,
  zipCode TEXT NOT NULL,
  gardenTime TEXT NOT NULL,
  memberPassword TEXT NOT NULL,
  garden TEXT NOT NULL
);

CREATE TABLE plantFavorites(
  favorite_id SERIAL PRIMARY KEY,
  user_username TEXT NOT NULL,
  user_password TEXT NOT NULL,
  plant_name TEXT NOT NULL,
  plant_description TEXT NOT NULL,
  growth_notes TEXT NOT NULL
);

CREATE TABLE plantFavorites2(
  favorite_id SERIAL PRIMARY KEY,
  user_username TEXT NOT NULL,
  plant_name TEXT NOT NULL,
  plant_description TEXT NOT NULL,
  growth_notes TEXT NOT NULL
);

CREATE TABLE contact (
  id SERIAL PRIMARY KEY,
  memberName TEXT NOT NULL,
  memberEmail TEXT NOT NULL,
  memberText TEXT NOT NULL
);

INSERT INTO gardenButtons (name) VALUES ('Eunhae');
INSERT INTO gardenButtons (name) VALUES ('Levi');
INSERT INTO gardenButtons (name) VALUES ('Davis');

