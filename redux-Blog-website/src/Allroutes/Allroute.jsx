import { Route, Routes } from 'react-router-dom';
import About from '../Components/About';
import Home from '../Components/Home';
import Blog from '../Components/Blog';
import Contact from '../Components/Contact';

export default function RoutesConfig() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
