
import Layout from "./componentes/Layout";
import Header from "./componentes/Header";
import Hero from "./componentes/Hero";

import Reservar from "./componentes/Reservar";
import Servicios from "./componentes/Servicios";
import Contacto from "./componentes/Contacto";
import Footer from "./componentes/Footer";
import Main from "./componentes/Main";
import  "./App.css"
function App() {
 

  return (
    <>
      <Layout>
        <Header/>
        <Main>
          <Hero/>
          {/* <Reservar/> */}
          <Servicios/>
          <Contacto/>
        </Main>
          <Footer/>
      </Layout>
    
     
     
    </>
  )
}

export default App
