SELECT cohorts.name, AVG(ar.completed_at - ar.started_at) AS average_assistance_time
FROM assistance_requests ar
JOIN students
ON students.id = ar.student_id
JOIN cohorts
ON cohorts.id = students.cohort_id
GROUP BY cohorts.name
ORDER BY average_assistance_time DESC
LIMIT 1;