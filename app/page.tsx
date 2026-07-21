import Navbar from "../components/layout/Navbar";
import Logo from "../components/common/Logo";
import Footer from "../components/layout/Footer";
import Contacts from "../components/layout/Contacts";
import Hero from "../components/home/Hero";


export default function Home() {
  return (
    <>
      <Navbar />

      {/* <main> */}
        <Hero/>
        
       
       
      {/* </main> */}
       <Contacts/>
        <Footer/>
    </>
  );
}