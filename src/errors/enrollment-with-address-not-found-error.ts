import { ApplicationError } from '@/protocols';

export function enrollmentWithAddressNotFoundError(): ApplicationError {
  return {
    name: 'EnrollmentNotFound',
    message: 'Enrollment does not have an address',
  };
}
