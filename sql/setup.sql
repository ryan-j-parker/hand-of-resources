-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS cats_table;

CREATE TABLE cats_table (
    id BIGINT GENERATED ALWAYS AS IDENTITY,
    name VARCHAR NOT NULL,
    playfulness INT NOT NULL,
    intelligence INT NOT NULL,
    health INT NOT NULL,
    shedding INT NOT NULL,
    pet_friendly INT NOT NULL
);

INSERT INTO cats_table (name, playfulness, intelligence, health, shedding, pet_friendly)
VALUES
('Abyssinian', 5, 5, 2, 3, 5),
('Russian Blue', 2, 4, 4, 4, 4),
('Scottish Fold', 3, 4, 3, 3, 4),
('British Shorthair', 2, 3, 4, 3, 5),
('Ragdoll', 4, 4, 3, 4, 4),
('Sphynx', 4, 4, 2, 1, 5),
('Burmese', 5, 5, 1, 2, 5),
('Maine Coon', 4, 4, 3, 4, 5);