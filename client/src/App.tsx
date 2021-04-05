import './App.css'
import './i18n/i18n'

import { BrowserRouter as Router } from 'react-router-dom'

import { Nav } from './components/nav/nav'
import { Routes } from './Routes'

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes />
      </Router>
    </div>
  )
}

export default App
