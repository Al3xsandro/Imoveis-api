// Module routes from express
import { Router } from 'express';
const routes = Router();

// Controllers
import { userController } from './controllers/userController';
import { propertiesController } from './controllers/propertiesController';
import { authController } from './controllers/AuthController';
// Middlewares
import { authMiddleware } from './middleware/authMiddleware';

const user = new userController();
const authentication = new authController();
const properties = new propertiesController();

// Routes
routes.post('/register', user.create)
routes.post('/login', authentication.auth)

routes.post('/properties', authMiddleware, properties.create);
routes.put('/properties', authMiddleware, properties.update);
routes.delete('/properties', authMiddleware, properties.delete);

routes.get('/properties', authMiddleware, properties.get);

// export routes to app.ts
export { routes }