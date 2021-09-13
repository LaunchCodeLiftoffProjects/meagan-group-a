DROP TABLE IF EXISTS items;

CREATE TABLE items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(250) NOT NULL,
    price DOUBLE NOT NULL
);

create table roles(
                      id IDENTITY not null primary key,
                      name varchar_ignorecase(20) not null
);
create table users(
                      id IDENTITY not null primary key,
                      username varchar_ignorecase(20) unique not null,
                      email varchar_ignorecase(50) unique not null,
                      password varchar_ignorecase(120) not null
);

create table user_roles (
                             user_id integer not null,
                             role_id integer not null,
                             constraint fk_user_roles foreign key(user_id) references users(id)

);
create unique index ix_auth_username on user_roles (user_id,role_id);