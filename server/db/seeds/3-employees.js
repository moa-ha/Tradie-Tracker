/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex('employees').insert([
    {
      id: 1,
      name: 'John',
      bio: 'The best staff of the year',
      email: 'john@kmart.com',
      phone: '027-111-2222',
      rating: 4.5,
      company_id: 1,
      manager_id: 1,
    },
  ])
}
