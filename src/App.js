import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import About from './Pages/About';
import Home from './Pages/Home';

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
