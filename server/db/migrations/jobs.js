/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  return knex.schema.createTable('jobs', (table) => {
    table.increments('id').primary()
    table.string('title')
    table.string('description')
    table.string('location')
    table.string('date')
    table.string('time')
    table.boolean('complete')
    table.float('quotation')
    table.float('manhour')
    table.string('review')
    table.integer('employee_id').references('employees.id')
    table.integer('client_id').references('clients.id')
    table.integer('manager_id').references('managers.id')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('jobs')
}
