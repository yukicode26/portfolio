import CardList from "../components/card/CardList";

// ProjectPage component
// Displays selected projects in a clean, minimal layout
function ProjectPage() {
  return (
    <section
      id="projects"
      className="snap-start pt-20 pb-20 bg-main text-sub dark:bg-sub-lighter dark:text-main"
    >
      {/* Main container */}
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[calc(100vh-160px)] flex items-center">
        
        <div className="flex flex-col gap-10 lg:gap-12 w-full">

          {/* Section header */}
          <div>
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight">
              PROJECTS
            </h2>

            {/* Accent divider */}
            <div className="mt-4 w-10 border-t-2 border-accent dark:border-accent-light"></div>

            {/* Section description */}
            <p className="mt-6 max-w-7xl text-base sm:text-lg lg:text-xl opacity-80 leading-relaxed">
              Selected work in clean UI, responsive design, and front-end development.
            </p>
          </div>

          {/* Project list */}
          <div className="grid grid-cols-1 gap-10 lg:gap-12 mx-0 sm:mx-4 lg:mx-8">
            <CardList />
          </div>

        </div>
      </div>
    </section>
  );
}

export default ProjectPage;