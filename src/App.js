import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './Footer';
import MyButton from './components/MyButton';

function App() {
  const nav = "ini halaman Header";
  const footerText = "ini adalah halaman footer";

  return (
    <>
    <Navbar nav={nav}/>
    <Main main={"ini halaman main"}/>
    <Footer footerText={footerText}/>
    <MyButton/>

    </>
  );
}

export default App;
