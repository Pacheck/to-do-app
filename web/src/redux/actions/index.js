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
