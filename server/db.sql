CREATE TABLE restaurants(
    id INT,
    name VARCHAR(50),
    location VARCHAR(50),
    price_range INT
);
-- making surethatv all entries are imp to enter
CREATE TABLE restaurants(
    id BIGSERIAL NOT NULL,
    name VARCHAR(50) NOT NULL,
    location VARCHAR(50) NOT NULL,
    price_range INT NOT NULL
);

