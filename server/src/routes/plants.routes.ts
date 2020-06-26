import { Router } from 'express';
import { getCustomRepository } from 'typeorm';

import PlantsRepository from '../repositories/PlantsRepository';

const plantsRouter = Router();

plantsRouter.get('/', async (request, response) => {
  const plantsRepository = getCustomRepository(PlantsRepository);
  const plants = await plantsRepository.find();

  return response.json(plants);
});

export default plantsRouter;
