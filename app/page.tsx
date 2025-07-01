// app/page.tsx
import Image from "next/image";

import About from "./components/About";
import TweetToEarn from "./components/TweetToEarn";
import { Import } from "lucide-react";
import Hero from "./components/Hero";
import Tokenomics from "./components/Tokenomics";
import TaxDistribution from "./components/TaxDistribution";
import Roadmap from "./components/Roadmap";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      <div className="absolute inset-0  relative min-h-screen bg-[url('/grid-pattern.png')] z-0 text-white overflow-hidden px-4 py-20">
      <Hero />
      <About/>
      <TweetToEarn/>
      <Tokenomics/>
     
      </div>
    </main>
  );
}
