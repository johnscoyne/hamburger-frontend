import { Application } from 'express';
import errorHandler from './api/error-handler';
import locationController from './api/location.controller';
import menuItemController from './api/menu-item.controller';
import orderController from './api/order.controller';

export default ({ app }: { app: Application }) => {
  app.use(function noCache(req, res, next) {
    res.header('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.header('Pragma', 'no-cache');
    res.header('Expires', '0');
    next();
  });
  app.use('/api/locations', locationController);
  app.use('/api/menu-items', menuItemController);
  app.use('/api/orders', orderController);
  app.use(errorHandler);
};