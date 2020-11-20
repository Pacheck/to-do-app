export const add = (name, text) => {
  return {
    name: name,
    type: 'ADD',
    payload: text,
  };
};

export const edit = (name, index, text) => {
  return {
    name: name,
    type: 'EDIT',
    index: index,
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
