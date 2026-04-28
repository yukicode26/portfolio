function ContactPage() {
  return (
    <section
      id="contact"
      className="snap-start min-h-screen flex items-center bg-main text-sub dark:bg-sub-lighter dark:text-main"
    >
      {/* Main container */}
      <div className="w-full max-w-5xl mx-auto px-4 lg:px-6">
        
        {/* Section title */}
        <h2 className="text-5xl lg:text-7xl font-black tracking-tight">
          CONTACT
        </h2>

        {/* Accent divider */}
        <div className="mt-4 w-10 border-t-2 border-accent dark:border-accent-light"></div>

        {/* Contact content */}
        <div className="mt-10 space-y-6">

          {/* Main message */}
          <p className="text-2xl lg:text-4xl">
            Looking for a junior front-end developer role.
          </p>

          {/* Supporting statement */}
          <p className="text-lg opacity-80">
            Clean. Simple. Functional.
          </p>

          {/* Contact links */}
          <div className="flex gap-8 mt-8">

            {/* Email link */}
            <a
              href="mailto:yukicode26@gmail.com"
              aria-label="Send email to Yuki"
              className="inline-block text-xs uppercase tracking-[0.2em] text-sub transition-all duration-300 hover:text-accent hover:translate-x-1 dark:text-main dark:hover:text-accent-light"
            >
              Email →
            </a>

            {/* GitHub link */}
            <a
              href="https://github.com/yukicode26"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Yuki's GitHub profile"
              className="inline-block text-xs uppercase tracking-[0.2em] text-sub transition-all duration-300 hover:text-accent hover:translate-x-1 dark:text-main dark:hover:text-accent-light"
            >
              GitHub →
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;