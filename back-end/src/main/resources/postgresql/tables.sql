create table sc_user
(
	id serial not null,
	user_name varchar(255) not null
)
;

create unique index sc_user_id_uindex
	on sc_user (id)
;

create unique index sc_user_user_name_uindex
	on sc_user (user_name)
;
