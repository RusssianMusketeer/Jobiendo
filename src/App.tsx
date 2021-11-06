import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Switch, Route, } from 'react-router';
import SearchList from './pages/search-list/search-list.component';
import JobDetail from './pages/job-detail/job-detail.component';
import {HomePageProvider} from './context/HomePageContext';
import ScrollToTop from './components/scroll-to-top/scroll-to-top.component';
import Footer from './components/footer/footer.component';
import CompanySearch from './pages/company-search/company-search.component';
import CompanyDetail from './pages/company-detail/company-detail.component';

function App() {

    
  return (
    
    <div className="App"> 
    <div className="max-width">
    <HomePageProvider>
    <ScrollToTop/>
      <Switch >
      <Route exact path='/' ><HomePage/> </Route> 
      <Route exact path='/search'><SearchList/></Route> 
      <Route exact path='/job-detail' ><JobDetail/> </Route>
      <Route exact path='/company'><CompanySearch/></Route>
      <Route exact path='/company-detail'><CompanyDetail/></Route>
      </Switch>
      </HomePageProvider>
      </div>
      <Footer/>  
      
      
    </div>
  );
  
}

export default App;
