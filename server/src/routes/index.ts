import { Router } from 'express';
import plantsRouter from './plants.routes';

const routes = Router();

routes.use('/plants', plantsRouter);

export default routes;
