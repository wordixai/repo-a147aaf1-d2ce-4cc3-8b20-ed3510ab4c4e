const GlobalPresence = () => {
  const countries = [
    { code: "us", name: "United States" },
    { code: "br", name: "Brazil" },
    { code: "ca", name: "Canada" },
    { code: "de", name: "Germany" },
    { code: "in", name: "India" },
    { code: "gb", name: "United Kingdom" },
    { code: "cn", name: "China" },
    { code: "jp", name: "Japan" },
    { code: "kr", name: "South Korea" },
    { code: "sg", name: "Singapore" },
    { code: "au", name: "Australia" },
    { code: "za", name: "South Africa" },
  ];

  return (
    <section className="mx-auto w-full rounded-2xl overflow-hidden col-span-1 lg:col-span-3 bg-black min-h-[300px] relative border-b-0 mt-4">
      <div className="relative h-full [background-image:radial-gradient(88%_100%_at_top,rgba(255,255,255,0.5),rgba(255,255,255,0))] sm:mx-0 sm:rounded-2xl overflow-hidden shadow-2xl">
        <div className="h-full px-4 py-20 sm:px-10">
          <div className="absolute inset-0 w-full h-full scale-[1.2] transform opacity-10 bg-noise fade-vignette"></div>
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
          <div className="relative w-full h-full py-8">
            <div className="absolute -top-40 -left-40 w-[300px] h-[300px] bg-[radial-gradient(circle_at_top_left,_#FFBE98,_#FFA477)] rounded-full blur-[100px] opacity-20 z-20"></div>
            <div className="absolute -bottom-52 -right-52 w-[400px] h-[400px] rounded-full blur-[100px] opacity-20 z-20"></div>
            <div className="absolute top-0 w-[80%] h-64 bg-gradient-to-b from-[#FFBE98]/20 to-transparent blur-2xl z-20"></div>

            <div className="relative grid md:grid-cols-2 gap-12 z-30 h-full">
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                    <span className="bg-gradient-to-r from-[#FFBE98] to-[#FFA477] bg-clip-text text-transparent">
                      Global Presence,
                    </span>
                    <br />
                    <span className="text-white">Local Excellence</span>
                  </h2>
                  <p className="mt-4 text-gray-300 text-lg">
                    Empowering teams across the globe to scale without boundaries
                  </p>
                </div>

                <div className="flex items-center space-x-5 p-6 rounded-2xl bg-black/40 backdrop-blur-md border border-white/5">
                  <div className="w-10 h-10 text-[#FFBE98]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl text-white">Borderless Operations</h3>
                    <p className="text-gray-300">Scale your business globally with seamless integration</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-6 rounded-2xl bg-black/40 backdrop-blur-md border border-white/5">
                    <div className="text-3xl font-bold text-[#FFBE98]">100+</div>
                    <div className="text-gray-300 mt-1">Countries Supported</div>
                  </div>
                  <div className="text-center p-6 rounded-2xl bg-black/40 backdrop-blur-md border border-white/5">
                    <div className="text-3xl font-bold text-[#FFBE98]">24/7</div>
                    <div className="text-gray-300 mt-1">Global Support</div>
                  </div>
                </div>
              </div>

              <div className="relative h-full flex items-center">
                <div className="grid grid-cols-3 gap-4 w-full">
                  {countries.map((country) => (
                    <div key={country.code} className="group relative">
                      <div className="aspect-video relative rounded-xl overflow-hidden bg-black/40 backdrop-blur-md border border-white/10 shadow-lg">
                        <img
                          src={`https://flagcdn.com/w320/${country.code}.png`}
                          alt={`${country.name} flag`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60"></div>
                        <span className="absolute bottom-0 left-0 right-0 p-2 transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-200 text-white text-xs text-center font-medium">
                          {country.name}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalPresence;