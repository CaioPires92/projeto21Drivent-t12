import { ticketsRepository } from '@/repositories';

async function findTicketTypes() {
  const ticketTypes = await ticketsRepository.findTicketTypes();
  return ticketTypes;
}

export const ticketService = {
  findTicketTypes,
};
