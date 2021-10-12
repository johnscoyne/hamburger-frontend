import { getRepository } from 'typeorm';
import MenuItemRepository from '../../core/menu-item.repository';
import MenuItemDto from '../entities/menu-item.dto';
import MenuItem from '../../core/menu-item';

export default class MenuItemRepositoryImpl implements MenuItemRepository {
  public save(menuItem: MenuItem): Promise<MenuItem> {
    return getRepository(MenuItemDto).save(menuItem);
  }

  public getOne(id: number): Promise<MenuItem> {
    return getRepository(MenuItemDto).findOne(id);
  }

  public async getOneByItem(item: string): Promise<MenuItem> {
    const dtos = await getRepository(MenuItemDto).find({ item });
    if (dtos && dtos.length) {
      return dtos[0];
    }
    return null;
  }

  public getAll(): Promise<MenuItem[]> {
    return getRepository(MenuItemDto).find({});
  }

  public async delete(menuItem: MenuItem): Promise<void> {
    await getRepository(MenuItemDto).delete(menuItem);
  }

}