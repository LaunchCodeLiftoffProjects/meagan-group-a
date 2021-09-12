DROP TABLE IF EXISTS items;

CREATE TABLE items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(250) NOT NULL,
    price DOUBLE NOT NULL
);

create table users(
    username varchar_ignorecase(20) not null primary key,
    email varchar_ignorecase(50) not null,
    password varchar_ignorecase(50) not null,
    firstName varchar(30) not null,
    lastName varchar(30)

);

create table authorities (
                             username varchar_ignorecase(50) not null,
                             authority varchar_ignorecase(50) not null,
                             constraint fk_authorities_users foreign key(username) references users(username)
);
create unique index ix_auth_username on authorities (username,authority);