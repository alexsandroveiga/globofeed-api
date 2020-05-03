import { Router } from 'express';
import itemRouter from './item.routes';

const routes = Router();

routes.use('/items', itemRouter);

export default routes;
