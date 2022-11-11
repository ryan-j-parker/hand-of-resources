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