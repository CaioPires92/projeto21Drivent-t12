import { AuthenticatedRequest } from '@/middlewares';
import { ticketService } from '@/services';
import { Response } from 'express';
import httpStatus from 'http-status';

export async function getTicketTypes(req: AuthenticatedRequest, res: Response) {
  const ticketTypes = await ticketService.findTicketTypes();
  res.status(httpStatus.OK).send(ticketTypes);
}
