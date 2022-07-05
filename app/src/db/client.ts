import "dotenv";

import knex from "knex";

const client = knex({
  client: "postgresql",
  connection: {
    host: process.env.DATABASE_HOST,
    // @ts-ignore
    port: parseInt(process.env.DATABASE_PORT),
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
  },
});

export default client;
