import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaSearch } from 'react-icons/fa';
import MyNav from './Components/MyNav';
import MyFooter from './Components/MyFooter';
import MyMain from './Components/Main';

function App() {
  return (
    <>
      <nav>
        <MyNav />
      </nav>
      <main>
        <MyMain />
      </main>
      <footer>
        <MyFooter />
      </footer>
    </>
  );
}

export default App;
