import Location from './location';

export default interface LocationService {
  save(location: Location): Promise<Location>;
  getOne(id: number): Promise<Location>;
  getAll(): Promise<Location[]>;
  delete(id: number): Promise<void>;
}