import './App.css'
import Registration from './components/Registration.jsX'
import Viewing from './components/Viewing'

function App() {
  return (
    <div>
      <Registration />
      <button onClick={() => (window.location.href = '/viewing')}>
        Go to Viewing Page
      </button>
      <Viewing />
    </div>
  )
}

export default App
