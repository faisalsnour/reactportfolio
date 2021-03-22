import './App.css';
import About from './components/About'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './components/Home'
// import About from './components/About'
import RecentProject from './components/RecentProjects'
import Footer from "./components/Footer"






function App() {
  return (
    <div >
      <Router>
        <div >
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route path="/recentprojects" component={RecentProject} />
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
