// import logo from './logo.svg';
// import './App.css';
import react from "react";

import navbar from "../src/components/navbar";
import header from "../src/components/header";
import aboutMe from "../src/components/pages/about";
import footer from "../src/components/footer";

function App () {
    return (
        <div className="Application">
            <navbar />
            <header />
            <aboutMe />
            <footer />
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
