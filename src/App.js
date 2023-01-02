import logo from './logo.svg'
import './App.css'

import { UseReducerComponent } from './UseReducerComponent/UseReducerComponent'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <UseReducerComponent initialCount={10}/>
      </header>
    </div>
  )
}

export default App
