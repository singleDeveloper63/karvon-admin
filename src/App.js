import React , { useState , useEffect } from 'react';
import './App.scss';
import { Dashboard, Login , Category , AddCategory} from './pages';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap';
import { Switch , Route } from 'react-router-dom';
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
            <Route exact path='/categories/add' component={ AddCategory }/>
          </Switch>
        </AppLayout>
    </div>
  )
}

export default App;