import React , { useState , useEffect } from 'react';
import './App.scss';
import { Dashboard, Login , Category} from './pages';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap';
import { Switch , Route , Redirect} from 'react-router-dom';
import { AppLayout } from './components';

function App(){
  const [isLogged,setIsLogged] = useState(false);


  useEffect(() => {
    if(localStorage.getItem("token")) setIsLogged(true)
    else setIsLogged(false);
  },[])


  if(!isLogged){
    return(
      <Login/>
    )
  }

  return(
    <div>
        <AppLayout>
          <Switch>
            <Route exact path='/' component={ Dashboard } />
            <Route exact path='/dashboard' component={ Dashboard }/>
            <Route exact path='/categories' component={ Category }/>
          </Switch>
        </AppLayout>
    </div>
  )
}

export default App;