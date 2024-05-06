import { useEmployees } from '../../hooks/useEmployees'

function AssignedEe() {
  const { data } = useEmployees()
  return <div> Assigned "James"</div>
}

export default AssignedEe
