'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const videos = ['/vid1.mp4', '/vid2.mp4', '/vid3.mp4'];

export default function Hero() {
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
      <div className="max-w-7xl mx-auto text-center">        
        {/* Logo */}
        <div className="absolute top-6 left-6">
          <Image src="/logo.png" alt="Dyfusion Logo" width={140} height={40} />
        </div>

        {/* Launch App Button absolute inset-0  */}
        <div className="absolute top-6 right-6">
          <Link
            href="#"
            className="bg-gradient-to-b from-[#C8F4FF] to-[#70D0FF] text-[#013243] px-5 py-2 rounded-full font-semibold shadow-lg hover:scale-105 transition"
          >
            Launch App
          </Link>
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg text-[#C8F4FF] font-[900]">
          Blockchain for Creatives
        </h1>

        <p className="text-lg md:text-xl text-[#e1f4ff] mb-10 font-medium">
          User-friendly design for creatives with an appreciating <br /> asset rewarding holders.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row justify-center gap-6 mb-12">
          <Link
            href="#mining"
            className="bg-gradient-to-b from-[#C8F4FF] to-[#70D0FF] text-[#013243] px-6 py-3 rounded-full text-lg font-semibold shadow-md hover:scale-105 transition"
          >
            Start Mining
          </Link>
        </div>

        {/* Center Video Frame */}
        <div className="relative w-full max-w-3xl mx-auto border-[6px] border-cyan-300 rounded-xl p-1 bg-[#00081a] shadow-[0_0_25px_5px_rgba(0,255,255,0.3)]">
          <video
            key={currentVideo}
            ref={videoRef}
            src={videos[currentVideo]}
            autoPlay
            muted
            loop
            playsInline
            className="rounded-xl w-full h-auto"
          />
        </div>
          <div className="flex flex-col md:flex-row justify-center gap-6 mt-15 mb-15">
          <Link
            href="#whitepaper"
            className="bg-gradient-to-b from-[#C8F4FF] to-[#70D0FF] text-[#013243] px-6 py-3 rounded-full text-lg font-semibold shadow-md hover:scale-105 transition"
          >
            Read Whitepaper
          </Link>
        </div>

        {/* Floating Side Icons */}
        <div className="absolute left-4 md:left-30 top-[5%] hidden md:block animate-float border-cyan-300 rounded-xl">
          <Image src="/left-icon.gif" alt="Icon Left" width={120} height={120}         
          className="left-0 w-60 h-60 md:w-72 md:h-72 rounded-full border-4 border-[#00ffff] bg-[#001933] shadow-[0_0_30px_#00ffff] z-10" />
        </div>
        <div className="absolute right-4 md:right-30 top-[10%] hidden md:block animate-float">
          <Image src="/right-icon.gif" alt="Icon Right" width={120} height={120}
          className="right-0 w-60 h-60 md:w-72 md:h-72 rounded-full border-4 border-[#00ffff] bg-[#001933] shadow-[0_0_30px_#00ffff] z-10"
          />
        </div>
      </div>
    </section>
  );
}
