
import './App.css';
import TopNavbar from './components/topNavbar';
import Navbar from './components/Navbar';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Footer from '../src/components/footer';

function App() {
  return (
 <>
 <TopNavbar/>
  <Navbar />
  <Footer id='foot' />
    
 </>
  );
}

export default App;
