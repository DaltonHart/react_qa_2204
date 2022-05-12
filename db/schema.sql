-- This file will create and use the database. 
-- Following that it will create the tables with a relationship.
-- This database will have two resources bands and songs. Their relationship is a one to many.
-- To run this file mysql -u root -t < schema.sql 

CREATE DATABASE IF NOT EXISTS music;

USE music;

CREATE TABLE IF NOT EXISTS
  bands(
    band_id int NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    genre VARCHAR(255) NOT NULL,
    PRIMARY KEY (band_id)
  );

CREATE TABLE IF NOT EXISTS
  songs(
    song_id int NOT NULL AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    band_id int NOT NULL,
    PRIMARY KEY (song_id),
    FOREIGN KEY (band_id) REFERENCES bands(band_id)
  );