import React from 'react';
import { motion } from 'framer-motion';

const roadmapData = [
  {
    title: 'IGNITION',
    date: 'July 2025',
    description:
      'Launch official website, Whitepaper v1.0, beta of Tweet2Earn mining app. Onboard builders, promoters, validators, and country reps.'
  },
  {
    title: 'ORBIT',
    date: 'August-September 2025',
    description:
      'Launch Testnet, core chain functions, and deploy tokenomics logic with validator incentives. Developer Portal & Documentation. Grow partnerships.'
  },
  {
    title: 'ASCENSION',
    date: 'September-October 2025',
    description:
      'Upgrade Testnet based on data and feedback. Launch 1st native dApps & protocols, add NFT support & cross-chain bridge. Finalize consensus tuning, fee model, pre-mainnet simulation.'
  },
  {
    title: 'LAUNCH',
    date: 'November-December 2025',
    description:
      'Mainnet Launch. Deploy native token, real-time reflections. Airdrop to miners, community, core team vesting. Global PR push, exchange listings, community growth.'
  }
];

export default function Roadmap() {
  return (
    <section className="bg-[#0e0e10] text-white py-20 px-4 relative overflow-hidden mt-20 rounded-xl">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-20 text-center">Roadmap</h2>
        <div className="relative">
          <div className="absolute left-1/2 top-0 w-16 h-full transform -translate-x-1/2 z-0">
            <svg viewBox="0 0 200 200" preserveAspectRatio="none" className="w-full h-full">
              <path d="M100,0 C200,0 200,100 100,100 C0,100 0,200 100,200" stroke="#ffffff" strokeWidth="20" fill="none" />
            </svg>
          </div>
          <div className="relative z-10 flex flex-col items-center space-y-20">
            {roadmapData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative w-full max-w-2xl p-6 rounded-xl shadow-md border border-gray-700 bg-[#1a1a1d] ${index % 2 === 0 ? 'ml-auto mr-8' : 'mr-auto ml-8'}`}
              >
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <img src="/roadmap-icon.png" width={250} height={250} alt="roadmap-icon" className="w-10 h-10 text-blue-400 animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold text-blue-300 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-400 mb-2">{item.date}</p>
                <p className="text-white text-base leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
