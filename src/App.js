import { Outlet } from 'react-router-dom';
import './App.css';
import Compositions from './pages/compositions';

function App() {
  return (
    <div className="App">
      {/* <Compositions /> */}
      <Outlet />
    </div>
  );
}

export default App;
