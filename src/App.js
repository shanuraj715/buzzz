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
import Loading from './Components/Loading/Loading'

function App() {

  const [isLogged, setIsLogged] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

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
      setIsLoading(false)
    })
      .catch(err => {
        console.log(err)
        setIsLoading(false)
      })

  }, [])

  return (
    <>
      {!isLoading ?
        <>
          <Toaster position="bottom-left" reverseOrder={false} />

          <Switch>
            <Route path="/" exact render={() => <Home isLogged={isLogged} />} />
            <Route path='/login' exact render={() => <Login isLogged={isLogged} />} />
            <Route path='/register' exact render={() => <Register isLogged={isLogged} />} />
            {/* {isLogged ? <> */}
            <Route path='/feeds' exact render={() => <Feeds isLogged={isLogged} />} />
            <Route path="/friends" exact render={() => <Friends isLogged={isLogged} />} />
            <Route path="/profile/edit/" exact render={() => <EditProfile isLogged={isLogged} />} />
            <Route path='/profile/view/:id' exact render={() => <ViewProfile isLogged={isLogged} />} />
            {/* </> : null} */}
            <Route path='*' component={Page404} />

          </Switch>
        </> : <Loading />}

    </>
  );
}

export default App;


