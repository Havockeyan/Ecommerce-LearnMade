import Image from "next/image";
import Banner from "./components/Banner";

import Footer from "./components/Footer";

import SearchBar from "./components/SearchBar";
export default function Home() {
  return (
    <main>
    <SearchBar />
    <Banner />
    <Footer />
    </main>
  );
};

export default Page;