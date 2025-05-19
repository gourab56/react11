import React from 'react';

export default function AboutUs() {
  return (
    <section className="text-center px-4 py-16">
      {/* Title and Description */}
      <h2 className="text-5xl font-medium mb-6 font-[clash]">About Us</h2>
      <p className="max-w-2xl mx-auto text-lg leading-relaxed text-black/80 font-[satoshi]">
        We’re a team of digital natives specialising in high-end professional websites,
        mobile applications, and digital experiences. Combining strategy, creative and
        technology, we always put the user first!
      </p>

      {/* Learn More Link */}
      <div className="mt-8">
        <a
          href="#"
          className="inline-flex items-center text-lg font-[satoshi] underline font-medium hover:opacity-80"
        >
          Learn more about us
        </a>
      </div>

      {/* Floating Buttons */}
      <div className="flex flex-wrap justify-center gap-0 mt-16">
        {[
          { label: 'E-Commerce', color: 'bg-violet-500', rotate: '-rotate-[25deg]', text: 'text-white' },
          { label: 'Banner Design', color: 'bg-orange-400', rotate: '-rotate-[0eg]', text: 'text-black' },
          { label: 'Electronic Mail', color: 'bg-indigo-900', rotate: 'rotate-[15deg]', text: 'text-white' },
          { label: 'Mobile Websites', color: 'bg-sky-500', rotate: 'rotate-[15deg]', text: 'text-black' },
          { label: 'Strategy', color: 'bg-violet-500', rotate: 'rotate-[0deg]', text: 'text-white' },
          { label: 'Lead Generation', color: 'bg-indigo-900', rotate: '-rotate-[15deg]', text: 'text-white' },
          { label: 'Ad Campaigns', color: 'bg-green-500', rotate: 'rotate-[15deg]', text: 'text-black' },
          { label: 'Engagement', color: 'bg-orange-400', rotate: 'rotate-[5deg]', text: 'text-black' },
        ].map((tag, idx) => (
          <button
            key={idx}
            className={`text-lg font-[satoshi] px-6 py-4 rounded-full shadow-md ${tag.color} ${tag.text} ${tag.rotate}`}
          >
            {tag.label}
          </button>
        ))}
      </div>
    </section>
  );
}
