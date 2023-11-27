import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Registration from './components/registration/Registration'
import Viewing from './components/viewing/Viewing'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/viewing" element={<Viewing />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
