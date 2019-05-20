import { Router } from 'express';
import { createOne, getOne, getMany, updateOne } from './task.controller';
const router = Router();

router
  .route('/')
  .post( createOne)
  .get(getMany);

router
  .route('/:id')
  .get(getOne)
  .put(updateOne);
//   .delete(controllers.removeone);

export default router;

