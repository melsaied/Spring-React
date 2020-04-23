insert into user(ID, EMAIL, NAME) values (11, 'admin', 'admin@email.com');
insert into user(ID, EMAIL, NAME) values (12, 'user', 'user@email.com');
insert into user(ID, EMAIL, NAME) values (13, 'tester', 'tester@email.com');

insert into category (ID, NAME) values (11, 'gas');
insert into category (ID, NAME) values (12, 'grocery');
insert into category (ID, NAME) values (13, 'clothes');
insert into category (ID, NAME) values (14, 'travel');

insert into expense (ID, DESCRIPTION, EXPENSE_DATE) values (11, 'New York', curtime());
insert into expense (ID, DESCRIPTION, EXPENSE_DATE) values (12, 'Los Angeles', curtime());
insert into expense (ID, DESCRIPTION, EXPENSE_DATE) values (13, 'Chicago', curtime());
insert into expense (ID, DESCRIPTION, EXPENSE_DATE) values (14, 'Phoenix', curtime());
insert into expense (ID, DESCRIPTION, EXPENSE_DATE) values (15, 'San Antonio', curtime());
insert into expense (ID, DESCRIPTION, EXPENSE_DATE) values (16, 'San Diego', curtime());
insert into expense (ID, DESCRIPTION, EXPENSE_DATE) values (17, 'Houston', curtime());
insert into expense (ID, DESCRIPTION, EXPENSE_DATE) values (18, 'Philadelphia', curtime());

SELECT * FROM USER;
SELECT * FROM EXPENSE;
SELECT * FROM CATEGORY;
