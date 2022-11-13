-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS cats;

CREATE TABLE cats (
    id BIGINT GENERATED ALWAYS AS IDENTITY,
    breed VARCHAR NOT NULL,
    playfulness INT NOT NULL,
    intelligence INT NOT NULL,
    origin VARCHAR NOT NULL
);

INSERT INTO cats (breed, playfulness, intelligence, origin)
VALUES
('Abyssinian', 5, 5, 'Southeast Asia'),
('Russian Blue', 2, 4, 'Archangel Islands, Russia'),
('Scottish Fold', 3, 4, 'Tayside, Scotland'),
('British Shorthair', 2, 3, 'Great Britain'),
('Ragdoll', 4, 4, 'Riverside, California'),
('Sphynx', 4, 4, 'Canada'),
('Burmese', 5, 5, 'Burma and Thailand'),
('Maine Coon', 4, 4, 'Maine, USA');

DROP TABLE IF EXISTS planets;

CREATE TABLE planets (
    id BIGINT GENERATED ALWAYS AS IDENTITY,
    name VARCHAR NOT NULL,
    mass DECIMAL (7, 6) NOT NULL,
    radius DECIMAL (5, 4) NOT NULL,
    period BIGINT NOT NULL,
    temperature INT NOT NULL
);

INSERT INTO planets (name, mass, radius, period, temperature)
VALUES
('Mercury', 0.000174, 0.0341, 88, 400),
('Venus', 0.00257, 0.0847, 224.7, 737),
('Earth', 0.00315, 0.0892, 365.2, 288),
('Mars', 0.000338, 0.0488, 687, 210),
('Jupiter', 1, 1, 4331, 165),
('Saturn', 0.299, 0.843, 10747, 134),
('Uranus', 0.0456, 0.358, 30589, 76),
('Neptune', 0.0537, 0.346, 59800, 72),
('Pluto', 0.000007, 0.0166, 90560, 44);

DROP TABLE IF EXISTS gangs_of_ny;

CREATE TABLE gangs_of_ny (
    id BIGINT GENERATED ALWAYS AS IDENTITY,
    name VARCHAR NOT NULL,
    formed INT NOT NULL,
    dissolved INT NOT NULL,
    member VARCHAR NOT NULL,
    territory VARCHAR NOT NULL,
    makeup VARCHAR NOT NULL
);

INSERT INTO gangs_of_ny (name, formed, dissolved, member, territory, makeup)
VALUES
('Forty Thieves', 1825, 1850, 'Edward Coleman', 'Lower East Side', 'Irish'),
('Bowery Boys', 1830, 1865, 'Mike Walsh', 'The Bowery', 'American Nativists'),
('Whyos', 1860, 1890, 'Danny Lyons', 'The Bowery', 'Irish'),
('Daybreak Boys', 1845, 1859, 'Nicholas Saul', 'Manhattan Waterfront', 'Juveniles'),
('Dead Rabbits', 1834, 1865, 'Hell-cat Maggie', 'Five Points', 'Irish, Irish-American'),
('Short Tails', 1880, 1890, 'unknown', 'Corlears Hook', 'Irish'),
('Eastman Gang', 1890, 1912, 'Monk Eastman', 'Lower East Side', 'Jewish-American');

DROP TABLE IF EXISTS chinese_zodiac;

CREATE TABLE chinese_zodiac (
    id BIGINT GENERATED ALWAYS AS IDENTITY,
    animal VARCHAR NOT NULL,
    yinyang VARCHAR NOT NULL,
    trine INT NOT NULL,
    element VARCHAR NOT NULL,
    year VARCHAR NOT NULL
);

INSERT INTO chinese_zodiac (animal, yinyang, trine, element, year)
VALUES
('Rat', 'Yang', 1, 'Water', '02-02-1984 - 02-19-1985'),
('Ox', 'Yin', 2, 'Earth', '02-20-1985 - 02-08-1986'),
('Tiger', 'Yang', 3, 'Wood', '02-09-1986 - 01-28-1987'),
('Rabbit', 'Yin', 4, 'Wood', '01-29-1987 - 02-16-1988'),
('Dragon', 'Yang', 1, 'Earth', '02-17-1988 - 02-05-1989'),
('Snake', 'Yin', 2, 'Fire', '02-06-1989 - 01-26-1990'),
('Horse', 'Yang', 3, 'Fire', '01-27-1990 - 02-14-1991'),
('Goat', 'Yin', 4, 'Earth', '02-15-1991 - 02-03-1992'),
('Monkey', 'Yang', 1, 'Metal', '02-04-1992 - 01-22-1993'),
('Rooster', 'Yin', 2, 'Metal', '01-23-1993 - 02-09-1994'),
('Dog', 'Yang', 3, 'Earth', '02-10-1994 - 01-30-1995'),
('Pig', 'Yin', 4, 'Water', '01-31-1995 - 02-18-1996');
