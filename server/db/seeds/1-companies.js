/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex('companies').insert([
    {
      id: 1,
      name: 'Kmart',
      gst: '00-111-222',
      web_link: 'kmart.com',
    },
  ])
}
