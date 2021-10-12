import LocationRepositoryImpl from './data/repository/location.repository.impl';
import MenuItemRepositoryImpl from './data/repository/menu-item.repository.impl';
import Location from './core/location';
import MenuItem from './core/menu-item';

export default async function setupData() {
  const locationRepository = new LocationRepositoryImpl();
  await locationRepository.save({
    name: 'The Burger Palace',
    address: '123 Test Street',
  } as Location);
  const menuItemRepository = new MenuItemRepositoryImpl();
  await menuItemRepository.save({
    item: 'burger',
    price: 5.99,
    image: 'images/burger.png',
  } as MenuItem);
  await menuItemRepository.save({
    item: 'fries',
    price: 2.99,
    image: 'images/fries.png',
  } as MenuItem);
  await menuItemRepository.save({
    item: 'drink',
    price: 1.99,
    image: 'images/drink.png',
  } as MenuItem);
}