import OrderItem from './order-item';
import Location from './location';

export default interface Order {
  id: number;
  orderItems: OrderItem[];
  location: Location;
}