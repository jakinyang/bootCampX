SELECT COUNT(*) AS total_assistances,
  teachers.name FROM assistance_requests ar
  JOIN teachers
  ON teachers.id = ar.teacher_id
  WHERE teachers.name = 'Waylon Boehm'
  GROUP BY teachers.name;