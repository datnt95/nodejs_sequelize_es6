import * as curd from '../../utils/curd';
import models from '../../utils/db';

export const createOne = async (req, res) => {
  try {
    const task = await curd.createOne(models.Task, req.body);
    res.sendSuccess(task);
  } catch (error) {
    res.sendError(error);
  }
};
