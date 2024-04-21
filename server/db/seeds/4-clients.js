/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex('clients').insert([
    {
      id: 1,
      name: 'The Warehouse',
      email: 'admin@thewarehouse.com',
      phone: '09-111-2222',
    },
    {
      id: 2,
      name: 'McDonald',
      email: 'admin@McDonald.com',
      phone: '09-123-4567',
    },
    {
      id: 3,
      name: 'KFC',
      email: 'accounts@kfc.com',
      phone: '09-000-1111',
    },
  ])
}
