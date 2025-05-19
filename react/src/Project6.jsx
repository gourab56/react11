export default function Project6() {
  return (
    <section className="bg-violet-600 text-white rounded-[60px] p-8 md:p-16" style={{ width: '92%', marginLeft: '3%' }}>
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Left side: Icon and Heading */}
        <div className="flex items-start gap-4 flex-1">
          {/* Icon */}
          <div className="bg-white/90 p-4 rounded-[20px]">
            {/* Replace with actual SVG or Image */}
            <svg className="w-12 h-12 -rotate-120">
                <path
      d="M0,20 A20,20 12,0,1 40,20 L20,20 Z"
      fill="#9333EA" />
            </svg>
          </div>

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight font-[clash]">
            Ready for a Website That<br />
            Actually Performs?
          </h2>
        </div>

        {/* Right side: Button */}
        <div className="flex flex-col items-end gap-4 flex-shrink-0 w-full md:w-auto">
          <hr className="w-full border-t border-black md:hidden" />
          
          <button className="bg-black text-white px-6 py-3 rounded-full text-base font-medium font-[satoshi]">
            Get a free quote
          </button>
        </div>
      </div>

      {/* Optional horizontal line on desktop */}
      <hr className="mt-6 border-t border-black hidden md:block" />
      <p className="text-black text-base font-[satoshi]">
            Sydney-based. Strategy-led. Easy to work with.
          </p>
    </section>
  );
}
