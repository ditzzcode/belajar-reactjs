import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './Footer';
import MyButton from './components/MyButton';
import Conditional from './components/Conditional';
import { useEffect } from 'react';
import GetName from './components/GetName';
import EventsObject from './components/EventsObj';
import ChangeInput from './ChangeInput';
import NoReload from './NoReload';

function App() {
  const nav = "ini halaman Header";
  const footerText = "ini adalah halaman footer";

  useEffect(() => {
    console.log("render!")
  } , [])

  const clicked = () => {
    alert("button di klick")
  }

  return (
    <>
    <Navbar nav={nav}/>
    <Main main={"ini halaman main"}/>
    <Footer footerText={footerText}/>
    <MyButton/>
    <Conditional login={true} title={"Selamat datang"}/>
    <button onClick={ () => clicked()}>Click me</button>
    <GetName name={"radit"}/>
    <EventsObject/>
    <ChangeInput/>
    <NoReload/>
    </>
  );
}

export default App;
