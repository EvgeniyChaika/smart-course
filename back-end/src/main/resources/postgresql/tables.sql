create table role
(
	id serial not null,
	description varchar(255) not null
)
;

create unique index role_id_uindex
	on role (id)
;
