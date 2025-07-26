import Image from "next/image";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Signup from "./components/Login/Signup";
import Login from "./components/Login/Login";

export default function Home() {
  return (
    <main>
    <Signup />
    <Login/>
    <Banner />
    <Footer />
    </main>
  );
}
