/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex('jobs').insert([
    {
      id: 1,
      title: 'Plumbing installations',
      description: 'Plumbing installations, repairs, and maintenance',
      location: 'unit 2/48 Ellice Road, Glenfield, Auckland 0629',
      date: '11 July 2024',
      time: '10:00',
      complete: true,
      quotation: 100,
      manhour: 2,
      review: 'good',
      employee_id: 1,
      client_id: 1,
      manager_id: 1,
    },
    {
      id: 2,
      title: 'Gasfitting',
      description: 'Gas appliances',
      location: '10/20 Gladstone Road, Parnell, Auckland 1052',
      date: '11 July 2024',
      time: '15:00',
      complete: true,
      quotation: 100,
      manhour: 2,
      review: 'good',
      employee_id: 1,
      client_id: 2,
      manager_id: 1,
    },
    {
      id: 3,
      title: 'Drain Unblocking',
      description:
        'clear blockages and clear it with as little disruption or upheaval as possible',
      location: 'The Boundary 5 Vitasovich Avenue, Henderson, Auckland 0612',
      date: '11 July 2024',
      time: '10:00',
      complete: true,
      quotation: 100,
      manhour: 2,
      review: 'good',
      employee_id: 1,
      client_id: 3,
      manager_id: 1,
    },
    {
      id: 4,
      title: 'Leak detection',
      description: 'Identify leaks underground, under floors, and behind',
      location: '3/1 View Road, Glenfield, Auckland 0627',
      date: '11 July 2024',
      time: '15:00',
      complete: false,
      quotation: 100,
      manhour: 6,
      review: 'good',
      employee_id: 1,
      client_id: 1,
      manager_id: 1,
    },
    {
      id: 5,
      title: 'Hot water systems',
      description: 'Replace an existing water heating system',
      location: '25 Cleveland Road, Parnell, Auckland 1052',
      date: '11 July 2024',
      time: '15:00',
      complete: false,
      quotation: 100,
      manhour: 3,
      review: 'good',
      employee_id: 1,
      client_id: 2,
      manager_id: 1,
    },
    {
      id: 6,
      title: 'Backflow prevention',
      description: 'Annual Backflow Testing Repairs & Maintenance',
      location: '420 Titirangi Road, Titirangi, Auckland 0604',
      date: '11 July 2024',
      time: '15:00',
      complete: false,
      quotation: 100,
      manhour: 1,
      review: 'good',
      employee_id: 1,
      client_id: 3,
      manager_id: 1,
    },
  ])
}
