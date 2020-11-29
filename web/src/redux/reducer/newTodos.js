function createTodosReducer() {
  // categoriasShape : [initialState, {...}, {...}, {...}]

  // return state.map((category) => {
  //   if (category.name === payload.categoryTask) {
  //     return Object.assign(
  //       {},
  //       { name: category.name },
  //       { tasks: [...category.tasks, payload] }
  //     );
  //   }
  //   return state;
  // });

  const initialState = [
    {
      name: 'personal',
      tasks: [
        {
          id: '1111',
          text: 'Estudar',
          categoryTask: 'personal',
        },
      ],
    },
    {
      name: 'starred',
      tasks: [
        {
          id: '2222',
          text: 'Focar em mim',
          categoryTask: 'starred',
        },
      ],
    },
    {
      name: 'finished',
      tasks: [
        {
          id: '3333',
          text: 'glub do starred',
          categoryTask: 'starred',
        },
      ],
    },
  ];
  return function todos(state = initialState, action) {
    const { type, payload } = action;
    //payload : id, text, categoryTask

    const ADD = 'ADD';
    const DELETE = 'DELETE';
    const EDIT = 'EDIT';
    const FINISH = 'FINISH';
    const CREATE_CATEGORY = 'CREATE_CATEGORY';

    switch (type) {
      case ADD:
        return state.map((category) => {
          if (category.name !== payload.categoryTask) return category;

          return { ...category, tasks: [...category.tasks, payload] };
        });
      case EDIT:
        return state.map((category) => {
          if (category.name !== payload.categoryTask) {
            return state;
          }
          return category.tasks.id === payload.id
            ? (category.tasks = payload)
            : category;
        });
      case DELETE:
        return state.map((category) => {
          return category.name === payload.categoryTask
            ? category.tasks.filter((task) => task.id !== payload.id)
            : category;
        });
      case FINISH:
        return state;
      case CREATE_CATEGORY:
        return state.concat(payload);
      default:
        return state;
    }
  };
}

export default createTodosReducer;
