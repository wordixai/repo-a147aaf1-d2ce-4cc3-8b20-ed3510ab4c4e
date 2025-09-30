const FeatureCards = () => {
  const features = [
    "Global Sales Tax",
    "Merchant of Record",
    "Fraud Protection",
    "Video Tutorials",
    "Well Documented API",
    "Easy to Integrate",
  ];

  return (
    <div className="pt-32">
      <div className="relative z-20">
        <div className="bg-neutral-800 border-neutral-700 rounded-[32px] relative">
          <div className="absolute inset-x-0 bottom-0 h-40 w-full bg-gradient-to-b from-transparent to-black scale-[1.1] pointer-events-none"></div>
          <div className="p-2 bg-black border-neutral-700 rounded-[24px] rounded-b-none">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
              {/* Main Feature Card */}
              <section className="mx-auto w-full relative rounded-2xl overflow-hidden col-span-1 lg:col-span-2 h-full bg-black min-h-[500px] lg:min-h-[300px]">
                <div className="relative h-full [background-image:radial-gradient(88%_100%_at_top,rgba(255,255,255,0.5),rgba(255,255,255,0))] sm:mx-0 sm:rounded-2xl overflow-hidden shadow-2xl">
                  <div className="h-full px-4 py-20 sm:px-10">
                    <div className="absolute inset-0 w-full h-full scale-[1.2] transform opacity-10 bg-noise fade-vignette"></div>
                    <div className="max-w-xs">
                      <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-primary">
                        The future of work needs new financial tools
                      </h2>
                      <p className="mt-4 text-left text-base/6 text-neutral-200">
                        Small teams are achieving what used to require 150+ people.
                        <br />
                        <br />
                        We're building the financial infrastructure to power this revolution.
                      </p>
                    </div>
                    <div className="scroller relative z-20 group max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)] mt-8">
                      <div className="flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap animate-scroll">
                        {[...features, ...features].map((feature, index) => (
                          <span
                            key={index}
                            className="space-x-1 min-w-24 flex justify-center items-center bg-neutral-900 px-2 py-1 text-sm rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1)] text-primary"
                          >
                            <span className="text-white">{feature}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                    <img
                      alt="splits demo image"
                      width="400"
                      height="400"
                      className="absolute -right-4 lg:-right-[10%] grayscale filter -bottom-10 object-contain rounded-2xl"
                      src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=400&fit=crop"
                    />
                  </div>
                </div>
              </section>

              {/* Tax Compliance Card */}
              <section className="mx-auto w-full relative rounded-2xl overflow-hidden col-span-1 min-h-[300px] bg-black">
                <div className="relative h-full [background-image:radial-gradient(88%_100%_at_top,rgba(255,255,255,0.5),rgba(255,255,255,0))] sm:mx-0 sm:rounded-2xl overflow-hidden shadow-2xl">
                  <div className="h-full px-4 py-20 sm:px-10">
                    <div className="absolute inset-0 w-full h-full scale-[1.2] transform opacity-10 bg-noise fade-vignette"></div>
                    <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-primary">
                      Global Merchant of Record
                    </h2>
                    <div className="mt-4 max-w-[26rem] text-left text-base/6 text-white">
                      <p>
                        Focus on your product, not on bureaucracy. We handle the heavy lifting of{" "}
                        <strong>Tax Compliance.</strong>
                      </p>
                      <div className="mt-6 bg-neutral-900/50 backdrop-blur-sm rounded-2xl p-6 border border-neutral-800">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-sm font-medium text-neutral-200">Tax Report 2025</h3>
                          <span className="px-2 py-1 text-xs font-medium text-emerald-500 bg-emerald-500/10 rounded-full">
                            Submitted
                          </span>
                        </div>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-neutral-400">VAT (EU)</span>
                            <span className="text-sm font-medium text-white">€2,450.00</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-neutral-400">Sales Tax (US)</span>
                            <span className="text-sm font-medium text-white">$3,120.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCards;