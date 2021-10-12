import { Entity, Column, PrimaryGeneratedColumn, OneToOne, ManyToOne, JoinColumn } from 'typeorm';
import MenuItemDto from './menu-item.dto';
import OrderItem from '../../core/order-item';
import OrderDto from './order.dto';

@Entity({ name: 'order_item' })
export default class OrderItemDto implements OrderItem {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  quantity: number;

  @ManyToOne(() => OrderDto, orderDto => orderDto.orderItems)
  order: OrderDto;

  @OneToOne(() => MenuItemDto, { eager: true })
  @JoinColumn()
  menuItem: MenuItemDto;
} 