import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';

//Importing components
import Categories from '../Categories';
import Finished from '../Finished';
import Category from '../Category';
import NotFound from '../NotFound';

import { IoMdPerson } from 'react-icons/io';
// import { BiTask } from 'react-icons/bi';
// import { TiStarFullOutline } from 'react-icons/ti';
// import { HiStar } from 'react-icons/hi';

import './App.css';

function App() {
  // const dispatch = useDispatch();

  // dispatch(
  //   create_category({
  //     name: 'Personal',
  //     icon: <IoMdPerson />,
  //     color: '#257bcc',
  //     tasks: [{ id: 'ebda@ea', text: 'Estudar!', categoryTask: 'Personal' }],
  //   })
  // );

  const testeReducer = useSelector((state) => state.testeTodos);

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Categories path="/" exact categories={testeReducer} />

          {testeReducer.map((category) => {
            return (
              <Category
                key={category.name}
                path={`/${category.name}`}
                tasks={category.tasks}
                categoryName={category.name}
                icon={<IoMdPerson size={23} />}
                color={category.color}
              />
            );
          })}

          <Route path="/finalizados" component={Finished} />

          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
