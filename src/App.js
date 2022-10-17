import 'materialize-css/dist/css/materialize.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './component/NavBar';
import Create from './Create';
import Home from './pages/Home';
// import M from 'materialize-css/dist/js/materialize.min.js'

function App() {
  return (
    
      <BrowserRouter>
      <NavBar />
      <br />
      <div className='container '>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create' element={<Create />} />
        </Routes>
        </div>
      </BrowserRouter>
    
  );
}

export default App;
