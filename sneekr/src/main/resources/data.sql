INSERT INTO items (name, price) VALUES
    ('Air Jordan', 99.99),
    ('Steel-toed Boots', 120.99),
    ('Clogs', 39.99),
    ('Sandals', 15.99);

insert into users(username, email, password, firstName, lastName) values
    ('user','user@user.com','password','User','LastName'),
    ('admin','admin@admin.com','password','Admin','Lastname');

insert into authorities(username, authority) values
    ('user','ROLE_USER'),
    ('admin','ROLE_ADMIN');
