const ToolsGrid = () => {
  const tools = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M8.487 21h7.026a4 4 0 0 0 3.808 -5.224l-1.706 -5.306a5 5 0 0 0 -4.76 -3.47h-1.71a5 5 0 0 0 -4.76 3.47l-1.706 5.306a4 4 0 0 0 3.808 5.224" />
          <path d="M15 3q -1 4 -3 4t -3 -4z" />
          <path d="M14 11h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" />
          <path d="M12 10v1M12 17v1" />
        </svg>
      ),
      title: "Financial Workflows",
      description: "Automate your financial operations with customizable workflows. From revenue splits to payouts, everything runs on autopilot.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
          <path d="M13.193 17.924c-.39 .05 -.788 .076 -1.193 .076c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.005 0 5.592 1.394 7.761 4.181" />
          <path d="M21 15h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5M19 21v1m0 -8v1" />
        </svg>
      ),
      title: "Instant Setup",
      description: "Get your financial infrastructure up and running in minutes. Built for teams that move fast.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20M2 12h20" />
        </svg>
      ),
      title: "Global Operations",
      description: "Run your business globally from day one. Handle international payments, compliance, and currency conversions automatically.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
          <path d="m7 11-2-9 9 4" />
        </svg>
      ),
      title: "Best-in-Class Support",
      description: "No more getting lost in the queue. Get paired with a dedicated support specialists who understands your account.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 12l3 3l3 -3l-3 -3z" />
          <path d="M15 12l3 3l3 -3l-3 -3z" />
          <path d="M9 6l3 3l3 -3l-3 -3z" />
          <path d="M9 18l3 3l3 -3l-3 -3z" />
        </svg>
      ),
      title: "Dynamic Price Engine",
      description: "Price testing on autopilot. Launch lean, be flexible, and run tests like increasing prices as you gain traction. *Coming Soon*",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="9" />
          <path d="M9 8h4.09c1.055 0 1.91 .895 1.91 2s-.855 2 -1.91 2c1.055 0 1.91 .895 1.91 2s-.855 2 -1.91 2h-4.09M10 12h4M10 7v10M13 7v1M13 16v1" />
        </svg>
      ),
      title: "Crypto Payments",
      description: "Enable your customers to purchase products with the most popular cryptocurrencies. *Coming Soon*",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 10l-2 -6M7 10l2 -6" />
          <path d="M11 20h-3.756a3 3 0 0 1 -2.965 -2.544l-1.255 -7.152a2 2 0 0 1 1.977 -2.304h13.999a2 2 0 0 1 1.977 2.304" />
          <path d="M10 14a2 2 0 1 0 4 0a2 2 0 0 0 -4 0M20 21l2 -2l-2 -2M17 17l-2 2l2 2" />
        </svg>
      ),
      title: "AI-Powered Insights",
      description: "Make data-driven decisions with AI-powered analytics. Understand your business metrics and spot opportunities instantly.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
        </svg>
      ),
      title: "Revenue Sharing",
      description: "Build partnership-driven growth with automated revenue sharing. Perfect for modern collaborative business models. *Coming Soon*",
    },
  ];

  return (
    <div className="relative z-20 py-40 md:py-40">
      <h2 className="max-w-5xl mx-auto text-center tracking-tight font-medium text-white text-3xl md:text-5xl md:leading-tight mb-16">
        Tools for the next generation of companies
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10">
        {tools.map((tool, index) => (
          <div
            key={index}
            className={`flex flex-col py-10 relative group border-neutral-800 ${
              index < 4 ? "lg:border-b" : ""
            } ${index % 4 !== 3 ? "lg:border-r" : ""} ${index % 4 === 0 ? "lg:border-l" : ""}`}
          >
            <div className="opacity-0 group-hover:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-primary/20 to-transparent pointer-events-none"></div>
            <div className="mb-4 relative z-10 px-10">{tool.icon}</div>
            <div className="text-lg font-bold mb-2 relative z-10 px-10">
              <div className="absolute left-0 inset-y-0 h-6 w-1 rounded-tr-full rounded-br-full bg-neutral-700 group-hover:bg-primary transition duration-200"></div>
              <span className="group-hover:translate-x-2 transition duration-200 inline-block">{tool.title}</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs mx-auto relative z-10 px-10">{tool.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToolsGrid;