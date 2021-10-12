import Order from './order';

export default interface OrderRepository {
  save(order: Order): Promise<Order>;
  delete(order: Order): Promise<void>;
  getByLocationId(id: number): Promise<Order[]>;
  getOne(id: number): Promise<Order>;
  getAll(): Promise<Order[]>;
}