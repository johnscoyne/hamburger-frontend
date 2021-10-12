import Location from './location';

export default interface LocationRepository {
  save(location: Location): Promise<Location>;
  getOne(id: number): Promise<Location>;
  getAll(): Promise<Location[]>;
  delete(location: Location): Promise<void>;
}