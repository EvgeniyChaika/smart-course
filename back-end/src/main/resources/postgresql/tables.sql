create table role
(
	id serial not null,
	description varchar(255) not null
)
;

create unique index role_id_uindex
	on role (id)
;

CREATE TABLE public.users
(
	id SERIAL PRIMARY KEY,
	username VARCHAR(50) NOT NULL,
	password VARCHAR(50) NOT NULL,
	authorities VARCHAR(255) NOT NULL,
	accountNonExpired BOOLEAN NOT NULL,
	accountNonLocked BOOLEAN NOT NULL,
	credentialsNonExpired BOOLEAN NOT NULL,
	enabled BOOLEAN NOT NULL
);
CREATE UNIQUE INDEX users_id_uindex ON public.users (id);
CREATE UNIQUE INDEX users_username_uindex ON public.users (username);