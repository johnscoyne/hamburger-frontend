import { Entity, Column, PrimaryGeneratedColumn, Unique } from 'typeorm';
import MenuItem from '../../core/menu-item';

@Entity({ name: 'menu_item' })
@Unique('item_idx', ['item'])
export default class MenuItemDto implements MenuItem {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  item: string;

  @Column()
  price: number;

  @Column()
  image: string;
}