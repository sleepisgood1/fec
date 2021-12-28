import * as React from "react";
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import Initial from './components/Initial.jsx';
import NoMatch from './components/NoMatch.jsx';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
  useParams
} from "react-router-dom";

var routes = (
  <Router>
     <Routes>
      <Route exact path='/' element={<Initial/>}></Route>
      <Route exact path=':id' element={<App />}></Route>
      <Route path="*" element={<NoMatch />} />
    </Routes>
  </Router>
);

ReactDOM.render(routes, document.getElementById('app'));

