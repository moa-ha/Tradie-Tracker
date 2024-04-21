/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex('managers').insert([
    {
      id: 1,
      name: 'James',
      bio: 'Hard working professional',
      email: 'james@kmart.com',
      phone: '027-000-3333',
      company_id: 1,
    },
  ])
}
