import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './Footer';
import MyButton from './components/MyButton';
import Conditional from './components/Conditional';
import { useEffect } from 'react';
import Lifecyles from './components/Lifecyles.js';
import Click from './components/Click.js';
import Show from './components/ShowData.js';
import ShowRender from './components/ShowRender.js';

function App() {
  const nav = "ini halaman Header";
  const footerText = "ini adalah halaman footer";

  useEffect(() => {
    console.log("render!")
  } , [])

  return (
    <>
    <Navbar nav={nav}/>
    <Main main={"ini halaman main"}/>
    <Footer footerText={footerText}/>
    <MyButton/>
    <Conditional login={true} title={"Selamat datang"}/>
    <Lifecyles/>
    <Click/>
    <Show/>
    <ShowRender/>
    </>
  );
}

export default App;
