// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import NavigationBar from './components/Navbar';
import PostDetail from './components/PostDetail'; 
import PostList from './components/PostList'; 
import About from './components/About';
import Footer from './components/Footer'; 
import Carousel from './components/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css'; 


const App = () => {
  return (
    <Router>
      <NavigationBar />
      <div style={{ paddingTop: '70px' }}>
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/postagens" element={<PostList />} />
        <Route path="/postagem/:id" element={<PostDetail />} />
        <Route path="/About" element={<About />} />
      </Routes> 
      </div>
      <Footer />
    </Router>
  );
};

export default App;
