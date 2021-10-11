CREATE DATABASE IF NOT EXISTS msisdb;
USE msisdb;
show databases;
DROP TABLE IF EXISTS student;
CREATE TABLE student (
	id int PRIMARY KEY AUTO_INCREMENT ,
    username varchar(24) UNIQUE NOT NULL,
    name varchar(48)
);

INSERT INTO student (id, username, name) VALUES 
(1, 'tomgreg', 'Tom Gregory'),
(2, 'beth1', 'Beth Barnhart'),
(3, 'bipin', 'Prof. Prabhakar');

-- SELECT * FROM students;

DROP TABLE IF EXISTS offer;
CREATE TABLE offer (
	id int PRIMARY KEY AUTO_INCREMENT,
    studentId int NOT NULL REFERENCES student(id) 
        ON DELETE CASCADE ON UPDATE CASCADE,
	companyName VARCHAR(24) NOT NULL DEFAULT '',
    salary int NOT NULL DEFAULT 0,
    bonus int NOT NULL DEFAULT 0,
	offerDate date NOT NULL DEFAULT(CURRENT_DATE)
);

-- Student 1 has no offers, Student 2 has 3 offers, Student 3 has one offer
INSERT INTO offer(id, studentId, companyName, salary, bonus, offerDate) VALUES
  (1, 2, 'KPMG', 95000, 7000, '2021-09-30'),
  (2, 2, 'Deloitte Digital', 94000, 12000, '2021-10-03'),
  (3, 2, 'IU, ISGP', 54000, 0, '2021-10-05'),
  (4, 3, 'Amazon', 122000, 11000, '2021-10-15')
;

DROP TABLE IF EXISTS book;
CREATE TABLE book (
	Title varchar(50) not null ,
    Author varchar(24) NOT NULL,
    Year_Published varchar(4),
    Publisher varchar(50)  not null,
    Page_Count varchar(50)  NOT NULL,
    MSRP varchar(50)  not null
);
INSERT INTO book (Title, Author, Year_Published, Publisher, Page_Count, MSRP) VALUES 
('Graduation Day: The Testing, Book 3', 'Joelle Charbonneau', '2014','Houghton Mifflin Harcourt', 205, '$17.99'),
('The Girl from the Well', 'Rin Chupeco', '2014','Sourcebooks Fire', 150, '$16.99'),
('The Thirteenth Mystery', 'Michael Dahl', '2014','Capstone Young Readers', 175, '$10.95'),
('Breakfast Served Anytime', 'Sarah Combs', '2014','Candlewick', 125, '$16.99'),
('The Almost Fearless Hamilton Squidlegger', 'Timothy Basil Ering', '2014','Candlewick', 120, '$16.99')
;

-- COMMIT;

-- CREATE USER 'msisreader'@'%' IDENTIFIED BY 'msisreadonly';
-- GRANT SELECT ON * . * TO 'msisreader'@'%';
