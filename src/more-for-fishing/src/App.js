import { Routes, Route } from 'react-router-dom';

import { Header } from './components/common/header/Header';
import { Footer } from './components/common/footer/Footer';
import { Landing } from './components/features/landing/Landing';
import { Register } from './components/authentication/register/Register';
import { Login } from './components/authentication/login/Login';
import { NotFound } from './components/features/not-found/NotFound';
import { Profile } from './components/authentication/profile/view-profile/Profile';
import { EditProfile } from './components/authentication/profile/edit-profil/EditProfile';

import { ToastContainer } from 'react-toastify';
import { Admin } from './components/admin/Admin';
import { ArticleCreate } from './components/features/article/article-create/ArticleCreate';
import { ArticleList } from './components/features/article/article-list/ArticleList';

import './App.css';

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/user/register' element={<Register />} />
        <Route path='/user/login' element={<Login />} />
        <Route path='/user/profile/:userId' element={<Profile />} />
        <Route path='/user/profile/edit/:userId' element={<EditProfile />} />
        <Route path='/admin/user-management' element={<Admin />} />
        <Route path='/article/create' element={<ArticleCreate />} />
        <Route path='/article/list' element={<ArticleList />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

      <ToastContainer />
      <Footer />
    </div>
  );
}

export default App;
