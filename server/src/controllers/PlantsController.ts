import { Request, Response } from 'express';

class PlantsController {
  async index(_request: Request, response: Response) {
    return response.json({ ok: true });
  }

  async create(request: Request, response: Response) {
    return response.json({ ok: true });
  }
}

export default PlantsController;
