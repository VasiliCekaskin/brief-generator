/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("email_verifications", (tableBuilder) => {
    tableBuilder.increments("id");
    tableBuilder.integer("user_id").unsigned();
    tableBuilder.foreign("user_id").references("users.id");
    tableBuilder.string("verification_hash").unique();
    tableBuilder.dateTime("created_at");
    tableBuilder.dateTime("expires_at");
    tableBuilder.dateTime("verified_at");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("email_verifications");
};
