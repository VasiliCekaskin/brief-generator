import knex from "knex";

const client = knex({
  client: "postgresql",
  connection: {
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "postgres",
    database: "letter-friend",
  },
});

export default client;
