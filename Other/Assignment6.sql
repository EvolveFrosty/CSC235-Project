
CREATE TABLE carneiror1Research(
entryID INT(11) AUTO_INCREMENT PRIMARY KEY,
dateAccessed VARCHAR(50),
url VARCHAR(100),
title VARCHAR(50),
comments VARCHAR(50));

DESCRIBE carneiror1Research;
INSERT INTO carneiror1Research(dateAccessed, url, title, comments) VALUES('4/1/2023','https://en.wikipedia.org/wiki/Yahtzee','Yahtzee Wikipedia','None');
INSERT INTO carneiror1Research(dateAccessed, url, title, comments) VALUES('4/1/2023','https://tenrandomfacts.com/yahtzee/','Ten random facts of Yahtzee','None');
INSERT INTO carneiror1Research(dateAccessed, url, title, comments) VALUES('4/1/2023','https://www.wikihow.com/Play-Yahtzee','How to Play Yahtzee (with Pictures)','None');
INSERT INTO carneiror1Research(dateAccessed, url, title, comments) VALUES('4/1/2023','https://www.ultraboardgames.com/yahtzee/game-rules','How to play Yahtzee | Official Rules','None');

SELECT * FROM carneiror1Research;