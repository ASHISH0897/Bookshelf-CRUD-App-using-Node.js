CREATE TABLE library(
    id int NOT NULL AUTO_INCREMENT,
    book varchar(255) NOT NULL,
    author varchar(255),
    publish_year integer,
    PRIMARY KEY(id)
);