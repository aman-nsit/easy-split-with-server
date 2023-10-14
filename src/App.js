import {BrowserRouter , Route , Routes , Link} from 'react-router-dom';
import SignupPage from './components/SignupPage';
import LoginPage from './components/LoginPage';
import LogoutPage from './components/LogoutPage';
import Home from './components/Home';
import RequireAuth from './components/RequireAuth';
import Header from "./components/Header"
import './App.css' ;
function App() {

  return (
    <div className='App'>
      <Header />
      <ul>
        <li>
          <Link to="signup" >Signup</Link>
        </li>
        <li>
          <Link to="login" >LogIn</Link>
        </li>
        <li>
          <Link to="logout" >LogOut</Link>
        </li>
        <li>
          <Link to="home" >Home</Link>
        </li>
      </ul>
      <BrowserRouter>
        <Routes>
          <Route index element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          } />
          <Route path="/login" element = {<LoginPage />} />
          <Route path="/signup" element = {<SignupPage />} />
          <Route path="/logout" element = {<LogoutPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
