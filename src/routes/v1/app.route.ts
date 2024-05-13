import express from 'express';
import { appController } from '../../controllers';
import auth from '../../middlewares/auth';

const router = express.Router();

router.route('/').get(auth(), appController.getDashboard);

export default router;
