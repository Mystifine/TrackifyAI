const { Pool } = require('pg');
const dotenv = require('dotenv');

class Database {
  static environment_loaded = false;

  constructor() {
    /* Load environment variables */
    if (!Database.environment_loaded) {
      dotenv.config();
      Database.environment_loaded = true;      
    }


    /* Validate Database connection string */
    if (!process.env.DATABASE_CONNECTION_STRING) {
      throw new Error("DATABASE_CONNECTION_STRING environment variable is missing");
    }

    /* Get database URL and create a pool for PostgreSQL */
    const url = new URL(process.env.DATABASE_CONNECTION_STRING);

    if (!url.hostname || !url.pathname || !url.username || !url.password) {
      throw new Error("Invalid DATABASE_CONNECTION_STRING format");
    }

    /* Use the connection string directly */
    this.pool = new Pool({
      connectionString: process.env.DATABASE_CONNECTION_STRING,
    })

    /*
    this.pool = new Pool({
      host: url.username,
      port: url.port,
      database: url.pathname.substring(1),
      user: url.username,
      password: url.password,
      ssl: {
        rejectUnauthorized: false,
      }
    });
    */

    this.testConnection();
  }

  async testConnection() {
    try {
      const client = await this.pool.connect();
      console.log("Connected to the database successfully");
      client.release();
    } catch (error) {
      console.error("Failed to connect to the database:", error);
      throw error;
    }
  }

  async write(query, params) {
    try {
      const result = this.pool.query(query, params);
      return result;
    } catch (error) {
      console.error("Error executing query:", error);
      throw error;
    }
  }

  async close() {
    await this.pool.close();
    console.log("Database connection pool closed");
  }

}

module.exports = Database