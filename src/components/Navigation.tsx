import { Menu } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="max-w-7xl fixed top-4 mx-auto inset-x-0 z-50 w-[95%] lg:w-full">
      {/* Desktop Navigation */}
      <div className="hidden lg:block w-full">
        <div className="w-full flex relative justify-between px-4 py-2 rounded-full bg-transparent transition duration-200">
          <div className="flex items-center gap-4">
            <a
              className="font-normal flex space-x-2 items-center text-sm mr-4 text-black px-2 py-1 relative z-20"
              href="/"
            >
              <img
                alt="Creem Peach Icon"
                width="25"
                height="25"
                src="https://nucn5fajkcc6sgrd.public.blob.vercel-storage.com/creem-icon-peach-TUPs31vHVRGWsxVlbie6kdL0KyFBQC.svg"
              />
              <span className="font-medium text-white">Creem</span>
            </a>
            <nav className="relative z-10 flex max-w-max flex-1 items-center justify-center">
              <ul className="flex items-center gap-1">
                <a
                  className="flex items-center justify-center text-sm leading-[110%] px-4 py-2 rounded-md hover:bg-neutral-800 hover:text-primary text-primary"
                  href="/contact"
                >
                  Contact
                </a>
                <a
                  className="flex items-center justify-center text-sm leading-[110%] px-4 py-2 rounded-md hover:bg-neutral-800 hover:text-primary text-primary"
                  href="/pricing"
                >
                  Pricing
                </a>
                <a
                  className="flex items-center justify-center text-sm leading-[110%] px-4 py-2 rounded-md hover:bg-neutral-800 hover:text-primary text-primary"
                  href="/blog"
                >
                  Blog
                </a>
                <a
                  className="flex items-center justify-center text-sm leading-[110%] px-4 py-2 rounded-md hover:bg-neutral-800 hover:text-primary text-primary"
                  href="https://docs.creem.io/"
                >
                  Docs
                </a>
              </ul>
            </nav>
          </div>
          <div className="flex space-x-2 items-center">
            <a
              className="bg-neutral-900 relative z-10 hover:bg-black/90 border border-transparent text-white text-sm md:text-sm transition font-medium duration-200 rounded-full px-4 py-2 flex items-center justify-center shadow-[0px_-1px_0px_0px_#FFFFFF40_inset,_0px_1px_0px_0px_#FFFFFF40_inset]"
              href="/sign-in"
            >
              Login
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="flex h-full w-full items-center lg:hidden">
        <div className="flex justify-between bg-neutral-900 items-center w-full rounded-full px-2.5 py-1.5 transition duration-200">
          <a
            className="font-normal flex space-x-2 items-center text-sm mr-4 text-black px-2 py-1 relative z-20"
            href="/"
          >
            <img
              alt="Creem Peach Icon"
              width="25"
              height="25"
              src="https://nucn5fajkcc6sgrd.public.blob.vercel-storage.com/creem-icon-peach-TUPs31vHVRGWsxVlbie6kdL0KyFBQC.svg"
            />
            <span className="font-medium text-white">Creem</span>
          </a>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Menu className="text-white h-6 w-6" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;