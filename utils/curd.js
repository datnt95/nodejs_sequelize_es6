export const createOne = (model, body) => {
  try {
    return model.create(body);
  } catch (error) {
    throw error;
  }
};

export const getOne = (model, id ) => {
  try {
    return model.findOne({
      'where': {
        'id': id
      }
    });
  } catch (error) {
    throw error;
  }
};

export const getMany = (model, conditions) => {
  try {
    return model.findAll({
      'where': conditions
    });
  } catch (error) {
    throw error;
  }
};

export const updateOne = (model, id, body) => {
  try {
    return model.update(body, {
      'where': {
        'id': id
      }
    });
  } catch (error) {
    throw error;
  }
};
