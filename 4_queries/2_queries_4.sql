SELECT COUNT(ar.*) AS total_assistances,
  students.name FROM assistance_requests ar
  JOIN students
  ON students.id = ar.student_id
  WHERE students.name = 'Elliot Dickinson'
  GROUP BY students.name;