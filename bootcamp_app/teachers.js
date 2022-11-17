const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx',
});

const cohortId = process.argv[2];

pool.connect()
  .then(()=> {
    console.log(`Pool connection succesful`);
  })
  .catch((error) => {
    console.log(`Pool connection error: `, error);
  })

pool.query(
    `SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort
    FROM teachers
    JOIN assistance_requests ON teacher_id = teachers.id
    JOIN students ON student_id = students.id
    JOIN cohorts ON cohort_id = cohorts.id
    WHERE cohorts.name = '${cohortId}'
    ORDER BY teacher;`
)
  .then((res) => {
    console.table(/* `Pool query response rows: `,  */res.rows);
    pool.end();
  })
  .catch((err) => {
    console.log(`Pool query error: `, err);
    console.error('Error stack: ', err.stack);
  })