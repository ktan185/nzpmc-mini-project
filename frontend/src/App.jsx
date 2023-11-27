import './App.css'
import Registration from './components/Registration.jsX'

function App() {
  return (
    <div>
      <Registration />
      <button onClick={() => (window.location.href = '/viewing')}>
        Go to Viewing Page
      </button>
    </div>
  )
}

export default App
