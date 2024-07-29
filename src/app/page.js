import DressStyle from "@/components/DressStyle";
import Hero from "@/components/hero";
import Navbar from "@/components/Navbar";
import NewArrivals from "@/components/newarrivals";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <NewArrivals />
      <div className="horizontal-line"></div>
      <NewArrivals />
      <DressStyle />
    </>
  );
}
