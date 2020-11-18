export const add = (name, text) => {
  return {
    name: name,
    type: 'ADD',
    payload: text,
  };
};

export const edit = (name, text) => {
  return {
    name: name,
    type: 'EDIT',
    payload: text,
  };
};

export const del = (name, index) => {
  return {
    name: name,
    type: 'DELETE',
    payload: index,
  };
};
