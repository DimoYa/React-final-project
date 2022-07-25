import { Routes, Route } from 'react-router-dom';

import { Header } from './components/common/header/Header';
import { Footer } from './components/common/footer/Footer';
import { Landing } from './components/pages/landing/Landing';
import { Register } from './components/authentication/register/Register';
import { Login } from './components/authentication/login/Login';
import { NotFound } from './components/pages/not-found/NotFound';
import { Profile } from './components/authentication/profile/view-profile/Profile';
import { EditProfile } from './components/authentication/profile/edit-profil/EditProfile';

import './App.css';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/user/register" element={<Register />} />
        <Route path="/user/login" element={<Login />} />
        <Route path="/user/profile" element={<Profile />} />
        <Route path="/user/profile/edit/:userId" element={<EditProfile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <ToastContainer/>
      <Footer />
    </div>
  );
}

export default App;
