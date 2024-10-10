import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Book from './pages/Book';
import Workbook from './pages/Workbook';
import Author from './pages/Author';
import Suggest from './pages/Suggest';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/book' element={<Book />} />
                <Route path='/workbook' element={<Workbook />} />
                <Route path='/author' element={<Author />} />
                <Route path='/suggest' element={<Suggest />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
