function AboutPage() {
  return (
    <section
      id="about"
      className="snap-start min-h-screen flex items-center bg-main text-sub dark:bg-sub-lighter dark:text-main"
    >
      {/* Main container */}
      <div className="w-full max-w-5xl mx-auto px-4 lg:px-6">
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
          
          {/* Left side (section title) */}
          <div className="shrink-0 lg:pt-4">
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight">
              ABOUT
            </h2>

            {/* Accent divider */}
            <div className="mt-4 w-10 border-t-2 border-accent dark:border-accent-light"></div>
          </div>

          {/* Right side (content) */}
          <div className="flex-1 max-w-xl pt-6">

            {/* Main statement */}
            <p className="text-2xl sm:text-3xl lg:text-4xl leading-tight text-left">
              Hi, I'm Yuki{" "}
            </p>

            {/* Supporting description */}
            <p className="mt-6 text-base sm:text-lg lg:text-xl opacity-80 leading-relaxed text-left">
              Japanese developer, Melbourne-based. Finished Cert IV in Web Development — now in my Diploma year and focused on React.
            </p>

            {/* Meta information */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 text-xs uppercase tracking-[0.2em] opacity-60">
              <span>Melbourne</span>
              <span>Front-end student</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default AboutPage;