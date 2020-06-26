import { EntityRepository, Repository } from 'typeorm';

import Plant from '../models/Plant';

@EntityRepository(Plant)
class PlantsRepository extends Repository<Plant> {
  public async findByDate(date: Date): Promise<Plant | null> {
    const findPlant = await this.findOne({
      where: { last_watering_date: date },
    });

    return findPlant || null;
  }
}

export default PlantsRepository;
