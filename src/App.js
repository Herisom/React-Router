import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams
} from 'react-router-dom';

function Home() {
  return <h1>Strona główna</h1>;
}
 
function About() {
  return <h1>O nas</h1>;
}
 
function Contact() {
  return <h1>Kontakt</h1>;
}
 
const User = () => {
  const { name } = useParams();
  return <h1>Witaj, {name}!</h1>;
}
 
function NotFound() {
  return <h1>404 – Nie znaleziono strony</h1>;
}
 
function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Strona główna</Link>
            </li>
            <li>
              <Link to="/about">O nas</Link>
            </li>
            <li>
              <Link to="/contact">Kontakt</Link>
            </li>
          </ul>
        </nav>
 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/user/:name" element={<User />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}
 
export default App;