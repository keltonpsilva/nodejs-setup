import { Router } from 'express';

import HomeController from './controllers/HomeController';

const routes = Router();

routes.get('/', HomeController.Index);

export default routes;
