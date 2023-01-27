-- Create database
CREATE DATABASE IF NOT EXISTS apptaches;
USE apptaches;

-- Create table in database
CREATE TABLE tacheListes (idUnique INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), state VARCHAR(25));

-- Set value into table
INSERT INTO tacheListes (name, state) VALUES
    ('Faire liste courses', 'Fait'),
    ('Acheter les courses', 'En cours'),
    ('Ranger courses', 'En retard'),
    ('RDV', 'En retard');