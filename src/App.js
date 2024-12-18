import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './Footer';
import MyButton from './components/MyButton';
import Conditional from './components/Conditional';
import { useEffect } from 'react';
import Layout from './compisition/Layout';
import Dialog from './compisition/Dialog';

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
    <Layout header={<h1>Header</h1> } footer={<p>Footer</p>}>
    <p>ini adalah kontent utama</p>
    <p>ini adalah children</p>
    </Layout>
    <Dialog
    title={"kelas king"}
    content={"Cupidatat enim sint adipisicing ea commodo. Laboris deserunt sint aliqua est eiusmod aute sit. Sint velit aliquip aute enim quis ea. Excepteur ea deserunt qui tempor exercitation labore tempor sit consequat aliqua veniam sit nulla in. Incididunt veniam dolore occaecat velit duis quis exercitation. Consequat ullamco ea consectetur proident Lorem magna. Duis enim cupidatat ipsum consequat velit ullamco ex voluptate eu proident."}
    action={"lorem ipsum"}

    />
    </>
  );
}

export default App;
