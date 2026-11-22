import { useState } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contacts from './pages/Contacts.jsx';

export default function App() {
  const [page, setPage] = useState('home');
  return <>
    <Header page={page} setPage={setPage} />
    <main>{page === 'home' ? <Home setPage={setPage} /> : page === 'about' ? <About /> : <Contacts />}</main>
    <Footer setPage={setPage} />
  </>;
}
