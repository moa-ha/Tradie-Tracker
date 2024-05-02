import {
  useQuery,
  useMutation,
  useQueryClient,
  MutationFunction,
} from '@tanstack/react-query'
import * as api from '../apis/employees'
import { Employee, EmployeeData } from '../../models/jobs'

// to assign employee to each job

export function useEmployees() {
  return useQuery({
    queryKey: ['employees'],
    queryFn: () => api.getEmployees(),
  })
}
