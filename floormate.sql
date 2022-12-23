create table Users {
  Email VARCHAR(100),
  Password
}

CREATE TABLE Clients (
  ID INT PRIMARY KEY  NOT NULL,
  ClientFirstName CHAR(20),
  ClientLastName CHAR(20),
  ClientAddress CHAR(100),
  ClientPhone INT NOT NULL
  ClientEmail char(100)
  Estimates
  Invoices
  Invoiced BOOLEAN
)

CREATE TABLE Estimates (
  ID INT PRIMARY KEY  NOT NULL,
  InvoiceNO INT ,
  EstimateDesc VARCHAR,
  Price INT NOT NULL
  Paid BOOLEAN NOT NULL

)

INSERT INTO Estimates VALUES (3, 'Anthony', 'Description #3 coming from the third estimate.', 299);
create table Invoices {

}






