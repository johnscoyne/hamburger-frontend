import express, { Request, Response, NextFunction } from 'express';
import menuItemService from '../components/menu-item.service';
import { ok, created, noContent } from './status';

const router = express.Router();

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const menuItems = await menuItemService.getAll();
    return res.status(ok).json({ menuItems })
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = parseInt(req.params.id, 10);
    const menuItem = await menuItemService.getOne(id);
    return res.status(ok).json({ menuItem })
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const menuItem = await menuItemService.save(req.body);
    return res.status(created).json({ menuItem })
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = parseInt(req.params.id, 10);
    await menuItemService.delete(id);
    return res.sendStatus(noContent)
  } catch (err) {
    next(err);
  }
});

export default router;