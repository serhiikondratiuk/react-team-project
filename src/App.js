import './App.css';
import Logo from './components/Logo/Logo';
import Navigation from './components/Navigation/Navigation';
import Home from './pages/Home/Home';

function App() {
  return (
    <>
      <Logo children="Product" />
      <Navigation />
      <Home />
    </>
  );
}

export default App;
