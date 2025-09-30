const GridBackground = () => {
  const columns = 6;
  const rows = 6;

  const generateRandomGradient = () => {
    const x1 = Math.random() * 600 - 100;
    const x2 = x1 + 200 + Math.random() * 200;
    return { x1, x2 };
  };

  const generateRandomVerticalGradient = () => {
    const y1 = Math.random() * 600 - 200;
    const y2 = y1 + 200 + Math.random() * 200;
    return { y1, y2 };
  };

  return (
    <div className="fixed inset-0 min-h-screen w-full pointer-events-none z-0" style={{ opacity: 0.18 }}>
      <div className="absolute inset-0 h-full w-full bg-black pointer-events-none [mask-image:radial-gradient(ellipse_at_center,transparent,white)]"></div>
      <div className="flex">
        {Array.from({ length: columns }).map((_, colIndex) => (
          <div key={colIndex} className="flex flex-col items-start justify-center w-60">
            {Array.from({ length: rows }).map((_, rowIndex) => {
              const horizontalGradient = generateRandomGradient();
              const verticalGradient = generateRandomVerticalGradient();
              const uniqueId = `gradient-${colIndex}-${rowIndex}-${Math.random()}`;
              const uniqueIdV = `gradient-v-${colIndex}-${rowIndex}-${Math.random()}`;

              return (
                <div key={rowIndex}>
                  <div className="flex items-center justify-center">
                    <div className="h-6 w-6 bg-neutral-900 flex items-center justify-center rounded-full">
                      <div className="h-2 w-2 bg-neutral-700 rounded-full"></div>
                    </div>
                    <svg
                      width="300"
                      height="1"
                      viewBox="0 0 300 1"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-neutral-800"
                    >
                      <path d="M0.5 0.5H479" stroke="currentColor" />
                      <path d="M0.5 0.5H479" stroke={`url(#${uniqueId})`} strokeWidth="1" />
                      <defs>
                        <linearGradient
                          id={uniqueId}
                          gradientUnits="userSpaceOnUse"
                          x1={horizontalGradient.x1}
                          y1="0"
                          x2={horizontalGradient.x2}
                          y2="0"
                        >
                          <stop offset="0%" stopColor="transparent" />
                          <stop offset="50%" stopColor="var(--neutral-200)" />
                          <stop offset="100%" stopColor="transparent" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <svg
                    width="1"
                    height="140"
                    viewBox="0 0 1 140"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-neutral-800 ml-3"
                  >
                    <path d="M0.5 0.5V479" stroke="currentColor" strokeWidth="2" />
                    <path d="M0.5 0.5V479" stroke={`url(#${uniqueIdV})`} strokeWidth="2" />
                    <defs>
                      <linearGradient
                        id={uniqueIdV}
                        gradientUnits="userSpaceOnUse"
                        x1="2"
                        y1={verticalGradient.y1}
                        x2="2"
                        y2={verticalGradient.y2}
                      >
                        <stop offset="0%" stopColor="transparent" />
                        <stop offset="50%" stopColor="var(--neutral-200)" />
                        <stop offset="100%" stopColor="transparent" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridBackground;