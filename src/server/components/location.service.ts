import LocationServiceImpl from '../core/location.service.impl';
import LocationRepository from '../data/repository/location.repository.impl';

export default new LocationServiceImpl(new LocationRepository());