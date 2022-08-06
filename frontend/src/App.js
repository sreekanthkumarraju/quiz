
import './App.css';
import CreateQuestion from './components/CreateQuestion';
import {Route,Routes} from 'react-router-dom'
import Navbar from './components/Navbar';
import EditQuestion from './components/EditQuestion';
import Cards from './components/Cards';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path="/" element={<Cards/>}> </Route>
        <Route path="/CreateQuestion" element={<CreateQuestion/>}> </Route>
        <Route path="/editQuestion"   element={<EditQuestion/>} ></Route>
       
      </Routes>
      
    </div>
  );
}

export default App;
