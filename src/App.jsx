import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import Navbar from './components/Navbar';
import ForgetPassword from './components/ForgetPassword';
import Dashboard from './components/Dashboard';
import { UserProvider } from './components/UserContext';
import LearnMore from './components/LearnMore';
import UsersPage from './components/UsersPage';

function App() {
  return (
    <UserProvider>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<LoginForm />} />
        <Route path='/signup' element={<SignUpForm />}/>
        <Route path='/forget-password' element={<ForgetPassword />}/>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/learnmore' element={<LearnMore />} />
        <Route path='/userspage' element={<UsersPage />} />
      </Routes>      
    </Router>
    </UserProvider>
  );
}

export default App;
