SELECT day, COUNT(id) AS total_assigments
FROM assignments
GROUP BY day
ORDER BY day;