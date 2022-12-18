create table Users {

}

create table Clients {

}

CREATE TABLE Estimates (
  ID INT PRIMARY KEY  NOT NULL,
  ClientName CHAR(20),
  EstimateDesc CHAR(100),
  Price INT NOT NULL
)

INSERT INTO Estimates VALUES (3, 'Anthony', 'Description #3 coming from the third estimate.', 299);
create table Invoices {

}

create table Business {
  
}