import './App.css';
import Blogs from './components/Blogs';
import Forms from './components/Forms';
import {BrowserRouter, Route, Routes,Router} from 'react-router-dom'; 
function App() {
  return (
    <div className="App">
      
      <h1 id="title">Blogging</h1>
      
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Forms />}></Route>
      <Route path="/read_blogs" element={<Blogs />} />

      </Routes>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;



