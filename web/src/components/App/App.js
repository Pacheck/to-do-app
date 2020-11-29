import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';

//Importing components
import Categories from '../Categories';
import Finished from '../Finished';
import Category from '../Category';
import NotFound from '../NotFound';

import './App.css';

function App() {
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
