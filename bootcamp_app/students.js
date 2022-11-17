const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx',
});

const cohortId = process.argv[2];
console.log(cohortId);
const queryLimit = process.argv[3];
console.log(queryLimit);

pool.connect()
  .then(()=> {
    console.log(`Pool connection succesful`);
  })
  .catch((error) => {
    console.log(`Pool connection error: `, error);
  })

pool.query(
    `SELECT students.id, students.name AS student, cohorts.name AS cohort
    FROM students
    JOIN cohorts
    ON cohorts.id = students.cohort_id
    WHERE cohorts.name LIKE '%${cohortId}%'
    LIMIT ${queryLimit};`
)
  .then((res) => {
    console.table(/* `Pool query response rows: `,  */res.rows);
    res.rows.forEach(row => {
      console.log(`${row.student} has an id of ${row.id} and is in the ${row.cohort} cohort`)
    })
    pool.end();
  })
  .catch((err) => {
    console.log(`Pool query error: `, err);
    console.error('Error stack: ', err.stack);
  })