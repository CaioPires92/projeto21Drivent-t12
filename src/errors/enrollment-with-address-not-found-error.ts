import { ApplicationError } from '@/protocols';

export function enrollmentWithAddressNotFoundError(): ApplicationError {
  return {
    name: 'Enrollment Not Found',
    message: 'Enrollment does not have an address',
  };
}
