// import logo from './logo.svg';
// import './App.css';
import React from "react";

import Navbar from "../src/components/navbar";
import Header from "../src/components/header";
import About from "../src/components/pages/about";
import Footer from "../src/components/footer";

function App () {
    return (
        <div className="Application">
            <Navbar />
            <Header />
            <About />
            <Footer />
        </div>
    );
}




// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
