import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const words = ["AI Generators", "SaaS Startups"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(false);
      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        setIsAnimating(true);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const currentWord = words[currentWordIndex];

  return (
    <div className="max-w-7xl mx-auto px-4">
      <svg
        className="animate-spotlight pointer-events-none absolute z-[1] h-[30%] w-[138%] lg:w-[154%] opacity-0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 3787 2842"
        fill="none"
      >
        <g filter="url(#filter)">
          <ellipse
            cx="1924.71"
            cy="273.501"
            rx="1924.71"
            ry="273.501"
            transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)"
            fill="white"
            fillOpacity="0.21"
          />
        </g>
        <defs>
          <filter
            id="filter"
            x="0.860352"
            y="0.838989"
            width="3785.16"
            height="2840.26"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="151" result="effect1_foregroundBlur_1065_8" />
          </filter>
        </defs>
      </svg>

      <div className="flex flex-col min-h-screen pt-32 relative overflow-hidden">
        <div className="flex justify-center">
          <button className="bg-neutral-700 no-underline group cursor-pointer relative md:shadow-2xl shadow-zinc-900 rounded-full p-px text-[10px] sm:text-xs font-semibold leading-6 text-neutral-300 inline-block w-fit mx-auto">
            <div className="relative flex space-x-2 items-center z-10 rounded-full bg-neutral-800 py-1.5 px-4 ring-1 ring-white/10">
              <span>Save up to 50% on fees with our competitive pricing 🎉</span>
              <ArrowRight className="h-4 w-4" />
            </div>
          </button>
        </div>

        <h1 className="text-2xl md:text-4xl lg:text-8xl font-semibold max-w-6xl mx-auto text-center mt-6 relative z-10 drop-shadow-2xl">
          <div className="flex flex-row justify-center">
            <div className="drop-shadow-glowWhite whitespace-pre">Financial </div>
            <div>OS for</div>
          </div>
          <div className="mt-6">
            <div
              className={`inline-block text-left text-neutral-900 dark:text-neutral-100 px-2 relative z-10 drop-shadow-glowPrimary transition-all duration-500 ${
                isAnimating ? "opacity-100" : "opacity-0"
              }`}
            >
              {currentWord.split("").map((char, index) => (
                <span
                  key={index}
                  className="text-2xl md:text-4xl lg:text-8xl font-semibold max-w-6xl mx-auto text-center mt-6 relative z-10 text-primary"
                >
                  {char}
                </span>
              ))}
            </div>
          </div>
        </h1>

        <p className="text-center mt-6 text-base md:text-xl text-neutral-400 max-w-3xl mx-auto relative z-10 pt-6">
          Empowering small teams to achieve big business outcomes.
          <br />A complete financial infrastructure for the next generation of efficient companies.
          <br />
          <br />
          <strong className="text-primary">Built for the future of work.</strong>
        </p>

        <div className="flex items-center gap-4 justify-center mt-6 relative z-10">
          <a
            className="bg-neutral-900 relative z-10 hover:bg-black/90 border border-transparent text-white text-sm md:text-sm transition font-medium duration-200 rounded-full px-4 py-2 flex items-center justify-center shadow-[0px_-1px_0px_0px_#FFFFFF40_inset,_0px_1px_0px_0px_#FFFFFF40_inset]"
            href="/sign-in"
          >
            Get started for free 🍦
          </a>
          <a
            className="relative z-10 bg-transparent border border-transparent text-sm md:text-sm transition font-medium duration-200 rounded-full px-4 py-2 justify-center text-white hover:bg-neutral-800 hover:shadow-xl flex space-x-2 items-center group"
            href="/contact"
          >
            <span>Contact us</span>
            <ArrowRight className="group-hover:translate-x-1 h-3 w-3 transition-transform duration-200" />
          </a>
        </div>

        <div className="p-4 border bg-neutral-800 border-neutral-700 rounded-[32px] mt-20 relative">
          <div className="absolute inset-x-0 bottom-0 h-40 w-full bg-gradient-to-b from-transparent via-black/80 to-black scale-[1.1] pointer-events-none"></div>
          <div className="p-2 bg-black border-neutral-700 border rounded-[24px]">
            <img
              alt="header"
              width="1920"
              height="1080"
              className="rounded-[20px]"
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&h=1080&fit=crop"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center gap-3 mt-8">
        <a href="https://www.producthunt.com/products/creem" target="_blank">
          <img
            alt="productHunt"
            width="250"
            height="54"
            src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=1005303&theme=dark&period=daily"
          />
        </a>
        <a href="https://www.producthunt.com/products/creem" target="_blank">
          <img
            alt="productHunt"
            width="250"
            height="54"
            src="https://api.producthunt.com/widgets/embed-image/v1/top-post-topic-badge.svg?post_id=489575&theme=dark&period=monthly&topic_id=94"
          />
        </a>
      </div>
    </div>
  );
};

export default HeroSection;