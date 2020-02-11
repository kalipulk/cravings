DROP DATABASE IF EXISTS cravings_db;

CREATE DATABASE cravings_db;
USE cravings_db;

CREATE TABLE snacks
(
	id INTEGER NOT NULL AUTO_INCREMENT,
    snack_name VARCHAR(100) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);