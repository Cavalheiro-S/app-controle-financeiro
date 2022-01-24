import { Outlet } from 'react-router-dom';
import { ExpenseProvider } from './common/context/ExpenseContext';
import { InvestimentProvider } from './common/context/InvestimentContext';
import { Header } from './components/Header';
import { Home } from './components/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Home>
        <InvestimentProvider>
          <ExpenseProvider>
            <Outlet />
          </ExpenseProvider>
        </InvestimentProvider>
      </Home>
    </div>
  );
}

export default App;
