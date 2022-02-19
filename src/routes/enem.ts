import {Router} from 'express';
import * as enemController from '../controllers/enemController';

const router = Router();

router.get('/', enemController.main);
router.get('/numeric/:number', enemController.numeric);
router.post('/numeric', enemController.numericAction)
router.get('/listen', enemController.listen);

export default router;