import { Timestamp } from 'typeorm';
import { InvalidPriceError, MissingPropertyError, NotFoundError } from '../errors';
import MenuItem from './menu-item';
import MenuItemRepository from './menu-item.repository';
import MenuItemService from './menu-item.service';

export default class MenuItemServceImpl implements MenuItemService {
  private readonly menuItemRepository: MenuItemRepository;

  constructor(menuItemRepository: MenuItemRepository) {
    this.menuItemRepository = menuItemRepository;
  }

  public async getOne(id: number): Promise<MenuItem> {
    const menuItem = await this.menuItemRepository.getOne(id);
    if (!menuItem) {
      throw new NotFoundError();
    }
    return menuItem;
  }

  public async getOneByItem(item: string): Promise<MenuItem> {
    const menuItem = await this.menuItemRepository.getOneByItem(item);
    if (!menuItem) {
      throw new NotFoundError();
    }
    return menuItem;
  }

  public getAll(): Promise<MenuItem[]> {
    return this.menuItemRepository.getAll();
  }

  public save(menuItem: MenuItem): Promise<MenuItem> {
    this.validate(menuItem);
    return this.menuItemRepository.save(menuItem);
  }

  public async delete(id: number): Promise<void> {
    const menuItem = await this.getOne(id);
    return this.menuItemRepository.delete(menuItem);
  }

  private validate(menuItem): void {
    const props = ['item', 'price', 'image'];
    const missing = [];
    props.forEach((prop) => {
      if (!(prop in menuItem) || (typeof menuItem[prop] === 'string' && !menuItem[prop])) {
        missing.push(prop);
      }
    });
    if (missing.length) {
      throw new MissingPropertyError(missing);
    }
    if (menuItem.price < 0) {
      throw new InvalidPriceError();
    }
  }
}