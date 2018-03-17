DELETE FROM Properties
WHERE id = $1;

SELECT * FROM Properties
WHERE user_id = $2;