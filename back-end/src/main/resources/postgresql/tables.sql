create table receipts.public.r_networks
(
	id serial not null
		constraint r_networks_pkey
			primary key,
	network varchar(255)
);

create table receipts.public.r_pairings
(
	id serial not null
		constraint r_pairings_pkey
			primary key,
	date date,
	last_pairing_id integer,
	pairing_requested varchar(255)
);

create table receipts.public.r_states
(
	id serial not null
		constraint r_states_pkey
			primary key,
	description varchar(255),
	state varchar(255)
);

create table receipts.public.r_supplies
(
	id serial not null
		constraint r_supplies_pkey
			primary key,
	date date,
	network_id integer
		constraint fk7cgh7aq31cqv48pr9d28kpfxw
			references r_networks
);

create table receipts.public.r_supplies_details
(
	id serial not null
		constraint r_supplies_details_pkey
			primary key,
	supply_id integer
		constraint fk61s1xj7ph6ho8t7wtdo9jcujc
			references r_supplies,
	voucher_id integer
		constraint fkqteyth1lxfryqjwgi8aw44n6k
			references r_vouchers
);

create table receipts.public.r_vouchers
(
	id serial not null
		constraint r_vouchers_pkey
			primary key,
	amount double precision,
	created_on date,
	expired_on timestamp,
	pin varchar(255),
	state_id integer
		constraint fkiu3a0fbems4wbmootjik28i4q
			references r_states,
	supplydetail_id integer
		constraint fkd7jyu7cxkkblsc9gf9b5vk6fa
			references r_supplies_details
);