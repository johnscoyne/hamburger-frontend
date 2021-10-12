import Order from './order';

export default interface OrderService {
  save(order: Order): Promise<Order>;
  delete(id: number): Promise<void>;
  getByLocationId(id: number): Promise<Order[]>
  getOne(id: number): Promise<Order>;
  getAll(): Promise<Order[]>;
}