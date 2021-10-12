import { getRepository } from 'typeorm';
import LocationRepository from '../../core/location.repository';
import Location from '../../core/location';
import LocationDto from '../entities/location.dto';

export default class LocationRepositoryImpl implements LocationRepository {
  public save(location: Location): Promise<Location> {
    return getRepository(LocationDto).save(location);
  }

  public getOne(id: number): Promise<Location> {
    return getRepository(LocationDto).findOne(id);
  }

  public getAll(): Promise<Location[]> {
    return getRepository(LocationDto).find({});
  }

  public async delete(location: Location): Promise<void> {
    await getRepository(LocationDto).delete(location);
  }
}