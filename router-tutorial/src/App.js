import React from 'react';
import {Route,Link,Switch} from 'react-router-dom'
import About from './About';
import HistorySample from './HistorySample';
import Home from './Home';
import Profiles from './Profiles'


function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li><Link to ="/profiles">profil list</Link></li>
        <li><Link to ="/history">history list</Link></li>
      </ul>
      <hr />
      <Switch>
      
      <Route path="/about" component={About} />
      <Route path="/profiles" component={Profiles}/>
      <Route path="/history" component={HistorySample}/>
      <Route path="/" component={Home} exact />
      <Route render={({location}) => <div>
        <h2>이페이지는 존재하지 않음</h2>
        <p>{location.pathname}</p>
        
      </div>
      } />
      </Switch>
    </div>
  );
}

export default App;
