import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './Home';
import Profile from './profile';
import Create from './Create';
import Threads from './Profiledetails/Threads';
import Replies from './Profiledetails/Replies';
import Login from './Login';
<<<<<<< HEAD
import Signup from './Signup';
=======
import SignUp from './SignUp';
>>>>>>> 2e598a3c50eae530fab424248e9de4e09fb1a791
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="Profile" element={<Profile />} />
          <Route path="Create" element={<Create />} />
          <Route path="Profile/Threads" element={<Threads />} />
          <Route path="Profile/Replies" element={<Replies />} />
          <Route path="Login" element={<Login />} />
<<<<<<< HEAD
          <Route path="Signup" element={<Signup />} />
=======
          <Route path="SignUp" element={<SignUp />} />
>>>>>>> 2e598a3c50eae530fab424248e9de4e09fb1a791
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);