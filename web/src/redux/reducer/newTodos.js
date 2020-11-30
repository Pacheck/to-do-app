function createTodosReducer() {
  const initialState = [
    {
      name: 'Personal',
      icon: '',
      color: '#257bcc',
      tasks: [
        {
          id: '1111',
          text: 'Estudar',
          categoryTask: 'Personal',
        },
      ],
    },
    {
      name: 'Starred',
      icon: '',
      color: '#d6ca1a',
      tasks: [
        {
          id: '2222',
          text: 'Praticar tarefas',
          categoryTask: 'Starred',
        },
      ],
    },
    {
      name: 'Finished',
      icon: '',
      color: '#12962f',
      tasks: [],
    },
  ];
  return function todos(state = initialState, action) {
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
        return state.concat(payload);
      default:
        return state;
    }
  };
}

export default createTodosReducer;
