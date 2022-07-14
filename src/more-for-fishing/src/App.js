import { Header } from './components/common/header/Header';
import { Footer } from './components/common/footer/Footer';
import { Landing } from './components/pages/landing/Landing';
import { Register } from './components/authentication/register/Register';

import './App.css';

function App() {
  
  return (
    <div>
      <Header />

      <Landing />

      <Footer />
    </div>
  );
}

export default App;
