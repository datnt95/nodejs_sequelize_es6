export const createOne = (model, body) => {
  try {
    return model.create(body);
  } catch (error) {
    throw error;
  }
};
