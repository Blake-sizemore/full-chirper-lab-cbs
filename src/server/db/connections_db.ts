import mysql from "mysql2/promise";

const pool = mysql.createPool({
    host: 'localhost',
    user: 'sample_user',
    password:'pswd_sample',
    database: 'full_chirpr'
});

// pool.query("select * from mentions;")
// .then(res => console.log(res))
// .catch(e=>console.log(e));

// pool.query("select * from users;")
// .then(res => console.log(res))
// .catch(e=>console.log(e));

pool.query('select * from chirps;')
.then(res => console.log(res))
.catch(e=>console.log(e,"connection_db"));

export default pool;