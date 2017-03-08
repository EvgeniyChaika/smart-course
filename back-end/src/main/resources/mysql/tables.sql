CREATE TABLE receipts.rNetworks
(
  id      INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
  network VARCHAR(255)
);


CREATE TABLE receipts.rPairings
(
  id                INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
  date              DATETIME,
  last_pairing_id   INT,
  pairing_requested VARCHAR(255)
);

CREATE TABLE receipts.rState
(
  id          INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
  description VARCHAR(255),
  state       VARCHAR(255)
);

CREATE TABLE receipts.rSupplies
(
  id         INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
  date       DATETIME,
  network_id INTEGER,
  CONSTRAINT network_id FOREIGN KEY (network_id) REFERENCES receipts.rNetworks (id)
);

CREATE TABLE receipts.rSuppliesDetails
(
  id         INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
  supply_id  INTEGER,
  voucher_id INTEGER,
  CONSTRAINT supply_id FOREIGN KEY (supply_id) REFERENCES receipts.rSupplies (id),
  CONSTRAINT voucher_id FOREIGN KEY (voucher_id) REFERENCES receipts.rVoucher (id)
);

CREATE TABLE receipts.rVoucher
(
  id              INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
  amount          FLOAT,
  created_on      DATETIME,
  expired_on      DATETIME,
  pin             VARCHAR(255),
  state_id        INTEGER,
  supplyDetail_id INTEGER,
  CONSTRAINT state_id FOREIGN KEY (state_id) REFERENCES receipts.rState (id),
  CONSTRAINT supplyDetail_id FOREIGN KEY (supplyDetail_id) REFERENCES receipts.rSuppliesDetails (id)
);