import './App.css';
import About from './components/About'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './components/Home'
// import About from './components/About'
import RecentProject from './components/RecentProjects'
// import Footer from "./components/Footer"
import Foooter from "./components/Foooter"
import Wrapper from "./components/Wrapper"

function App() {
  return (
    <Router>
      <Navbar />
      <Wrapper>
        <Route exact path="/reactportfolio/" component={Home} />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route path="/recentprojects" component={RecentProject} />
      </Wrapper>
      <Foooter />

      {/* <Foooter /> */}
    </Router>
  );
}

export default App;
