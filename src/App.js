
import './App.css';
import Appbar from './components/Appbar'
import Word from './components/Word'
import Score from './components/Score'
import { ReactNotifications } from 'react-notifications-component'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Appbar/>
    <ReactNotifications/>
    <Router>
      <Routes>
        
        <Route path="/" element={<Word />} />
        <Route path="/score" element={<Score />} />
       
      </Routes>
    </Router>
  </div>
  );
}

export default App;

