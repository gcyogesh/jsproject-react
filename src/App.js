// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './Header';
// import Main from './Main';
// import Footer from './Footer';
// import Contact from './Contact';
// import About from './About';
// import Service from './Service';



// function App() {
//   return (
//     <Router>
//         <Header />
//         <Routes>
//           <Route path="/" element={<Main />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/footer" element={<Footer />} />
//           <Route path="/Service" element={<Service />} />
//         </Routes>

//         <Footer />
//     </Router>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import Footer  from './Footer';
import Service  from './Service';
import About  from './About';
import Contact from './Contact';


function App(){
  return(
    <Router>
      <Header/>
      <Routes>
        <Route path='/'element={<Main/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/service' element={<Service/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}


export default App;
