"use client";

import { useEffect, useRef } from "react";

export default function ScrollProfilesSection() {
  const rowRefs = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)];

  useEffect(() => {
    const scrollRows = rowRefs.map((ref, index) => {
      let animationFrame: number;

      const scroll = () => {
        const el = ref.current;
        if (el) {
          const dir = index % 2 === 0 ? 1 : -1; // alternate direction
          el.scrollLeft += dir * 0.5;

          if (dir === 1 && el.scrollLeft >= el.scrollWidth / 2) {
            el.scrollLeft = 0;
          } else if (dir === -1 && el.scrollLeft <= 0) {
            el.scrollLeft = el.scrollWidth / 2;
          }
        }
        animationFrame = requestAnimationFrame(scroll);
      };

      animationFrame = requestAnimationFrame(scroll);
      return () => cancelAnimationFrame(animationFrame);
    });

    return () => scrollRows.forEach((cancel) => cancel());
  }, []);

  // Image paths (replace with your actual images in public/profiles/)
  const profiles = Array.from({ length: 60 }, (_, i) => `/placeholders/${i + 1}.png`);

  const rows = [
    profiles.slice(0, 20),
    profiles.slice(20, 40),
    profiles.slice(40, 60),
  ];

  return (
    <section className="bg-[#0b0d1b] mt-20 rounded-xl py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-12">
        {/* CTA Left Side */}
        <div className="bg-gradient-to-r text-center from-[#1c2a6d] to-[#111c44] rounded-2xl p-8 w-full md:w-1/3 text-white relative z-10">
          <h2 className="text-2xl font-semibold mb-4">
            Join the community of <br />
            <span className="text-white text-3xl font-bold">Creatives</span>
          </h2>
          <a
            href="https://t.me/dyfusionchain"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-blue-500 text-white font-medium rounded-full shadow-md hover:bg-blue-600 transition"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9.04 14.21L8.75 18.25c.43 0 .62-.18.84-.4l2-1.96 4.15 3.03c.76.42 1.3.2 1.49-.7l2.7-12.68c.27-1.22-.44-1.7-1.23-1.4L2.63 9.85c-1.18.46-1.17 1.13-.21 1.44l4.8 1.5L17.3 6.96c.41-.27.79-.12.48.17L9.04 14.21z" />
            </svg>
            Join Telegram Channel
          </a>
        </div>

        {/* Profiles Right Side */}
        <div className="w-full md:w-2/3 space-y-6">
          {rows.map((row, i) => (
            <div
              key={i}
              ref={rowRefs[i]}
              className="flex gap-4 overflow-x-hidden whitespace-nowrap"
              style={{
                maskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
              }}
            >
              {[...row, ...row].map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt={`profile-${idx}`}
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-2 border-gray-700 hover:scale-105 transition-transform"
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
