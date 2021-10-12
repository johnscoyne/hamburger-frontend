import express, { Request, Response, NextFunction } from 'express';
import orderService from '../components/order.service';
import { ok, created, noContent } from './status';

const router = express.Router();

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const orders = await orderService.getAll();
    res.status(ok).json({ orders });
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = parseInt(req.params.id, 10);
    const order = await orderService.getOne(id);
    res.status(ok).json({ order });
  } catch (err) {
    next(err);
  }
});


router.get('/location/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = parseInt(req.params.id, 10);
    const orders = await orderService.getByLocationId(id);
    res.status(ok).json({ orders });
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const order = await orderService.save(req.body);
    res.status(created).json({ order });
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = parseInt(req.params.id, 10);
    await orderService.delete(id);
    res.sendStatus(noContent)
  } catch (err) {
    next(err);
  }
});

export default router;
