import './assets/scss/App.scss';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from './components/Header'
import Overview from "./pages/Overview";
import UserProfile from "./pages/UserProfile";
import UserAccount from "./pages/UserAccount";
import Footer from "./components/Footer";

// <div className="dwa-container">

function App() {
  return (
    <div className="App">
     <Header />
        <Router>
            <Routes>
                <Route path="/" element={<Overview />}/>
                <Route path="/profiles/:id" element={<UserProfile />}/>
                <Route path="/account" element={<UserAccount />} />
            </Routes>
        </Router>
        <Footer />
    </div>
  );
}

export default App;
