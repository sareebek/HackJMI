
import './App.css';
import Header from "./components/Header";
import Main from "./components/Main"
import Blogs from "./components/Blogs"
import Footer from './components/Footer';
import Tips from './components/Tips';
import Contact from './components/Tips';
import Schemes from './components/Contact';
import {
  BrowserRouter as Router,Routes,Route
} from "react-router-dom";

function App() {
  return (
   <> 
   <Router>
    <Header />
    <Routes>
          <Route exact path="/" element={<Main />}>  
          </Route>
          
          <Route exact path="/Blogs" element={<Blogs />}>  
          </Route>
          <Route exact path="/Tips" element={<Tips />}>  
          </Route>
          <Route exact path="/Schemes" element={<Schemes />}>  
          </Route>
          <Route exact path="/Contact" element={<Contact />}>
          </Route>
    </Routes>
    <Footer />
   </Router>
   </>
  );
}

export default App;
