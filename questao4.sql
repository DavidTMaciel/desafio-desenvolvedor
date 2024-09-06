CREATE TABLE States (
    state_id SERIAL PRIMARY KEY,
    state_code VARCHAR(2) NOT NULL,
    state_name VARCHAR(50) NOT NULL
);

CREATE TABLE Clients (
    client_id SERIAL PRIMARY KEY,
    company_name VARCHAR(100) NOT NULL,
    state_id INT REFERENCES States(state_id)
);

CREATE TABLE PhoneTypes (
    phone_type_id SERIAL PRIMARY KEY,
    description VARCHAR(50) NOT NULL
);

CREATE TABLE Phones (
    phone_id SERIAL PRIMARY KEY,
    phone_number VARCHAR(15) NOT NULL,
    client_id INT REFERENCES Clients(client_id),
    phone_type_id INT REFERENCES PhoneTypes(phone_type_id)
);

/*Busca no Banco */

SELECT 
    c.client_id,
    c.company_name,
    p.phone_number
FROM 
    Clients c
JOIN 
    States s ON c.state_id = s.state_id
JOIN 
    Phones p ON c.client_id = p.client_id
WHERE 
    s.state_code = 'SP';