import MenuItem from './menu-item';

export default interface MenuItemService {
  save(menuItem: MenuItem): Promise<MenuItem>;
  getOne(id: number): Promise<MenuItem>;
  getOneByItem(item: string): Promise<MenuItem>;
  getAll(): Promise<MenuItem[]>;
  delete(id: number): Promise<void>;
}