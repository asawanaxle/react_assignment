import './App.css';
import Blogs from './components/Blogs';
import Forms from './components/Forms';
import {BrowserRouter, Route, Routes,Router} from 'react-router-dom'; 
function App() {
  return (
    <div className="App">
      
      <h1 id="title">Blogging</h1>
      
      <Forms />
      <Blogs />
      
      
    </div>
  );
}

export default App;



