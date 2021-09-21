import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Switch, Route, } from 'react-router';
import SearchList from './pages/search-list/search-list.component';
import JobDetail from './pages/job-detail/job-detail.component';

function App() {

  
  return (
    <div className="App">
      <Switch >
      <Route exact path='/' ><HomePage/> </Route>
      <Route exact path='/search' ><SearchList/> </Route>
      <Route exact path='/job-detail' ><JobDetail/> </Route>
      </Switch>  
    </div>
  );
}

export default App;
