import Image from "next/image";
import Banner from "./components/Banner";
import SearchBar from "./components/SearchBar";

export default function Home() {
  return (
    <main>
    <SearchBar />
    <Banner />
    
    </main>
  );
}
