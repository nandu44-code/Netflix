import { Route ,Routes} from 'react-router-dom';
import Navbar from './components/NavBar';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
    <Route path="/" element={<Home />} />
    </Routes>
    </>
    

  );
}

export default App;
