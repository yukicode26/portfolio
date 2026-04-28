function HeroPage() {
  return (
    <section
      id="top"
      className="snap-start min-h-screen flex items-center overflow-hidden bg-main text-sub dark:bg-sub-lighter dark:text-main"
    >
      {/* Main container */}
      <div className="flex w-full max-w-5xl mx-auto flex-col md:flex-row gap-8 px-4 md:px-6">

        {/* Left side (vertical label block) */}
        <div className="flex flex-row justify-center md:justify-start items-center gap-3 shrink-0 md:flex-col md:gap-0">

          {/* Front-end label box */}
          <div className="flex flex-row items-center gap-3 bg-sub text-main px-3 py-2 md:flex-col md:justify-between md:h-56 md:w-28 md:gap-0 md:p-3 dark:bg-main dark:text-sub">
            
            {/* FRONT / END text */}
            <div className="flex flex-row gap-1 text-lg leading-tight md:flex-col md:gap-0">
              <p>FRONT</p>
              <p>END</p>
            </div>

            {/* Year */}
            <p className="text-xs tracking-[0.2em] md:text-sm">2026</p>
          </div>

          {/* Vertical location text (desktop only) */}
          <p className="hidden text-xs tracking-[0.4em] md:mt-4 md:block md:[writing-mode:vertical-rl]">
            MELBOURNE
          </p>
        </div>

        {/* Right side (main content) */}
        <div className="flex flex-col justify-between px-8 flex-1 min-h-104">

          {/* Title */}
          <div className="text-center md:text-left">
            <p className="text-xs tracking-[0.3em] uppercase opacity-60">
              Portfolio
            </p>

            {/* Name with accent highlight */}
            <h1 className="text-6xl md:text-8xl font-black tracking-tight">
              Y<span className="text-accent dark:text-accent-light">U</span>KI
            </h1>

            {/* Divider */}
            <div className="mt-4 w-full border-t-2 border-sub dark:border-main"></div>
          </div>

          {/* Description + actions */}
          <div className="flex flex-col items-center gap-8 max-w-xl mx-auto md:mx-0 md:self-end">

            {/* Tagline */}
            <div className="text-2xl md:text-4xl text-center md:text-right leading-tight">
              <h3>Building clean,</h3>
              <h3>user-friendly</h3>
              <h3>web apps.</h3>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col md:flex-row w-full justify-end gap-3 text-xs tracking-[0.2em] uppercase">

              {/* Primary action */}
              <a
                href="#contact"
                aria-label="Go to contact section"
                className="bg-sub text-main px-6 py-3 text-center transition-colors duration-300 hover:bg-accent hover:text-main dark:bg-main dark:text-sub dark:hover:bg-accent-light dark:hover:text-main"
              >
                Get in Touch
              </a>

              {/* Secondary action */}
              <a
                href="#projects"
                aria-label="Go to projects section"
                className="border border-sub text-sub px-6 py-3 text-center transition-colors duration-300 hover:border-accent hover:text-accent dark:border-main dark:text-main dark:hover:border-accent-light dark:hover:text-accent-light"
              >
                View Work
              </a>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroPage;