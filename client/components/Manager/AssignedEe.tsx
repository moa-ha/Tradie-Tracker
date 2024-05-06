import { useEmployee, useEmployees } from '../../hooks/useEmployees'

interface Id {
  id: number
}
function AssignedEe({ id }: Id) {
  const { data } = useEmployee(id)
  console.log('id from togglebutton? ' + id)

  if (data && data.id == id) {
    console.log(data)

    return <div> Assigned {data.name}</div>
  }
}

export default AssignedEe
