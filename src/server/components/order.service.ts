import OrderServiceImpl from '../core/order.service.impl';
import OrderRepositoryImpl from '../data/repository/order.repository.impl';

export default new OrderServiceImpl(new OrderRepositoryImpl());