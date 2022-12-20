create table Users {

}

create table Clients {

}

CREATE TABLE Estimates (
  ID INT PRIMARY KEY  NOT NULL,
  ClientName CHAR(20),
  EstimateDesc CHAR(100),
  Price INT NOT NULL
  Invoiced BOOLEAN
)

INSERT INTO Estimates VALUES (3, 'Anthony', 'Description #3 coming from the third estimate.', 299);
create table Invoices {

}

create table Business {
  
}





CREATE TABLE Invoice (
  ID INT PRIMARY KEY  NOT NULL,
  InvoiceNO INT,
  EstimateDesc VARCHAR,
  Price INT NOT NULL
  Paid BOOLEAN NOT NULL

)
