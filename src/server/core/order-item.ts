import MenuItem from './menu-item';
import Order from './order';

export default interface OrderItem {
  id: number;
  menuItem: MenuItem;
  order: Order;
  quantity: number;
}