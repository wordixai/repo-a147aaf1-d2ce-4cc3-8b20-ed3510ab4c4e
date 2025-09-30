import { ChevronRight } from "lucide-react";
import { useState } from "react";

const SalesFeatures = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const features = [
    {
      title: "Global tax compliance",
      description:
        "We're your merchant of record. That means we handle payments, merchant fees, fraud and sales tax without you lifting a finger.",
    },
    {
      title: "Borderless SaaS payments",
      description: "Accept payments from anywhere in the world with support for multiple currencies and payment methods.",
    },
    {
      title: "Instant payment methods",
      description: "Offer your customers the payment methods they prefer, from credit cards to digital wallets.",
    },
    {
      title: "Trials & discount codes",
      description: "Run promotions and trials to acquire customers. Set up discount codes in seconds.",
    },
    {
      title: "A.I. fraud prevention",
      description: "Advanced machine learning algorithms protect your business from fraudulent transactions.",
    },
    {
      title: "Failed payment recovery",
      description: "Automatically retry failed payments and recover lost revenue with smart dunning management.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto text-white relative z-10 px-4">
      <div className="mb-16 text-center">
        <h2 className="max-w-5xl mx-auto text-center tracking-tight font-medium text-white text-3xl md:text-5xl md:leading-tight mb-4">
          Smooth International Sales
        </h2>
        <h2 className="text-sm md:text-base max-w-4xl my-4 mx-auto text-center font-normal text-gray-300">
          Everything you need to handle payments for your SaaS business
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div className="flex flex-col">
          {features.map((feature, index) => (
            <div key={index}>
              <div className="transition hover:!text-primary duration-200 hover:bg-neutral-900/50 cursor-pointer border-gray-800 last:border-0 overflow-hidden rounded-sm">
                <button
                  className="w-full flex items-center justify-between py-4 px-4 text-left focus:outline-none"
                  onClick={() => setOpenIndex(index)}
                >
                  <div className="flex items-center py-3">
                    <span
                      className="text-sm text-primary mr-3"
                      style={{ transform: openIndex === index ? "scale(1.1)" : "none", opacity: openIndex === index ? 1 : 0.8 }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-xl font-medium relative">{feature.title}</h3>
                  </div>
                  <div style={{ transform: openIndex === index ? "rotate(90deg)" : "none", color: openIndex === index ? "rgb(255, 189, 152)" : "" }}>
                    <ChevronRight className="h-5 w-5" />
                  </div>
                </button>
                {openIndex === index && (
                  <div className="overflow-hidden">
                    <div className="py-4 px-4 pr-6">
                      <p className="text-gray-300">{feature.description}</p>
                    </div>
                  </div>
                )}
              </div>
              <div className="flex justify-center">
                <div className="shrink-0 bg-border h-[1px] w-11/12"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="hidden md:flex items-center justify-center overflow-hidden h-[608px] bg-neutral-900/60 border border-primary/20 opacity-80 rounded-lg relative p-4">
          <div className="absolute w-full h-full squarePattern"></div>
          <div className="absolute -top-40 -left-40 w-[300px] h-[300px] bg-[radial-gradient(circle_at_top_left,_#FFBD98,_#FFA477)] rounded-full blur-[100px] opacity-10 z-20"></div>
          <div className="absolute -bottom-52 -right-52 w-[400px] h-[400px] bg-[radial-gradient(circle_at_bottom_right,_#FFA477,_#FFBD98)] rounded-full blur-[100px] opacity-15 z-20"></div>

          <div className="relative z-10 w-full">
            <div className="p-6 rounded-lg w-full relative space-y-8">
              <div className="border bg-neutral-900/80 backdrop-blur rounded-lg shadow-md p-4 relative">
                <div className="flex items-center">
                  <img
                    alt="User Avatar"
                    width="32"
                    height="32"
                    className="w-8 h-8 rounded-full mr-3"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop"
                  />
                  <div>
                    <div className="text-sm text-white">Alec Erasmus purchased</div>
                    <div className="text-xs text-gray-300">AI Headshots Plus</div>
                  </div>
                  <div className="ml-auto text-green-400 font-medium">+$35.00</div>
                </div>
              </div>

              <div className="border bg-neutral-900/80 backdrop-blur rounded-lg p-4 relative">
                <div className="text-center font-medium mb-2 text-white">Merchant of Record</div>
                <div className="space-y-2">
                  {[
                    "Global Payment Gateway",
                    "Tax Collection + Remittance",
                    "Payment Processing",
                    "Refunds + Chargebacks",
                    "Risk Analysis + Fraud",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-200">
                      <div className="w-4 h-4 rounded-full bg-gray-700 text-green-400 flex items-center justify-center mr-2">
                        ✓
                      </div>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative flex justify-center">
                <div className="absolute bottom-0 translate-y-1/2 w-6 h-6 flex items-center justify-center z-10">
                  <div className="absolute inset-0 bg-gradient-to-b from-primary/30 to-primary/10 rounded-full backdrop-blur-sm border border-white/10 opacity-80"></div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-white/90 relative z-20"
                  >
                    <path d="M12 5v14M5 12l7 7 7-7" />
                  </svg>
                </div>
              </div>

              <div className="border bg-neutral-900/80 backdrop-blur rounded-lg p-4 relative">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-neutral-800 rounded mr-3 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="w-4 h-4 text-white"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M5 6h14M4 14h16M6 18h12" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-white">Bank Payout Processed</div>
                    <div className="text-xs text-gray-300">JPMORGAN **** 4213</div>
                  </div>
                  <div className="ml-auto text-green-400 font-medium">+$33.35</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;