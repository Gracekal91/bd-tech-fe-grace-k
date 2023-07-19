import './assets/scss/App.scss';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from './components/Header'
import Overview from "./pages/Overview";
import UserProfile from "./pages/UserProfile";

// <div className="dwa-container">

function App() {
  return (
    <div className="App">
     <Header />
        <Router>
            <Routes>
                <Route path="/" element={<Overview />}/>
                <Route path="/profile" element={<UserProfile />}/>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
