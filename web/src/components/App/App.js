import { BrowserRouter, Route, Switch } from 'react-router-dom';

//Importing components
import Categories from '../Categories';
import Personal from '../Personal';
import Starred from '../Starred';
import Finished from '../Finished';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Categories} />
          <Route path="/personal" component={Personal} />
          <Route path="/importante" component={Starred} />
          <Route path="/finalizados" component={Finished} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
