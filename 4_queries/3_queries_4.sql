SELECT  teachers.name AS teacher,
        students.name AS student,
        assignments.name AS assignment,
        completed_at - started_at AS duration
FROM assistance_requests ar
JOIN students
ON students.id = ar.student_id
JOIN teachers
ON teachers.id = ar.teacher_id
JOIN assignments
ON assignments.id = ar.assignment_id
ORDER BY duration;