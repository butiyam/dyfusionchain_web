'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import TaxDistribution from './TaxDistribution';
import Roadmap from './Roadmap';
import ContributorHub from './ContributorHub';
import FAQSection from './FAQSection';
import Communityl from './Community';
import Community from './Community';

const videos = ['/vid1.mp4', '/vid2.mp4', '/vid3.mp4'];

export default function Tokenomics() {
  const [currentVideo, setCurrentVideo] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const tweetImages = ['/mock/tweet1.png', '/mock/tweet2.png', '/mock/tweet3.png'];
  const [currentTweet, setCurrentTweet] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
      setCurrentTweet((prev) => (prev + 1) % tweetImages.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {});
    }
  }, [currentVideo]);

  return (<>
    <section>
      {/* TOKENOMICS Section  */}
       <div className="relative z-10 py-20 px-4 bg-[#0a0a1a] rounded-xl mt-20 text-white text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">TOKENOMICS</h2>
        <p className="text-lg mb-2 text-gray-400">Total Supply</p>
        <p className="text-2xl font-bold mb-10">TBD</p>

        <div className="max-w-6xl mx-auto  grid grid-cols-1 md:grid-cols-3 gap-y-6 gap-x-10 text-left">
          <div>
            <p className="text-gray-400">COIN ALLOCATION</p>
            <p><strong>Miners</strong>: 33.3%<br />Dyfusion Community Airdrop</p>
            <p><strong>Marketing</strong>: 15%<br />For visibility and user acquisition</p>
            <p><strong>Expansion</strong>: 12%<br />For ecosystem devs, partnerships, BD and growth</p>
            <p><strong>Team</strong>: 10%<br />To retain and incentivize core builders</p>
            <p><strong>Liquidity</strong>: 18%<br />For DEX/CEX pools creation and easy trading</p>
            <p><strong>Reserve</strong>: 11.7%<br />Long-term sustainability, new developments</p>
          </div>
          <div>
            <p className="text-gray-400">TAXES</p>
            <p><strong>Buy Tax</strong>: 5%</p>
            <p><strong>Sell Tax</strong>: 5%</p>
            <p><strong>Transfer Tax</strong>: 5%</p>
          </div>
          <div className="bg-[#001933] border border-[#00ffff] p-4 rounded-xl text-sm shadow-[0_0_20px_#00ffff]">
            <p className="text-[#00ffff]">
              Taxes are fixed and are completely abolished after 50% of total supply burn is achieved.<br />
              <br />
              Only Alpha Miners and Gamma Miners will receive reflections after the Airdrop. Reflections will be sent to their mining wallets.
            </p>
          </div>
        </div>
      </div>

    </section>
          <TaxDistribution/>
          <Roadmap/>
          <ContributorHub/>
          <Community/>
          <FAQSection/>
          </>
  );
}
