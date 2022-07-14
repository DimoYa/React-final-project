import { Header } from './components/common/header/Header';
import { Footer } from './components/common/footer/Footer';
// import { Landing } from './components/pages/landing/Landing';
import { Login } from './components/authentication/login/Login';

import './App.css';

function App() {
  
  return (
    <div>
      <Header />

      <Login />

      <Footer />
    </div>
  );
}

export default App;
