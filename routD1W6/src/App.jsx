import { Outlet } from 'react-router-dom'; 
import Nav from './cobonent/Nav';

function App() {
  return (
    <div>
      <Nav /> 
      <div className="p-4">
        <Outlet />
      </div>
    </div>
  );
}

export default App;