import { Router } from 'express';

import EmailController from './controllers/EmailController';

const routes = Router();

routes.post('/', EmailController.Post);
routes.get('/', EmailController.Get);

export default routes;
