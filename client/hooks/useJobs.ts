import {
  useQuery,
  useMutation,
  useQueryClient,
  MutationFunction,
} from '@tanstack/react-query'
import * as api from '../apis/jobs'
import { Job, JobData } from '../../models/jobs'

// manager's page

export function useJobs() {
  return useQuery({ queryKey: ['jobs'], queryFn: () => api.getJobs() })
}

export function useJobById(id: number) {
  return useQuery({
    queryKey: ['job'],
    queryFn: () => api.getJobById(id),
  })
}

export function useDeleteJob() {
  const client = useQueryClient()
  return useMutation({
    mutationFn: (id: number) => api.deleteJob(id),
    onSuccess: () => client.invalidateQueries({ queryKey: ['delJob'] }),
  })
}

export function useEditJobById() {
  const qc = useQueryClient()
  return useMutation({
    mutationFn: (input: Job) => api.editJobById(input),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['jobs'] }),
  })
}

export function useCreateJob() {
  const qc = useQueryClient()
  return useMutation({
    mutationFn: (input: JobData) => api.createJob(input),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['newJob'] }),
  })
}

export function useCompletedJobs() {
  return useQuery({
    queryKey: ['CompJobs'],
    queryFn: () => api.getCompletedJobs(),
  })
}

// employee's page

export function useGetScheduleById(id: number) {
  return useQuery({
    queryKey: ['schedule'],
    queryFn: () => api.getScheduleById(id),
  })
}

export function useTask(employeeId: number, jobId: number) {
  return useQuery({
    queryKey: ['task'],
    queryFn: () => api.getTask(employeeId, jobId),
  })
}
export function useSubmitJob() {
  // const input = { empId, jobId, data }
  const qc = useQueryClient()
  return useMutation({
    mutationFn: (input: Job) => api.submitJob(input),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['submit'] }),
  })
}
// export function useFruitsMutation<TData = unknown, TVariables = unknown>(
//   mutationFn: MutationFunction<TData, TVariables>,
// ) {
//   const queryClient = useQueryClient()
//   const mutation = useMutation({
//     mutationFn,
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ['fruits'] })
//     },
//   })

//   return mutation
// }

// Query functions go here e.g. useAddFruit
/* function useAddFruit() {
  return useFruitsMutation(addFruit)
} */
