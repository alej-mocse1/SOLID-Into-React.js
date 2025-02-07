import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import HomePages from './pages/home/home';
import S from './pages/Principle_S/S';
import O from './pages/Principle_O/O';
import L from './pages/Principle_L/L';
import I from './pages/Principle_I/I';
import D from './pages/Principle_D/D';


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePages/>} />
          <Route path="/S" element={<S/>} />
          <Route path="/O" element={<O/>} />
          <Route path="/L" element={<L/>} />
          <Route path="/I" element={<I/>} />
          <Route path="/D" element={<D/>} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
