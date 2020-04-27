INSERT INTO USER (ID, EMAIL, NAME) VALUES (11, 'admin@email.com', 'admin');
INSERT INTO USER (ID, EMAIL, NAME) VALUES (12, 'user@email.com', 'user');
INSERT INTO USER (ID, EMAIL, NAME) VALUES (13, 'tester@email.com', 'tester');

INSERT INTO CATEGORY (ID, NAME) VALUES (11, 'gas');
INSERT INTO CATEGORY (ID, NAME) VALUES (12, 'grocery');
INSERT INTO CATEGORY (ID, NAME) VALUES (13, 'clothes');
INSERT INTO CATEGORY (ID, NAME) VALUES (14, 'travel');

INSERT INTO expense (ID, CATEGORY_ID, DESCRIPTION, EXPENSE_DATE, LOCATION, USER_ID ) VALUES (11, 11, 'Business trip', curtime(), 'New York', 11);
INSERT INTO expense (ID, CATEGORY_ID, DESCRIPTION, EXPENSE_DATE, LOCATION, USER_ID ) VALUES (12, 11, 'Family trip', curtime(), 'Los Angeles', 12);
INSERT INTO expense (ID, CATEGORY_ID, DESCRIPTION, EXPENSE_DATE, LOCATION, USER_ID ) VALUES (13, 14, 'Business trip', curtime(), 'Chicago', 12);
INSERT INTO expense (ID, CATEGORY_ID, DESCRIPTION, EXPENSE_DATE, LOCATION, USER_ID ) VALUES (14, 12, 'Business trip', curtime(), 'Phoenix', 13);
INSERT INTO expense (ID, CATEGORY_ID, DESCRIPTION, EXPENSE_DATE, LOCATION, USER_ID ) VALUES (15, 12, 'Family trip', curtime(), 'San Antonio', 13);
INSERT INTO expense (ID, CATEGORY_ID, DESCRIPTION, EXPENSE_DATE, LOCATION, USER_ID ) VALUES (16, 13, 'Business trip', curtime(), 'San Diego', 13);
INSERT INTO expense (ID, CATEGORY_ID, DESCRIPTION, EXPENSE_DATE, LOCATION, USER_ID ) VALUES (17, 13, 'Family trip', curtime(), 'Houston', 12);
INSERT INTO expense (ID, CATEGORY_ID, DESCRIPTION, EXPENSE_DATE, LOCATION, USER_ID ) VALUES (18, 14, 'Family trip', curtime(), 'Philadelphia', 13);

SELECT * FROM USER;
SELECT * FROM EXPENSE;
SELECT * FROM CATEGORY;
