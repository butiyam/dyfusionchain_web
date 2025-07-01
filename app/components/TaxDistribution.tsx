import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Tooltip } from 'react-tooltip';

const tierColors = [
  'text-white',
  'text-green-400',
  'text-blue-400',
  'text-yellow-400',
  'text-orange-400',
  'text-red-400'
];

const tierData = [
  {
    tier: 'Tier 1: Accumulation',
    sbr: 'x < 0.5',
    alpha: 40,
    gamma: 25,
    burn: 35,
    rationale: 'Standard rewards for participation & strong deflation'
  },
  {
    tier: 'Tier 2: Consolidation',
    sbr: '0.5 > x < 0.8',
    alpha: 42,
    gamma: 28,
    burn: 30,
    rationale: 'Stabilizing to encourage holding and maintain momentum'
  },
  {
    tier: 'Tier 3: Equilibrium',
    sbr: '0.8 > x < 1.2',
    alpha: 45,
    gamma: 30,
    burn: 25,
    rationale: 'Neutral zone, supply & demand in balance. Priority shifts toward holders'
  },
  {
    tier: 'Tier 4: Pressure',
    sbr: '1.2 > x < 2.0',
    alpha: 48,
    gamma: 32,
    burn: 20,
    rationale: 'Soften sell pressure with more direct incentives'
  },
  {
    tier: 'Tier 5: Defense',
    sbr: '2.0 > x < 3.0',
    alpha: 57,
    gamma: 33,
    burn: 10,
    rationale: 'Maximum protection for long-term believers and defense of floor price'
  },
  {
    tier: 'Tier 6: Recovery',
    sbr: 'x > 3.0',
    alpha: 60,
    gamma: 35,
    burn: 5,
    rationale: 'Reignite community strength and rebuilding momentum'
  }
];

export default function TaxDistribution() {
  return (
    <section>
      <div className="relative z-10 py-20 px-4 bg-[#0a0a1a] mt-20 rounded-xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">Tax Distribution System</h2>
        {tierData.map((tier, idx) => (
          <div
            key={idx}
            className="bg-[#1a1a1d] p-6 rounded-xl mb-6 border border-gray-700 shadow-lg"
          >
            <h3 className={`text-2xl md:text-3xl font-semibold mb-2 ${tierColors[idx]}`}>{tier.tier}</h3>
            <p className="text-sm text-gray-400 mb-2">SBR: <span className="text-white font-medium">{tier.sbr}</span></p>

            {/* Graphical Bar */}
            <div className="relative h-6 w-full bg-gray-800 rounded-full overflow-hidden mb-4 flex">
              <motion.div
                className="h-full bg-green-500 flex items-center justify-start pl-2"
                style={{ width: `${tier.alpha}%` }}
                initial={{ width: 0 }}
                animate={{ width: `${tier.alpha}%` }}
                transition={{ duration: 0.8 }}
                data-tooltip-id="alpha-tip"
                data-tooltip-content="Alpha Miners"
              >
                <span className="text-xs text-black font-bold">{tier.alpha}%</span>
              </motion.div>
              <motion.div
                className="h-full bg-blue-500 flex items-center justify-start pl-2"
                style={{ width: `${tier.gamma}%` }}
                initial={{ width: 0 }}
                animate={{ width: `${tier.gamma}%` }}
                transition={{ duration: 0.8, delay: 0.2 }}
                data-tooltip-id="gamma-tip"
                data-tooltip-content="Gamma Miners"
              >
                <span className="text-xs text-white font-bold">{tier.gamma}%</span>
              </motion.div>
              <motion.div
                className="h-full bg-red-500 flex items-center justify-start pl-2"
                style={{ width: `${tier.burn}%` }}
                initial={{ width: 0 }}
                animate={{ width: `${tier.burn}%` }}
                transition={{ duration: 0.8, delay: 0.4 }}
                data-tooltip-id="burn-tip"
                data-tooltip-content="Burn Mechanism"
              >
                <span className="text-xs text-white font-bold">{tier.burn}%</span>
              </motion.div>
            </div>

            <div className="grid grid-cols-3 md:grid-cols-6 gap-4 text-sm">
              <div className="col-span-1">
                <p className="text-gray-400">Alpha Miners</p>
                <p className="text-white font-medium">{tier.alpha}%</p>
              </div>
              <div className="col-span-1">
                <p className="text-gray-400">Gamma Miners</p>
                <p className="text-white font-medium">{tier.gamma}%</p>
              </div>
              <div className="col-span-1">
                <p className="text-gray-400">Burn</p>
                <p className="text-white font-medium">{tier.burn}%</p>
              </div>
              <div className="col-span-3 md:col-span-3">
                <p className="text-gray-400">Rationale</p>
                <p className="text-white font-medium">{tier.rationale}</p>
              </div>
            </div>
          </div>
        ))}
        <Tooltip id="alpha-tip" />
        <Tooltip id="gamma-tip" />
        <Tooltip id="burn-tip" />
      </div>
    </section>
  );
}
