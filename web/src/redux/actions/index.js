export const add = (name, payload) => {
  return {
    name: name,
    type: 'ADD',
    payload,
  };
};

export const edit = (name, payload) => {
  return {
    name: name,
    type: 'EDIT',
    payload,
  };
};

export const del = (name, id) => {
  return {
    name: name,
    type: 'DELETE',
    payload: id,
  };
};

export const finish = (name, payload) => {
  return {
    name: name,
    type: 'FINISH',
    payload,
  };
};
