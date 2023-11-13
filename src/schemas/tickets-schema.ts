import { InputTicketBody } from '@/protocols';
import Joi from 'joi';

export const ticketSchema = Joi.object<InputTicketBody>({
  ticketTypeId: Joi.number().required(),
});
