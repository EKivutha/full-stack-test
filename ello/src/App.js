import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams
} from "react-router-dom";

import Books from './books/reading';
//add routing 

const App = () => (

    <div>
      <Router>
        <Routes>
        <Route path="/book/:idr" element={<Books />}/>
        </Routes>
      </Router>
      {/* <Books/> */}
    </div>
);

export default App;
