SELECT AVG(ar.started_at - ar.created_at) AS average_wait_time
FROM assistance_requests ar;
