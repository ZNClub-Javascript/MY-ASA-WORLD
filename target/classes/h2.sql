/* H2 DATABASE QUERIES */

/* USER TABLE */
DROP TABLE USER IF EXISTS;

CREATE TABLE USER(
username varchar(255),
password varchar(255),
role int
);

INSERT INTO 
USER(username,password,role)
VALUES("alden.pereira30@gmail.com","G202899",0);


