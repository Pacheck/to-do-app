function createTodosReducer(counterName = '') {
  return function todos(state = [], action) {
    const { name, type, payload } = action;

    if (name !== counterName) {
      return state;
    }

    const ADD = 'ADD';
    const DELETE = 'DELETE';
    const EDIT = 'EDIT';
    const FINISH = 'FINISH';

    switch (type) {
      case ADD:
        return state.concat(payload);
      case EDIT:
        return state.map((item) =>
          item.id === payload.id ? (item = payload) : item
        );
      case DELETE:
        return state.filter((item) => item.id !== payload);
      case FINISH:
        return state.concat(payload);
      default:
        return state;
    }
  };
}

export default createTodosReducer;
