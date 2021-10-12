import OrderService from './order.service';
import OrderRepository from './order.repository';
import Order from './order';
import { MissingPropertyError, NotFoundError } from '../errors';

export default class OrderServiceImpl implements OrderService {

  private readonly orderRepository: OrderRepository;

  constructor(orderRepository: OrderRepository) {
    this.orderRepository = orderRepository;
  }

  public save(order: Order): Promise<Order> {
    this.validate(order);
    return this.orderRepository.save(order);
  }

  public getByLocationId(id: number): Promise<Order[]> {
    return this.orderRepository.getByLocationId(id);
  }

  public async getOne(id: number): Promise<Order> {
    const order = await this.orderRepository.getOne(id);
    if (!order) {
      throw new NotFoundError();
    }
    return order;
  }

  public getAll(): Promise<Order[]> {
    return this.orderRepository.getAll();
  }

  public async delete(id: number): Promise<void> {
    const order = await this.getOne(id);
    return this.orderRepository.delete(order);
  }


  private validate(order: Order): void {
    const props = ['location', 'orderItems'];
    const missing = [];
    props.forEach((prop) => {
      if (!(prop in order) || (order[prop] instanceof Array && !order[prop].length)) {
        missing.push(prop);
      }
    });
    if (missing.length) {
      throw new MissingPropertyError(missing);
    }
  }
}