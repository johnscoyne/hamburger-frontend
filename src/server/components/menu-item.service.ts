import MenuItemServiceImpl from '../core/menu-item.service.impl';
import MenuItemRepositoryImpl from '../data/repository/menu-item.repository.impl';

export default new MenuItemServiceImpl(new MenuItemRepositoryImpl());