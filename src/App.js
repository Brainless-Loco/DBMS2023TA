import { BrowserRouter } from 'react-router-dom';
import './App.css';
import MainDiv from './components/Main/MainDiv';

function App() {
  return (
    <BrowserRouter>
      <MainDiv/>
    </BrowserRouter>
    
  );
}

export default App;
