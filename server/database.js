const { Pool } = require('pg');
const dotenv = require('dotenv');

const environment_loaded = false;

class Database {
  constructor() {
    
    if (environment_loaded == false) {
      dotenv.config();
      environment_loaded = true;      
    }

    /* Get database URL and create a pool for PostgreSQL */
    const url = new URL(Process.DATABASE_CONNECTION_STRING);

    this.pool = new Pool({
      host: url.username,
      port: url.port,
      database: url.pathname.substring(1),
      user: url.username,
      password: url.password,
      ssl: {
        rejectUnauthorized: false,
      }
    })
  }

  write() {

  }


}