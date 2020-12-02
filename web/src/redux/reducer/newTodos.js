function createTodosReducer() {
  return function todos(state = [], action) {
    const { type, payload } = action;

    const ADD = 'ADD';
    const DELETE = 'DELETE';
    const EDIT = 'EDIT';
    const FINISH = 'FINISH';
    const FINISHED = 'FINISHED';
    const CREATE_CATEGORY = 'CREATE_CATEGORY';

    switch (type) {
      case ADD:
        return state.map((category) => {
          if (category.name !== payload.categoryTask) return category;

          return { ...category, tasks: [...category.tasks, payload] };
        });
      case EDIT:
        return state.map((category) => {
          if (category.name !== payload.categoryTask) return category;

          return {
            ...category,
            tasks: category.tasks.map((task) =>
              task.id === payload.id ? (task = payload) : task
            ),
          };
        });

      case DELETE:
        return state.map((category) => {
          if (category.name !== payload.categoryTask) return category;

          return {
            ...category,
            tasks: category.tasks.filter((task) => task.id !== payload.id),
          };
        });

      case FINISH:
        return state.map((category) => {
          if (category.name.toUpperCase() !== FINISHED) return category;

          return {
            ...category,
            tasks: category.tasks.concat(payload),
          };
        });
      case CREATE_CATEGORY:
        const existedCategory = state.find(
          (category) => category.name === payload.name
        );

        if (!existedCategory) return [...state, payload];

        return state;
      default:
        return state;
    }
  };
}

export default createTodosReducer;
