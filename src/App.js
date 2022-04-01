import './App.css';
import { Switch, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

import Home from './Pages/Home/Home'

function App() {

  return (
    <>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>

      <Toaster />
    </>
  );
}

export default App;