DROP TABLE IF EXISTS `ticket`;
CREATE TABLE `ticket` (
    id SMALLINT NOT NULL AUTO_INCREMENT,
    filmselector VARCHAR(30) NOT NULL,
    amount CHAR(11) NOT NULL,
    firstName VARCHAR(50) NOT NULL,
    surName VARCHAR(10) NOT NULL,
    telephoneNR CHAR(10) NOT NULL,
    email VARCHAR(50) NOT NULL,
    PRIMARY KEY (id)
)
