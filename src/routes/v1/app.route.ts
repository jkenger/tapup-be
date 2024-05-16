import express from 'express';
import { appController } from '../../controllers';
import auth from '../../middlewares/auth';
import validate from '../../middlewares/validate';
import appValidation from '../../validations/app.validation';

const router = express.Router();

router.route('/').get(auth(), appController.getDashboard);
router
  .route('/activate-card')
  .post(auth(), validate(appValidation.activateCard), appController.activateCard);

router.route('/tapup-cards').get(auth(), appController.getTapupCards);

export default router;
