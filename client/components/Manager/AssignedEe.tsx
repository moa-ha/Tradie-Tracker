import { useEmployee } from '../../hooks/useEmployees'

interface Id {
  id: number
}
function AssignedEe({ id }: Id) {
  const { data } = useEmployee(id)

  if (data) {
    return <span className="assigned-ee"> Assigned {data.name}</span>
  }
}

export default AssignedEe
