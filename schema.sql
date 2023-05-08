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

INSERT INTO gardenButtons (name) VALUES ('Eunhae');
INSERT INTO gardenButtons (name) VALUES ('Levi');
INSERT INTO gardenButtons (name) VALUES ('Davis');
INSERT INTO members (memberName, userName, email, phoneNumber, zipCode, gardenTime, memberPassword, garden)
VALUES ();
