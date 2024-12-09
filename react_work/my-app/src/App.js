import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Home = () => 
<>
-------------------
<h2>Home Page</h2>
</>

const About = () => 
<>
-------------------
<h2>About Page</h2>
</>

const Contact = () => 
<>
-------------------
<h2>Contact Page</h2>
</>



const Testcom2 = () => {
  const num = 20;
  return <div>num2 = {num}</div>;
};

const Testcom = () => {
  const num = 10;
  return <div>num = {num}</div>;
};

const Rut = () => {
  return (
    <Router>
      <div className="App">
        {/* 네비게이션 링크들 */}
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        {/* 라우팅 설정 */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

// 다중 내보내기
export { Testcom, Testcom2, Rut };
