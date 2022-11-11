-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS cats;

CREATE TABLE cats (
    id BIGINT GENERATED ALWAYS AS IDENTITY,
    breed VARCHAR NOT NULL,
    playfulness INT NOT NULL,
    intelligence INT NOT NULL,
    origin VARCHAR NOT NULL,
    health INT NOT NULL,
    shedding INT NOT NULL,
    pet_friendly INT NOT NULL
);

INSERT INTO cats (breed, playfulness, intelligence, origin, health, shedding, pet_friendly)
VALUES
('Abyssinian', 5, 5, 'Southeast Asia', 2, 3, 5),
('Russian Blue', 2, 4, 'Archangel Islands, Russia', 4, 4, 4),
('Scottish Fold', 3, 4, 'Tayside, Scotland', 3, 3, 4),
('British Shorthair', 2, 3, 'Great Britain', 4, 3, 5),
('Ragdoll', 4, 4, 'Riverside, California', 3, 4, 4),
('Sphynx', 4, 4, 'Canada', 2, 1, 5),
('Burmese', 5, 5, 'Burma and Thailand', 1, 2, 5),
('Maine Coon', 4, 4, 'Maine, USA', 3, 4, 5);