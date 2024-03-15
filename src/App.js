import Navbar from './layout/Navbar/Navbar';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from './pages/Home/Home';
import Popular from './pages/Popular/Popular';
import About from './pages/About/About';
import Blog from './pages/Blog/Blog';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Destination from './pages/Destination/destination';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar></Navbar>
      <Routes>
          <Route path='/About/About' element={<About />} />
          <Route path='/Popular/Popular' element={<Popular/>}></Route>
          <Route path="/Destination/Destination/:locationName" element={<Destination />}></Route>
          <Route path='/Blog/Blog' element={<Blog/>}></Route> 
          <Route path='/Login/Login' element={<Login />}></Route> 
          <Route path='/Signup/Signup' element={<Signup />}></Route> 
          <Route path='/' element={<Home></Home>}></Route>
      </Routes>
      </Router>

    </div>
  );
}

export default App;
