import React from 'react'
import Navbar from './Navbar';
import Home from './Home';
import Footer from './footer';
import contact from './Contact';
import About from './About';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import Api from './Api';


function App() {
  return (
  <>
 <Navbar />
 <switch>
      <Route path="/Home" component={Home} />  
      <Route path="/contact" component={contact} />  
      <Route path="/About" component={About} />  
      <Route path="/Api" component={Api} />  
       
 </switch>
 <Footer />
  </>
  );
}

export default App;
