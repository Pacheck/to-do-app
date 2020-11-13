import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';

//Importing components
import Nav from '../Nav';
import Landing from '../Landing';

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="container">
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Landing} />
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
