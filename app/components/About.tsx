'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const videos = ['/vid1.mp4', '/vid2.mp4', '/vid3.mp4'];

export default function About() {
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

  return (
    <section>
      {/* Section Two - What is Dyfusion */}
      <div className="bg-[#0b0e13] text-white py-16 px-4 md:px-12 text-center rounded-xl">
        <h2 className="text-3xl md:text-5xl font-bold">What is Dyfusion?</h2>
        <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
          Dyfusion is a Blockchain modeled after the Ethereum PoS consensus layer with user-friendliness,
          scalability and deflationary mechanics that rewards holders.
        </p>

        {/* Features Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto text-left">
          <div>

            <h3 className="text-xl font-semibold flex items-center gap-2">
                <Image src="/burn.png" width={190} height={190} alt="burn-icon" /> 50% Burn
            </h3>
            <p className="mt-2">
              A fixed 5% taxes on all transactions help us gradually burn 50% of supply. This encourages buy pressure,
              tightens supply, protects price floor and makes it an appreciating asset.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <Image src="/reflections.png" width={190} height={190} alt="reflections-icon" /> Reflections
            </h3>
            <p className="mt-2">
              From taxes, holders (Alpha and Gamma) are paid reflections as an incentive to encourage holding,
              an ROI to reward early believers.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <Image src="/ease.png" width={190} height={190} alt="ease-icon" /> Ease
            </h3>
            <p className="mt-2">
              We have apps and incorporated into our DApps are AI tech to truncate the technical barrier between
              non-technical people and crypto. All reflections and allocations are also automated.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <Image src="/gas.png" width={190} height={190} alt="gas-icon" /> Lower Gas
            </h3>
            <p className="mt-2">
              Lowering gas fees empowers creatives to explore and build without limitations.
              Making this chain scalable.
            </p>
          </div>
        </div>

        <button className="mt-10 px-6 py-2 bg-gradient-to-b from-[#c7f0ff] to-[#5a9adf] rounded-full shadow text-[#001933] font-semibold">
          <Link
            href="/whitepaper.pdf"
          >  Read Whitepaper
          </Link>
        </button>

        <p className="mt-6 text-sm text-white/70">
          Migrate from DeFi and join us on DyFi - Dyfusion Finance
        </p>
      </div>
    </section>
  );
}
