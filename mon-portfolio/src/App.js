import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Header from './composants/Header'
import Footer from './composants/Footer'
import Home from './routes/Home';
import Projects from './routes/Projects'
import Skills from './routes/Skills'

function App() {
  return (
    <div className="App">
      <main className='main'>
        <Router>
          <Header/>
            <Routes>
              <Route path="/" exact Component={Home} />
              <Route path="/projects" Component={Projects} />
              <Route path="/skills" Component={Skills} />
              <Route path="*" Component={() => <Navigate to="/" />} />
            </Routes>
            <Footer/>
        </Router>
        <div className="background-animation">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
        </div>
      </main>
    </div>
  );
}

export default App;
