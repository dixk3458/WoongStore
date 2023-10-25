import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import { AuthContextProvider } from './contexts/AuthContext';

function App() {
  return (
    <AuthContextProvider>
      <Navbar />
      <Outlet />
    </AuthContextProvider>
  );
}

export default App;
