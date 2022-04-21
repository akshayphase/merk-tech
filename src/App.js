import './App.css';
import Page1 from './Page1.js';
import Page2 from './Page2.js';
import Page3 from './Page3.js';
import Page4 from './Page4.js';
import Page5 from './Page5.js';
import Page6 from './Page6.js';
import Page7 from './Page7.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">
      <div className="Gap" ></div>      
      <Switch>
       <Route exact path="/">
          <Page1 />
          <Page2 />
          <Page3 />
          <Page4 />
          <Page5 />
          <Page6 />
          <Page7 />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
