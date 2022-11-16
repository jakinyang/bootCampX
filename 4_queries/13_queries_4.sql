SELECT  DISTINCT teachers.name AS teacher,
        cohorts.name AS cohort,
        COUNT(ar)
FROM assistance_requests ar
JOIN teachers
ON teachers.id = ar.teacher_id
JOIN students
ON students.id = ar.student_id
JOIN cohorts
ON cohorts.id = students.cohort_id
WHERE cohorts.name = 'JUL02'
GROUP BY teacher, cohort;