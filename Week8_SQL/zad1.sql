SELECT * FROM warrants WHERE user_id = 4 AND deleted_at IS NULL;

SELECT * 
    FROM warrants AS t1 
    LEFT JOIN warrant_containers AS t2 
    ON t1.id = t2.warrant_id 
    WHERE t1.`status` <>  'draft' AND t1.user_id = 4 AND t1.deleted_at IS NULL;

SELECT sum(t2.time_spent) AS total_time_spent,t1.* 
    FROM users AS t1 
    LEFT JOIN warrant_containers AS t2 
    ON t1.id = t2.user_id 
    GROUP BY t2.user_id;

SELECT * FROM warrants 
    WHERE received_at_location = 2 AND is_paid = 1 AND deleted_at IS NULL 
    ORDER BY warrants.warrant_date;

select users.*, count(wc.user_id)
           from users,warrant_containers AS wc
           where users.id=wc.user_id
           group by wc.user_id
           order by count(wc.user_id) DESC;
