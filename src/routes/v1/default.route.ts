import express from 'express';
import { defaultController } from '../../controllers';
import auth from '../../middlewares/auth';

const router = express.Router();

router.route('/').get(auth(), defaultController.getDefault);
router.route('/activated').get(auth('activated'), defaultController.getActivatedDefault);

export default router;
