INSERT INTO Properties(user_id, property_name, property_desc, address, city, state, zip, image, loan_amt, monthly_mort, desired_rent)
VALUES($1, $1, $3, $4, $5, $6, $7, $8, $9, $10, $11);