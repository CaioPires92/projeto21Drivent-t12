import { Router } from 'express';
import { authenticateToken } from '@/middlewares';
import { getTicketTypes } from '@/controllers';

const ticketsRouter = Router();

ticketsRouter.all('/*', authenticateToken).get('/types', getTicketTypes).get('/').post('/');
// ticketsRouter.all('/*').get('/types', getTicketTypes).get('/').post('/'); // teste

export { ticketsRouter };
