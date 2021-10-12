import express, { Request, Response, NextFunction } from 'express';
import locationService from '../components/location.service';
import { ok, created, noContent } from './status';

const router = express.Router();

router.post('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const location = await locationService.save(req.body);
    return res.status(created).json({ location });
  } catch (err) {
    next(err);
  }
});

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const locations = await locationService.getAll();
    return res.status(ok).json({ locations });
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = parseInt(req.params.id, 10);
    const location = await locationService.getOne(id);
    return res.status(ok).json({ location });
  } catch (err) {
    next(err);
  }
});

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const locations = await locationService.getAll();
    return res.status(ok).json({ locations });
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = parseInt(req.params.id, 10);
    const location = await locationService.delete(id);
    return res.sendStatus(noContent)
  } catch (err) {
    next(err);
  }
});

export default router;
