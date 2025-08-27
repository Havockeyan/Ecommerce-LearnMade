import Image from "next/image";
import Banner from "./components/Banner";

import Footer from "./components/Footer";

import AuthForms from "./components/AuthForms";
import ProductReccomendation from "./components/ProductReccomendation";

export default function Home() {
  return (
    <main>
    <AuthForms />
    <Banner />
    <ProductReccomendation />
    <Footer />
    </main>
  );
};
