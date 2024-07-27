import NavBar from './components/NavBar/NavBar';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/root';

import './App.css';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div className="app">
      <NavBar />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;
