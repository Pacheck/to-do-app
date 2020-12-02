import { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

//Importing components
import CategoriesRoute from '../Categories';
import Finished from '../Finished';
import CategoryRoute from '../Category';
import NotFound from '../NotFound';
import AddTaskRoute from '../AddTask';
import AddCategoryRoute from '../AddCategory';

import { IoMdPerson } from 'react-icons/io';
import { BiTask } from 'react-icons/bi';
import { HiStar } from 'react-icons/hi';

import { create_category } from '../../redux/actions';

import './App.css';

function App() {
  const testeReducer = useSelector((state) => state.testeTodos);
  const dispatch = useDispatch();

  const initialState = [
    {
      name: 'Personal',
      icon: <IoMdPerson size={22} color={'257bcc'} />,
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
      icon: <HiStar size={22} color="#d6ca1a" />,
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
      icon: <BiTask size={22} color="#1f9e3b" />,
      color: '#1f9e3b',
      tasks: [],
    },
  ];

  useEffect(() => {
    initialState.forEach((category) => dispatch(create_category(category)));
  }, [testeReducer]);

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <CategoriesRoute path="/" exact categories={testeReducer} />

          {testeReducer.map((category) => (
            <CategoryRoute
              key={category.name}
              path={`/${category.name}`}
              tasks={category.tasks}
              categoryName={category.name}
              icon={category.icon}
              color={category.color}
              exact
            />
          ))}

          {testeReducer.map((category) => (
            <AddTaskRoute
              path={`/${category.name}/add-task/`}
              categoryName={category.name}
              key={category.name}
              exact
            />
          ))}

          <Route path="/add-category" component={AddCategoryRoute} />

          <Route path="/finalizados" component={Finished} />

          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
