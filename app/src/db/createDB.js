require("dotenv").config();
const { Client } = require("pg");

const client = new Client({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  port: parseInt(process.env.DATABASE_PORT),
});

const createDatabase = async () => {
  try {
    await client.connect(); // gets connection
    await client.query(`CREATE DATABASE ${process.env.DATABASE_NAME}`); // sends queries
    return true;
  } catch (error) {
    console.error("Database already exists. Continuing...");
    return false;
  } finally {
    await client.end(); // closes connection
  }
};

createDatabase().then((result) => {
  if (result) {
    console.log("Database created");
  }
});
