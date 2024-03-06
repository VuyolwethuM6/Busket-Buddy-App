import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Login from './components/Login/login'
import Splash from './components/Splash/Splash'

function App() {
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogin(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          {!showLogin && <Route path="/" element={<Splash />} />}
          {showLogin && <Route path="/" element={<Login />} />}
        </Routes>
      </div>
    </Router>
  );
}

export default App;





// import { useState, useEffect } from 'react';
// import { Route, Routes, Navigate } from 'react-router-dom';
// import './App.css'
// import Login from './components/Login/login'
// import Splash from './components/Splash/Splash'

// function App() {

//   const [showLogin, setShowLogin] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowLogin(true);
//     }, 3000);

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div className="App">
//       <Routes>
//         {!showLogin && <Route path="/" element={<Splash />} />}
//         {showLogin && <Route path="/" element={<Navigate to="/login" />} />}
//         <Route path="/login" element={<Login />} />
        
//       </Routes>
//     </div>
//   )
// }
// export default App
