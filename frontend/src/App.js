import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Quests from './pages/Quests';

import BackgroundImage from './images/mondstadt_bg.jpg'


function App() {
  return (
    <>
      <Router>
        <div className="container" style={{ background: `url('${BackgroundImage}') left top no-repeat` }}>
          <Header />
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
