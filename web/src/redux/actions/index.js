export const add = (payload) => {
  return {
    type: 'ADD',
    payload,
  };
};

export const edit = (payload) => {
  return {
    type: 'EDIT',
    payload,
  };
};

export const del = (payload) => {
  return {
    type: 'DELETE',
    payload,
  };
};

export const finish = (payload) => {
  return {
    type: 'FINISH',
    payload,
  };
};

export const create_category = (payload) => {
  return {
    type: 'CREATE_CATEGORY',
    payload,
  };
};
