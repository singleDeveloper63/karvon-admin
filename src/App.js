import React , { useState , useEffect } from 'react';
import './App.scss';
import { Dashboard, Login , Category , AddCategory, Blog, AddBlog, Banner, BannerAdd} from './pages';
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
            <Route exact path='/blog' component={ Blog }/>
            <Route exact path='/blog/add' component={ AddBlog }/>
            <Route exact path='/banner' component={Banner}/>
            <Route exact path='/banner/add' component={BannerAdd}/>
          </Switch>
        </AppLayout>
    </div>
  )
}

export default App;