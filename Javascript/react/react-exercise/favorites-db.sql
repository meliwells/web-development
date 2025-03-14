drop database if exists favorites;
create database favorites;
use favorites;

create table favorite (
	id int primary key auto_increment,
    brand varchar(128) not null,
    location varchar(345),
    most_favorite varchar(345),
	`rank` int not null
);

INSERT INTO favorite (brand, location, most_favorite, `rank`) VALUES
('M&M\'s', 'New Jersey', 'Plain', 1),
('Ghiradelli', 'California', 'Intense Dark 60% Cocoa', 2),
('Hershey\'s', 'Pennsylvania', 'Special Dark', 3),
('Dove', 'Chicago', 'Intense Dark 60% Cocoa', 4),
('Cadbury Dairy Milk', 'United Kingdom', 'Oreo Chocolate Bar', 5),
('Cadbury eggs', 'United Kingdom', 'eggs', 4);

SELECT * FROM favorite;