const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx',
});

pool.connect()
  .then(()=> {
    console.log(`Pool connection succesful: `, pool);
  })
  .catch((error) => {
    console.log(`Pool connection error: `, error);
  })

pool.query(
    `SELECT id, name, cohort_id
    FROM students
    LIMIT 5;`
)
  .then((res) => {
    console.log(`Pool query responnse: `, res);
  })
  .catch((err) => {
    console.log(`Pool query error: `, err);
    console.error('Error stack: ', err.stack);
  })