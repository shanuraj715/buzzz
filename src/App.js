import './App.scss';
import { Switch, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

// APP PAGES
import Home from './Pages/Home/Home'
import Feeds from './Pages/Feeds/Feeds'
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'
import Page404 from './Pages/Page404/Page404'
import Friends from './Pages/Friends/Friends'

function App() {

  return (
    <>

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path='/feeds' exact component={Feeds} />
        <Route path='/login' exact component={Login} />
        <Route path='/register' exact component={Register} />
        <Route path="/friends" exact component={Friends} />
        <Route path='*' component={Page404} />
      </Switch>

      <Toaster position="bottom-left" reverseOrder={false} />
    </>
  );
}

export default App;