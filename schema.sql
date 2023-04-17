CREATE TABLE gardenButtons (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL
);

CREATE TABLE watered (
  id SERIAL PRIMARY KEY,
  memberName TEXT NOT NULL
);

INSERT INTO gardenButtons (name) VALUES ('Eunhae');
INSERT INTO gardenButtons (name) VALUES ('Levi');
INSERT INTO gardenButtons (name) VALUES ('Davis');