import {
  useQuery,
  useMutation,
  useQueryClient,
  MutationFunction,
} from '@tanstack/react-query'
import * as api from '../apis/employees'

// to assign employee to each job

export function useEmployees() {
  return useQuery({
    queryKey: ['employees'],
    queryFn: () => api.getEmployees(),
  })
}

export function useEmployee(id: number) {
  return useQuery({
    queryKey: ['employee'],
    queryFn: () => api.getEmployee(id),
  })
}

export function useGetSchedule(id: number) {
  return useQuery({
    queryKey: ['schedule'],
    queryFn: () => api.getSchedule(id),
  })
}
