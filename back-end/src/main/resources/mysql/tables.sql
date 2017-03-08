CREATE TABLE receipts.rNetworks
(
  id INT PRIMARY KEY NOT NULL,
  network VARCHAR(255)
);


CREATE TABLE receipts.rPairings
(
  id INT PRIMARY KEY NOT NULL,
  date DATETIME,
  last_pairing_id INT,
  pairing_requested VARCHAR(255)
);

CREATE TABLE receipts.rState
(
  id INT PRIMARY KEY NOT NULL,
  description VARCHAR(255),
  state VARCHAR(255)
);

CREATE TABLE receipts.rSupplies
(
  id NUMERIC(19) PRIMARY KEY NOT NULL,
  date DATETIME,
  network_id INT,
  CONSTRAINT FKibsfw1mao1wlu4vr8ckjshmh1 FOREIGN KEY (network_id) REFERENCES receipts.rNetworks (id)
);

CREATE TABLE receipts.rSuppliesDetails
(
  id INT PRIMARY KEY NOT NULL,
  supply_id NUMERIC(19),
  voucher_id INT,
  CONSTRAINT FKk1hlkg4hc0ijrerg6hu3503co FOREIGN KEY (supply_id) REFERENCES receipts.rSupplies (id),
  CONSTRAINT FKikngi25q6podaxwtie2afjpq1 FOREIGN KEY (voucher_id) REFERENCES receipts.rVoucher (id)
);

CREATE TABLE receipts.rVoucher
(
  id INT PRIMARY KEY NOT NULL,
  amount FLOAT,
  created_on DATETIME,
  expired_on DATETIME,
  pin VARCHAR(255),
  state_id INT,
  supplyDetail_id INT,
  CONSTRAINT FKji4cstebopkyhs3k2pvukq60q FOREIGN KEY (state_id) REFERENCES receipts.rState (id),
  CONSTRAINT FK36ht4iq8v8jc9qusmtqcukiwg FOREIGN KEY (supplyDetail_id) REFERENCES receipts.rSuppliesDetails (id)
);