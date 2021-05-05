import { useEffect, useState } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";

import './App.css';

import HeaderContainer from './componets/HeaderContainer/HeaderContainer'
import BodyContainer from './componets/BodyContainer/BodyContainer'
import Details from './componets/Details/Details'
import BackDetails from './componets/BackDetails/BackDetails'

function App() {

  const dateList = (localStorage.getItem('List') || [])
  console.log(dateList);
  const dateListJson = JSON.parse(dateList)

  const [List, setList] = useState(dateListJson)

  return (
    <Router>

      <Switch>
        <Route path="/" exact render={() => {
          return (
            <div className='container'>
              <HeaderContainer List={List} setList={setList} />
              <BodyContainer List={List} setList={setList} />
            </div>
          )
        }} />
      </Switch>
      <Switch>
        <Route path="/:id" render={() => {
          return (
            <div className='container'>
              <BackDetails />
              <Details List={List} />
            </div>
          )
        }} />
      </Switch>
    </Router>
  );
}

export default App;
