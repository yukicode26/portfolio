// CardItem component

// Displays a single project with title, description, image, and links

function CardItem({ project }) {

  return (

    <article className="py-6">

      <div className="grid grid-cols-1 gap-8 border-t border-sub pt-6 md:grid-cols-2 dark:border-main">

        {/* Left side */}

        <div className="flex flex-col justify-between gap-6">

          <div>

            {/* Project title */}

            <h3 className="text-2xl font-semibold tracking-tight uppercase sm:text-3xl lg:text-4xl">

              {project.title}

            </h3>

            {/* Accent divider */}

            <div className="mt-3 w-12 border-t border-accent dark:border-accent-light"></div>

            {/* Project description */}

            <p className="mt-6 text-sm leading-relaxed opacity-80 sm:text-base">

              {project.description}

            </p>

            {/* Tech stack */}

            <div className="mt-6 flex flex-wrap gap-2">

              {project.badges?.map((badge) => (

                <span

                  key={badge.name}

                  className="border border-sub px-3 py-1 text-[11px] uppercase tracking-[0.18em] opacity-70 dark:border-main"

                >

                  {badge.name}

                </span>

              ))}

            </div>

          </div>

          {/* Action links */}

          <div className="flex flex-wrap gap-4 pt-2">

            <a

              href={project.live}

              target="_blank"

              rel="noopener noreferrer"

              aria-label={`View live site: ${project.title}`}

              className="inline-block text-xs uppercase tracking-[0.2em] transition-all duration-300 hover:text-accent hover:translate-x-1 dark:hover:text-accent-light"

            >

              View Live →

            </a>

            <a

              href={project.code}

              target="_blank"

              rel="noopener noreferrer"

              aria-label={`View source code: ${project.title}`}

              className="inline-block text-xs uppercase tracking-[0.2em] transition-all duration-300 hover:text-accent hover:translate-x-1 dark:hover:text-accent-light"

            >

              View Code →

            </a>

          </div>

        </div>

        {/* Right side */}

        <div className="w-full overflow-hidden">

          <img

            src={project.image}

            alt={`${project.title} preview`}

            className="block h-56 w-full object-cover transition duration-300 hover:scale-[1.02] sm:h-64 md:h-full"

          />

        </div>

      </div>

    </article>

  );

}

export default CardItem;