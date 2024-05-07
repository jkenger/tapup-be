import express from 'express';
import { appController } from '../../controllers';
import { userController } from '../../controllers';
import auth from '../../middlewares/auth';

const router = express.Router();

router.route('/').get(auth(), appController.getDashboard);
router.route('/activated').get(auth('activated'), appController.getActivatedDefault);

export default router;
