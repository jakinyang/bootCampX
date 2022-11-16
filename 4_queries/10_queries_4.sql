SELECT  ass.id, 
        ass.name, 
        ass.day, 
        ass.chapter, 
        COUNT(ar.*) AS total_requests
FROM assignments ass
JOIN assistance_requests ar
ON ar.assignment_id = ass.id
GROUP BY ass.id
ORDER BY total_requests DESC;

