import './App.css';
import About from './components/About'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './components/Home'
// import About from './components/About'
import Contact from './components/Contact'
import RecentProject from './components/RecentProjects'






function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route path="/recentprojects" component={RecentProject} />
      </div>
    </Router>
  );
}

export default App;
