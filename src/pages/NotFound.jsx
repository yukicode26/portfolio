import dog from "../assets/dog.png";
import dogwhite from "../assets/dogwhite.png";
import { Link } from "react-router-dom";

// NotFound component
// Simple 404 page with minimal layout and navigation back to home
function NotFound() {
  return (
    <section
      id="notFound"
      className="flex min-h-screen items-center justify-center px-6 sm:px-12 bg-main text-sub dark:bg-sub-lighter dark:text-main"
    >
      {/* Centered content */}
      <div className="py-10 mb-12 text-center space-y-4">
        
        {/* Error code */}
        <h1 className="p-2 text-7xl font-light tracking-widest">
          404
        </h1>

        {/* Image (light mode) */}
        <img
          src={dog}
          alt="Sad dog illustration"
          className="mx-auto my-10 w-80 dark:hidden"
        />

        {/* Image (dark mode) */}
        <img
          src={dogwhite}
          alt="Sad dog illustration"
          className="hidden mx-auto my-10 w-80 dark:block"
        />

        {/* Message */}
        <p className="p-2 mb-2 text-[1.5rem] tracking-widest">
          Page not found
        </p>

        {/* Navigation back to home */}
        <Link
          to="/"
          aria-label="Go back to the home page"
          className="inline-block px-6 py-2 mt-6 text-sm tracking-widest border border-sub transition-colors duration-300 hover:bg-accent hover:text-main dark:border-main dark:hover:bg-accent-light dark:hover:text-main"
        >
          Back to home
        </Link>

      </div>
    </section>
  );
}

export default NotFound;