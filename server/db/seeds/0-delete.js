/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('jobs').del()
  await knex('clients').del()
  await knex('employees').del()
  await knex('managers').del()
  await knex('companies').del()
}
