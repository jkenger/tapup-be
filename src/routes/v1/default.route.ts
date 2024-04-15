import express from 'express';
import { defaultController } from '../../controllers';

const router = express.Router();

router.route('/').get(defaultController.getDefault);

export default router;
