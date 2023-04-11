import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navs from './components/Navs/Navs';
import Create from './components/Create/Create';
import See from './components/See/See';
import Update from './components/Update/Update';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <Router>
      <Navs />
        <Routes>
          <Route path="/create" element={<Create />} />
          <Route path="/see" element={<See />} />
          <Route path="/update" element={<Update />} />
        </Routes>
      </Router>
    
  );
}

export default App;
