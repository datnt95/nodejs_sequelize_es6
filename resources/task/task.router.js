import { Router } from 'express';
import { createOne } from './task.controller';
const router = Router();

// /api/list
router
  .post('/', createOne);

// /api/list/:id
// router
//   .route('/:id')
//   .get(controllers.getOne)
//   .put(controllers.updateOne)
//   .delete(controllers.removeone);

export default router;

