import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqItems = [
  {
    question: 'What exactly is DYFUSION?',
    answer:
      'DYFUSION is a user-friendly, scalable blockchain modeled after Ethereum PoS, built to reward holders through deflationary mechanics. It integrates AI in its DApps, lowers gas fees for creatives, and aims to evolve into digital energy by burning 50% of its supply, transforming into a non-inflationary store of value.'
  },
  {
    question: 'Why the name DYFUSION?',
    answer:
      'The name DYFUSION symbolizes the diffusion of finance, creativity, and technology into one seamless blockchain. It reflects the merging of DeFi, AI, and creator tools while also echoing “fusion,” meaning power, transformation, and convergence into a unified Web3 force.'
  },
  {
    question: 'Is this just another blockchain and coin?',
    answer:
      'No. DYFUSION isn’t just another blockchain. It’s a deflationary economic engine fused with AI-driven UX, creator-first tools, and gas-optimized infrastructure. With automated reflections, NFT integration, and validator devices, it’s built to unlock global adoption not mimic past chains.'
  },
  {
    question: 'What market problem does it solve?',
    answer:
      'DYFUSION solves the problems of technical barriers, inflationary tokens, and high gas fees by combining AI-powered UX, a 50% deflationary burn model, and creator-friendly low-cost infrastructure.'
  },
  {
    question: 'How does DYFUSION relate to thermodynamics?',
    answer:
      'DYFUSION’s burn model mimics nuclear decay and satisfies the First Law of Thermodynamics: once 50% of the coin supply is burned, no more can be created or destroyed, making it a form of conserved digital energy — a store of value powered by economic physics.'
  },
  {
    question: 'How does the 6-tier system activate?',
    answer:
      'The 6-tier system activates based on the Sell-Buy Ratio (SBR). As SBR shifts due to market activity, the system automatically adjusts tax distribution boosting reflections or burns to reward holders or defend price, depending on volatility.'
  },
  {
    question: 'Explain Reflections in detail.',
    answer:
      'Reflections are automated token rewards from taxes sent to Alpha and Gamma Miners. They\'re earned passively from each transaction, distributed based on tiered SBR logic, and delivered directly to mining wallets encouraging holding and rewarding early believers.'
  },
  {
    question: 'When do I receive reflections?',
    answer:
      "You receive reflections automatically during buy, sell, or transfer events involving the DYFUSION native coin if you're an Alpha or Gamma Miner. Reflections are sent to your mining wallet in real time, regulated by the active SBR tier."
  },
  {
    question: 'How are my reflection rewards calculated?',
    answer:
      'Reflection rewards are calculated based on the current SBR tier, your mining status (Alpha or Gamma), and your share of holdings. The higher the sell pressure (SBR), the more rewards you receive according to the tiered percentage allocation.'
  },
  {
    question: 'How does it counter whale dumps?',
    answer:
      'DYFUSION counters whale dumps using its SBR-based tax distribution: as sell pressure rises, burn rate drops and holder rewards increase, shifting value to committed holders. This disincentivizes large dumps and protects the price floor dynamically.'
  },
  {
    question: 'How does the tier system respond to market pressure?',
    answer:
      'The tier system adjusts based on the Sell-Buy Ratio (SBR). As selling increases, tiers shift upward, raising holder rewards and reducing burns to defend price. When buying returns, it rebalances, lowering rewards and increasing burns to tighten supply.'
  },
  {
    question: 'What should users know about crypto investment?',
    answer:
      'Users should know crypto is volatile, high-risk, and requires research. Projects like DYFUSION offer utility and deflationary models, but no gains are guaranteed. Invest only what you can afford to lose and always assess the fundamentals, not just hype.'
  }
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index:number) => {
    setActiveIndex(activeIndex === index ? 0 : index);
  };

  return (
    <section className="bg-black text-white py-24 px-6 mt-20 rounded-xl">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center text-4xl font-bold mb-12">Frequently Asked Questions</h2>
        {faqItems.map((faq, idx) => (
          <div key={idx} className="border-b border-gray-700 py-4">
            <button
              onClick={() => toggleFAQ(idx)}
              className="w-full text-left flex justify-between items-center focus:outline-none"
            >
              <span className="text-lg font-semibold">{faq.question}</span>
              <ChevronDown
                className={`w-5 h-5 transition-transform ${
                  activeIndex === idx ? 'rotate-180' : ''
                }`}
              />
            </button>
            {activeIndex === idx && (
              <p className="mt-4 text-sm text-gray-300 leading-relaxed">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
