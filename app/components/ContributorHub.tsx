import React from 'react';

const contributorData = [
  {
    title: 'PROMOTERS',
    description: `Do you have a following?\nApply to our Promoter hub and earn extra coins for posting content about Dyfusion.`,
    link: 'https://tally.so/r/wk4KE6'
  },
  {
    title: 'COUNTRY REPS',
    description: `Got influence in your region? Apply to our Country Rep Hub and earn exclusive rewards for growing the DYFUSION community in your country.`,
    link: 'https://tally.so/r/3x744d'
  },
  {
    title: 'BUILDERS',
    description: `Got a big idea or existing project? Apply to our Builder Hub and earn exclusive rewards for building or migrating your project on DYFUSION.`,
    link: 'https://tally.so/r/3NxMZb'
  },
  {
    title: 'VALIDATORS',
    description: `Want to become a Validators? Apply to our Validator Hub and earn rewards for helping secure the DYFUSION network.`,
    link: 'https://tally.so/r/3yb0o0'
  }
];

export default function ContributorHub() {
  return (
    <section className="bg-black py-28 px-6 text-white text-center mt-20 rounded-xl">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {contributorData.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <h3 className="text-2xl font-bold text-white drop-shadow-md mb-4 whitespace-pre-line">
              {item.title}
            </h3>
            <p className="text-sm leading-relaxed text-white mb-6 max-w-xs">
              {item.description}
            </p>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-400 to-purple-300 text-white px-8 py-2 rounded-full font-bold text-lg shadow-md hover:scale-105 transition-transform"
            >
              APPLY
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
