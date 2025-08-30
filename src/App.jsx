import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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
import  StudentDashboard  from './components/StudentDashboard';


function App() {
  return (
    <UserProvider>
      <Router>
        <AppContent />
      </Router>
    </UserProvider>
  );
}

// 👇 put the Navbar logic here, inside Router
function AppContent() {
  const location = useLocation();

  // hide navbar only on signup page (you can add /login too if you want)
  const hideNavbar = location.pathname === '/signup' || location.pathname === '/login';

  return (
    <>
      {!hideNavbar && <Navbar />}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<LoginForm />} />
        <Route path='/signup' element={<SignUpForm />} />
        <Route path='/forget-password' element={<ForgetPassword />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/learnmore' element={<LearnMore />} />
        <Route path='/student-dashboard' element={<StudentDashboard />} />
      </Routes>
    </>
  );
}

export default App;
