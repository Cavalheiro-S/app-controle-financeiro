import { Outlet } from 'react-router-dom';

import { Header } from './components/Header';
import { Home } from './components/Container';

function App() {
  return (
    <div className="App">
      <Header />
      <Home>
        <Outlet />
      </Home>
    </div>
  );
}

export default App;
