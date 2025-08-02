import Image from "next/image";
import Banner from "./components/Banner";

import Footer from "./components/Footer";

import AuthForms from "./components/AuthForms";

export default function Home() {
  return (
    <main>
    <AuthForms />
    <Banner />
    <Footer />
    </main>
  );
}
