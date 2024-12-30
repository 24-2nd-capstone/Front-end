import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Book from './pages/Book';
import Workbook from './pages/Workbook';
import Author from './pages/Author';
import Login from './pages/Login';
import Upload from './pages/Upload';
import Signup from './pages/Signup';


function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
                <Route path="/home" element={<Home />} />
                <Route path='/book' element={<Book />} />
                <Route path='/workbook' element={<Workbook />} />
                <Route path='/author' element={<Author />} />
                <Route path='/login' element={<Login />} />
                <Route path='/upload' element={<Upload />} />
                <Route path='/signup' element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
