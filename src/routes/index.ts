import { Router } from 'express';
import itemRouter from './item.routes';
import categoryRouter from './category.routes';

const routes = Router();

routes.use('/items', itemRouter);
routes.use('/categorias', categoryRouter);

export default routes;
