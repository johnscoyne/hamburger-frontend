import { getRepository } from 'typeorm';
import OrderRepository from '../../core/order.repository';
import Order from '../../core/order';
import OrderDto from '../entities/order.dto';
import OrderItemDto from '../entities/order-item.dto';

export default class OrderRepositoryImpl implements OrderRepository {
  public async save(order: Order): Promise<Order> {
    return getRepository(OrderDto).save(order);
  }

  public async delete(order: OrderDto): Promise<void> {
    await getRepository(OrderItemDto).delete({ order });
    await getRepository(OrderDto).delete({ id: order.id });
  }

  public getByLocationId(id: number): Promise<Order[]> {
    return getRepository(OrderDto)
      .createQueryBuilder()
      .leftJoinAndSelect('OrderDto.orderItems', 'orderItems')
      .where('OrderDto.location = :id', { id })
      .getMany();
  }

  public getOne(id: number): Promise<Order> {
    return getRepository(OrderDto).findOne(id, { relations: ['orderItems'] });
  }

  public getAll(): Promise<Order[]> {
    return getRepository(OrderDto).find({ relations: ['orderItems'] });
  }
}
