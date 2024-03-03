create database carneiror1;
use carneiror1;
CREATE TABLE carneiror1(
entryID INT(11) AUTO_INCREMENT PRIMARY KEY,
lastName VARCHAR(50),
firstName VARCHAR(50),
major VARCHAR(100),
email VARCHAR(100));

DESCRIBE carneiror1;
INSERT INTO carneiror1(lastName, firstName, major, email) VALUES('Carneiro','Ricardo','Computer Science','carneiror1@southernct.edu');
INSERT INTO carneiror1(lastName, firstName, major, email) VALUES('Muniz','Paulo','Computer Science','munizp1@southernct.edu');
INSERT INTO carneiror1(lastName, firstName, major, email) VALUES('Lopez','Brianna','Computer Science','lopezb11@southernct.edu');
INSERT INTO carneiror1(lastName, firstName, major, email) VALUES('Nguyen','Rachel','Computer Science','nguyenr2@southernct.edu');
INSERT INTO carneiror1(lastName, firstName, major, email) VALUES('Adamski','Vanessa','Engineering','adamskiv1@southernct.edu');
INSERT INTO carneiror1(lastName, firstName, major, email) VALUES('Albezreh','Anas','Computer Science','albezreha1@southernct.edu');
INSERT INTO carneiror1(lastName, firstName, major, email) VALUES('Braren','Logan','Computer Science','braenl1@southernct.edu');
INSERT INTO carneiror1(lastName, firstName, major, email) VALUES('Chukwu','Peter','Computer Science','chukwup1@southernct.edu');
INSERT INTO carneiror1(lastName, firstName, major, email) VALUES('Gomes','Kyle','Computer Science','gomesk5@southernct.edu');
INSERT INTO carneiror1(lastName, firstName, major, email) VALUES('Graciano','Jasmine','Computer Science Engineering','gracianoj2@southernct.edu');
INSERT INTO carneiror1(lastName, firstName, major, email) VALUES('Lopez','Michael','Physics','lopezm42@southernct.edu');
INSERT INTO carneiror1(lastName, firstName, major, email) VALUES('Mashrakey','Shafqat','Computer Science','mashrakeys1@southernct.edu');
INSERT INTO carneiror1(lastName, firstName, major, email) VALUES('Nemchek','Nolan','Computer Science','nemchekn1@southernct.edu');
INSERT INTO carneiror1(lastName, firstName, major, email) VALUES('Raza','Mohammed','Computer Science','razam3@southernct.edu');
INSERT INTO carneiror1(lastName, firstName, major, email) VALUES('Rotondo','Antonio','Accounting','rotondoa5@southernct.edu');
INSERT INTO carneiror1(lastName, firstName, major, email) VALUES('Shrestha','Bikash','Computer Science','shresthab2@southernct.edu');
INSERT INTO carneiror1(lastName, firstName, major, email) VALUES('Walsh','John','Mathmatics','walshj33@southernct.edu');
INSERT INTO carneiror1(lastName, firstName, major, email) VALUES('Ziniak','Gianna','Computer Science','ziniakg1@southernct.edu');

SELECT * FROM carneiror1;
ALTER TABLE carneiror1 ADD www VARCHAR(100);

DESCRIBE carneiror1;
UPDATE carneiror1 SET www = 'https://167.99.253.247/csc235/carneiror1' WHERE lastName LIKE '%Carneiro%';
UPDATE carneiror1 SET www = 'https://167.99.253.247/csc235/munizp1' WHERE lastName LIKE '%Muniz%';
UPDATE carneiror1 SET www = 'https://167.99.253.247/csc235/ziniakg1' WHERE lastName LIKE '%Ziniak%';
UPDATE carneiror1 SET www = 'https://167.99.253.247/csc235/nguyenr2' WHERE lastName LIKE '%Nguyen%';
UPDATE carneiror1 SET www = 'https://167.99.253.247/csc235/adamskiv1' WHERE lastName LIKE '%Adamski%';
UPDATE carneiror1 SET www = 'https://167.99.253.247/csc235/albezreha1' WHERE lastName LIKE '%Albezreh%';
UPDATE carneiror1 SET www = 'https://167.99.253.247/csc235/lopezb11' WHERE lastName LIKE '%Lopez%';
UPDATE carneiror1 SET www = 'https://167.99.253.247/csc235/mashrakeys1' WHERE lastName LIKE '%Mashrakey%';
UPDATE carneiror1 SET www = 'https://167.99.253.247/csc235/nemchekn1' WHERE lastName LIKE '%Nemchek%';
UPDATE carneiror1 SET www = 'https://167.99.253.247/csc235/braenl1' WHERE lastName LIKE '%Braren%';
UPDATE carneiror1 SET www = 'https://167.99.253.247/csc235/chukwup1' WHERE lastName LIKE '%Chukwu%';
UPDATE carneiror1 SET www = 'https://167.99.253.247/csc235/gomesk5' WHERE lastName LIKE '%Gomes%';
UPDATE carneiror1 SET www = 'https://167.99.253.247/csc235/gracianoj2' WHERE lastName LIKE '%Graciano%';
UPDATE carneiror1 SET www = 'https://167.99.253.247/csc235/lopezm42' WHERE lastName LIKE '%Lopez%';
UPDATE carneiror1 SET www = 'https://167.99.253.247/csc235/rotondoa5' WHERE lastName LIKE '%Rotondo%';
UPDATE carneiror1 SET www = 'https://167.99.253.247/csc235/shresthab2' WHERE lastName LIKE '%Shrestha%';
UPDATE carneiror1 SET www = 'https://167.99.253.247/csc235/walshj33' WHERE lastName LIKE '%Walsh%';
UPDATE carneiror1 SET www = 'https://167.99.253.247/csc235/razam3' WHERE lastName LIKE '%Raza%';


SELECT lastName, www from carneiror1;