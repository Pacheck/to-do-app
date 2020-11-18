function createTodosReducer(counterName = '') {
  return function todos(state = [], action) {
    const { name, type, payload } = action;

    if (name !== counterName) {
      return state;
    }

    const ADD = 'ADD';
    const DELETE = 'DELETE';
    const EDIT = 'EDIT';

    switch (type) {
      case ADD:
        return state.concat(payload);
      case EDIT:
        return state;
      case DELETE:
        return state.filter((item, index) => index != payload);
      default:
        return state;
    }
  };
}

export default createTodosReducer;
