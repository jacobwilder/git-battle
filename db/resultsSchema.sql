DROP DATABASE IF EXISTS results_DB;
CREATE DATABASE results_DB;

USE results_DB;

CREATE TABLE results(
  id INT NOT NULL AUTO_INCREMENT,
  winner_name VARCHAR(100) NOT NULL,
  winner_score DECIMAL(5,2) NULL,

  loser_name VARCHAR(100) NOT NULL,
  loser_score DECIMAL(5,2) NULL,

  PRIMARY KEY (id)
);

