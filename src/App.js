import { 
  BrowserRouter as Router,
  Switch,
  Route } from 'react-router-dom'
import Navbar from './components/Navbar'

import GifBrowser from './pages/GifBrowser'
import GifDetails from './pages/GifDetails'

function App() {

  return (
    <Router>
      <Navbar/>
      <div className="container">
        <Switch>
          
          <Route exact path="/">
            <GifBrowser />
          </Route>
          
          <Route path="/details/:id">
            <GifDetails />
          </Route>

        </Switch>
      </div>  
    </Router>
  )
}

export default App