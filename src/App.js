import './App.scss';
import { useState, useEffect } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import config from './config.json'

// APP PAGES
import Home from './Pages/Home/Home'
import Feeds from './Pages/Feeds/Feeds'
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'
import Page404 from './Pages/Page404/Page404'
import Friends from './Pages/Friends/Friends'
import EditProfile from './Pages/EditProfile/EditProfile'
import ViewProfile from './Pages/ViewProfile/ViewProfile'

function App() {

  const [isLogged, setIsLogged] = useState(false)

  useEffect(() => {

    fetch(`${config.API_URL}session/validate`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authtoken: window.getAuthToken()
      }
    }).then(res => {
      if (!res.status === 200) {
        throw new Error("")
      }
      return res.json()
    }).then(json => {
      if (json.status) {
        setIsLogged(!!json.logged)
      }
    })
      .catch(err => {
        console.log(err)
      })

  }, [])

  return (
    <>
      <Toaster position="bottom-left" reverseOrder={false} />

      <Switch>
        <Route path="/" exact render={() => <Redirect to={isLogged ? '/feeds' : '/login'} />} />
        <Route path='/feeds' exact component={Feeds} />
        <Route path='/login' exact component={Login} />
        <Route path='/register' exact component={Register} />
        <Route path="/friends" exact component={Friends} />
        <Route path="/profile/edit/" exact component={EditProfile} />
        <Route path='/profile/view/:id' exact component={ViewProfile} />
        <Route path='*' component={Page404} />

      </Switch>

    </>
  );
}

export default App;


