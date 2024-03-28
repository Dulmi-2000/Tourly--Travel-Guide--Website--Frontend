import Navbar from './layout/Navbar/Navbar';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import About from './pages/About/About';
import Gallery from './pages/Gallery/Gallery';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Destination from './pages/Destination/destination';
import Location from './pages/Location/Location';
import Footer from './pages/Footer/Footer';
import PopulorP from './pages/PopPlaces/PopulorP';
import HomeL from './pages/HomeL/HomeL';

function App() {
  return (
    <div className="App">
      <Router>

        <Navbar></Navbar>
        
      <Routes>
          <Route path='/About/About' element={<About />} />
          <Route path='/PopulorP/PopulorP' element={<PopulorP/>}></Route>
          <Route path="/Destination/Destination" element={<Destination />}></Route>
          <Route path='/Gallery/Gallery' element={<Gallery/>}></Route> 
          <Route path='/Login/Login' element={<Login />}></Route> 
          <Route path='/Signup/Signup' element={<Signup />}></Route> 
          <Route path='/Location/Location/:locationName' element={<Location />}></Route> 
          <Route path='/' element={<HomeL></HomeL>}></Route>
      </Routes>
      </Router>
     
      <Footer/>

    </div>
  );
}

export default App;
