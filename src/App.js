import './App.css';
import AppNavbar from './Components/AppNavbar';
import Home from './Pages/Home';
import {Route, Routes} from 'react-router-dom';
import FieldTable from './Components/FieldTable';

function App() {
  return (
    <div>
      <AppNavbar />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/temperature" element={<FieldTable name="Temperature" />}/>
        <Route exact path="/ph" element={<FieldTable name="pH" />}/>
        <Route exact path="/tds" element={<FieldTable name="TDS" />}/>
        <Route exact path="/turbidity" element={<FieldTable name="Turbidity" />}/>
      </Routes>
    </div>
    
  );
}

export default App;
