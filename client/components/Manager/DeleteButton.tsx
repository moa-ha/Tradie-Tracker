import { useDeleteJob } from '../../hooks/useJobs'

interface Id {
  id: number
}

function DeleteButton({ id }: Id) {
  const mutation = useDeleteJob()

  function handleClick() {
    mutation.mutate(id)
    window.location.reload()
  }
  return (
    <>
      <button onClick={handleClick} className="dashboard-btn">
        Delete
      </button>
    </>
  )
}

export default DeleteButton
