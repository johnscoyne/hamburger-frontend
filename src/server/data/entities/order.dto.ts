import { Entity, PrimaryGeneratedColumn, OneToMany, OneToOne, JoinColumn, ManyToOne } from 'typeorm';
import Order from '../../core/order';
import LocationDto from './location.dto';
import OrderItemDto from './order-item.dto';

@Entity({ name: 'order' })
export default class OrderDto implements Order {

  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => OrderItemDto, orderItemDto => orderItemDto.order, { cascade: ["insert", "update"] })
  orderItems: OrderItemDto[];

  @OneToOne(() => LocationDto, { eager: true })
  @JoinColumn()
  location: LocationDto;
}