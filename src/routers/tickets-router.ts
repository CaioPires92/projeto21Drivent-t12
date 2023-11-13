import { Router } from 'express';
import { authenticateToken, validateBody } from '@/middlewares';
import { createTicket, getTicket, getTicketTypes } from '@/controllers';
import { ticketSchema } from '@/schemas/tickets-schema';

const ticketsRouter = Router();

ticketsRouter
  .all('/*', authenticateToken)
  .get('/types', getTicketTypes)
  .get('/', getTicket)
  .post('/', validateBody(ticketSchema), createTicket);

export { ticketsRouter };
