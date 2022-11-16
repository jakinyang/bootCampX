SELECT cohorts.name as cohort, SUM(ar.completed_at - ar.started_at) AS total_duration
FROM assistance_requests ar
JOIN students
ON students.id = ar.student_id
JOIN cohorts
ON cohorts.id = students.cohort_id
GROUP BY cohorts.name
ORDER BY total_duration;
