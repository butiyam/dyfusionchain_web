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

export default function TweetToEarn() {
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
       {/* Tweet to Earn Section */}
      <div className="relative z-10 mt-20 rounded-xl py-20 px-4 bg-gradient-to-b from-[#050e1d] to-[#0b1b2d] text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Tweet to Earn</h2>
            <p className="text-lg md:text-xl mb-6">
              Start earning free Dyfusion coins by tweeting about it.
              <br /> Join the Beta Army, Pre-TGE and start earning now.
            </p>
            <button className="px-6 py-2 bg-gradient-to-b from-[#c7f0ff] to-[#5a9adf] rounded-full shadow text-[#001933] font-semibold">
              Launch App
            </button>
          </div>

         {/* Tweet Slideshow */}
            <div className="relative flex items-center justify-center min-h-[260px]">
            {tweetImages.map((src, index) => {
                // Calculate previous and next indices for stacking
                
                const prev = (currentTweet + tweetImages.length - 1) % tweetImages.length;
                const next = (currentTweet + 1) % tweetImages.length;

                let className =
                'absolute transition-all duration-500 ease-in-out transform rounded-2xl shadow-xl';

                if (index === currentTweet) {
                className += ' opacity-100 scale-100 z-30';
                } else if (index === prev) {
                className += ' opacity-50 scale-90 -translate-x-32 z-20';
                } else if (index === next) {
                className += ' opacity-50 scale-90 translate-x-32 z-20';
                } else {
                className += ' opacity-0 scale-75 z-10';
                }

                return (
                <motion.div key={index} className={className}>
                    <div className="relative w-full h-full">
                    {/* Twitter Bird on top-left of center tweet */}
                    {index === currentTweet && (
                        <Image
                        src="/icons/twitter-bird.png"
                        alt="Twitter Bird"
                        width={50}
                        height={50}
                        className="absolute  right-30 animate-pulse z-40"
                        />
                    )}
                    <Image src={src} width={400} height={220} alt={`Tweet ${index + 1}`} />
                    </div>
                </motion.div>
                );
            })}

            {/* Pagination dots */}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
                {tweetImages.map((_, i) => (
                <div
                    key={i}
                    className={`w-3 h-3 rounded-full ${
                    i === currentTweet ? 'bg-white' : 'bg-gray-500'
                    } transition-all`}
                />
                ))}
            </div>
            </div>

        </div>
      </div>

    </section>
  );
}
