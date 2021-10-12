import Location from './location';
import LocationService from './location.service';
import LocationRepository from './location.repository';
import { NotFoundError } from '../errors';

export default class LocationServiceImpl implements LocationService {
  private readonly locationRepository: LocationRepository;

  constructor(locationRepository: LocationRepository) {
    this.locationRepository = locationRepository;
  }

  public save(location: Location): Promise<Location> {
    return this.locationRepository.save(location);
  }

  public async getOne(id: number): Promise<Location> {
    const location = await this.locationRepository.getOne(id);
    if (!location) {
      throw new NotFoundError();
    }
    return location;
  }

  public getAll(): Promise<Location[]> {
    return this.locationRepository.getAll();
  }

  public async delete(id: number): Promise<void> {
    const location = await this.getOne(id);
    return this.locationRepository.delete(location);
  }
}