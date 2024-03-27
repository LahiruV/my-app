import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Profile from './components/Profile';
import Specials from './components/Specials';
import SmallScaleFarmingInfo from './components/SmallScaleFarmingInfo';



function App() {
  return (
    <Router>
      <Routes>        
        <Route path="/" element={<HomePage />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Specials" element={<Specials />} />
        <Route path="/SmallScaleFarmingInfo" element={<SmallScaleFarmingInfo />} />
       
      </Routes>
    </Router>
  );
}

export default App;
