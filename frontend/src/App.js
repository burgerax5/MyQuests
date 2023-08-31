import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Quests from './pages/Quests';


function App() {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/quests' element={<Quests />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
