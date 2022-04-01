import './App.css';
import { Switch, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { HelmetProvider } from 'react-helmet-async'
import Home from './Pages/Home/Home'
import Feeds from './Pages/Feeds/Feeds'
import Page404 from './Pages/Page404/Page404'

function App() {

  return (
    <>
      <HelmetProvider>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path='/feeds' exact component={Feeds} />

          {/* 404 PAGE */}
          <Route path='*' component={Page404} />
        </Switch>
      </HelmetProvider>

      <Toaster />
    </>
  );
}

export default App;