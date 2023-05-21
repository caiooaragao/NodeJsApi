import * as mysql from 'mysql';


const connection = mysql.createConnection({
    host: 'localhost:3306',
    user: 'root',
    password: 'root',
    database: 'test_api_db'
  });
  
  connection.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL: ', err);
      return;
    }
  
    console.log('Connected to MySQL.');
  
    // Perform a query
    connection.query('SELECT * FROM your_table', (err, results) => {
      if (err) {
        console.error('Error executing query: ', err);
        return;
      }
  
      console.log('Query results: ', results);
    });
  
    // Close the connection
    connection.end((err) => {
      if (err) {
        console.error('Error closing connection: ', err);
        return;
      }
  
      console.log('Connection closed.');
    });
  });
  