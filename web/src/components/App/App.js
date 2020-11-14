import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';

//Importing components
import Nav from '../Nav';
import Landing from '../Landing';
import Starred from '../Starred';
import Finished from '../Finished';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <div className="container">
          <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/importante" component={Starred} />
            <Route path="/finalizados" component={Finished} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
