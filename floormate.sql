-- Referenced Tables need to be created before the referencing tables.


-- Table for creating new users/accounts?
create table Users (
  id BIGSERIAL PRIMARY KEY NOT NULL,
  user_email varchar(100) not null,
  user_password varchar(20) not null,
  user_firstname varchar(20) not null,
  user_lastname varchar(20) not null,
  user_address varchar(100) not null,
  user_phone int not null,
  user_business_name varchar(100),
  -- user_clients FOREIGN KEY REFERENCES Clients(id),
  -- user_estimates FOREIGN KEY REFERENCES Estimates(id),
  -- user_invoices FOREIGN KEY REFERENCES Invoices(id),
)

-- Users can have many clients.
-- Clients can have many estimates. (Many to many relationship)
-- Estimates can only be owned by one client and user.
-- Estimates can be invoices.
-- Estimates can be invoiced or not invoiced.

-- Table for creating new clients for the user.
CREATE TABLE Clients (
  id BIGSERIAL PRIMARY KEY NOT NULL,
  client_firstname CHAR(20) NOT NULL,
  client_lastname CHAR(20) NOT NULL,
  client_address CHAR(100) NOT NULL,
  client_phone INT NOT NULL,
  client_email CHAR(100) NOT NULL,
  -- client_estimates FOREIGN KEY REFERENCES Estimates(id),
)

-- Table for creating new estimates for the user.
CREATE TABLE Estimates (
  id BIGSERIAL PRIMARY KEY NOT NULL,
  estimate_number INT NOT NULL,
  estimate_date DATE NOT NULL,
  estimate_description VARCHAR(100) NOT NULL,
  estimate_price INT NOT NULL,
  estimate_is_invoice BOOLEAN NOT NULL,
  -- estimate_invoices FOREIGN KEY REFERENCES Invoices(id),
)

-- Small table to store specific invoice information for the user.
-- Each invoice will have a unique invoice number.
-- Each invoice will have a date.
-- Each invoice can only have one estimate.
-- Invoices can be paid or not paid.

CREATE TABLE Invoices (
  id BIGSERIAL PRIMARY KEY NOT NULL,
  invoice_number BIGSERIAL NOT NULL,
  invoice_date DATE NOT NULL,
  invoice_paid BOOLEAN NOT NULL,
  -- invoiced_estimate FOREIGN KEY REFERENCES Estimates(id),
)




