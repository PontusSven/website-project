import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home.jsx'
import Navbar from '../components/Navbar/index.jsx'

function App() {

  return (
   <Routes>
    <Route path="/" element={<Navbar />} >
      <Route index element={<Home />} />
      <Route path="faq" element={<div>faq</div>} />
    </Route>
   </Routes>
  )
}

export default App
