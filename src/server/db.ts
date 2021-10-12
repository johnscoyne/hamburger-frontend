import { ConnectionOptions } from 'typeorm';
import LocationDto from './data/entities/location.dto';
import OrderDto from './data/entities/order.dto';
import OrderItemDto from './data/entities/order-item.dto';
import MenuItemDto from './data/entities/menu-item.dto';

export const options: ConnectionOptions = {
  type:'sqlite',
  database: ':memory:',
  entities: [ LocationDto, OrderDto, OrderItemDto, MenuItemDto ],
  logging: true,
  synchronize: true,
};