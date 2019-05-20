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

export const getOne = async (req, res) => {
  try {
    const task = await curd.getOne(models.Task, req.params.id);
    res.sendSuccess(task);
  } catch (error) {
    res.sendError(error);
  }
};

export const getMany = async (req, res) => {
  try {
    const tasks = await curd.getMany(models.Task);
    res.sendSuccess(tasks);
  } catch (error) {
    res.sendError(error);
  }
};

export const updateOne = async (req, res) => {
  try {
    const task = await curd.updateOne(models.Task, req.params.id, req.body);
    res.sendSuccess(task);
  } catch (error) {
    res.sendError(error);
  }
};
