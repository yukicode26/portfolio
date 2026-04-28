import { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FiSun, FiMoon } from "react-icons/fi";
import u from "../assets/u.png";

// Header component
// Displays a minimal responsive navigation bar with a dark mode toggle
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Load the saved theme when the component mounts
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const isDark = saved === "dark";

    setDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  // Toggle dark mode using React state
  const handleToggleDarkMode = () => {
    const nextDarkMode = !darkMode;

    setDarkMode(nextDarkMode);
    document.documentElement.classList.toggle("dark", nextDarkMode);
    localStorage.setItem("theme", nextDarkMode ? "dark" : "light");
  };

  // Close the mobile menu after selecting a link
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 z-50 w-full">
      <nav className="mx-auto flex items-center justify-between border-b border-sub/10 bg-main/70 px-4 py-3 backdrop-blur-md dark:border-main/10 dark:bg-sub/70 md:px-8">
        
        {/* Logo / home link */}
        <a
          href="#top"
          className="flex items-center gap-2 text-sm uppercase tracking-[0.12em] text-sub transition hover:opacity-70 dark:text-main"
        >
          <img src={u} alt="U logo" className="h-9 w-9" />
          <span className="hidden sm:inline">Yuki&apos;s Portfolio</span>
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-8 text-sm uppercase tracking-[0.18em] text-sub dark:text-main md:flex">
          <a href="#about" className="transition hover:opacity-60">About</a>
          <a href="#projects" className="transition hover:opacity-60">Projects</a>
          <a href="#contact" className="transition hover:opacity-60">Contact</a>

          {/* Theme toggle */}
          <label className="cursor-pointer">
            <input
              type="checkbox"
              className="hidden"
              checked={darkMode}
              onChange={handleToggleDarkMode}
              aria-label="Toggle dark mode"
            />

            <div className="flex h-8 w-8 items-center justify-center transition hover:opacity-60">
              
              {/* Sun (dark mode) */}
              <FiSun className="hidden text-lg dark:block" />

              {/* Moon (light mode) */}
              <FiMoon className="text-lg dark:hidden" />
              
            </div>
          </label>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-3 md:hidden">
          
          {/* Theme toggle */}
          <label className="cursor-pointer">
            <input
              type="checkbox"
              className="hidden"
              checked={darkMode}
              onChange={handleToggleDarkMode}
              aria-label="Toggle dark mode"
            />

            <div className="flex h-8 w-8 items-center justify-center transition hover:opacity-60 dark:text-main">
              
              {/* Sun (dark mode) */}
              <FiSun className="hidden text-lg dark:block" />

              {/* Moon (light mode) */}
              <FiMoon className="text-lg dark:hidden" />
              
            </div>
          </label>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center text-2xl text-sub transition hover:opacity-60 dark:text-main"
            aria-label="Open navigation menu"
            aria-expanded={menuOpen}
          >
            <RxHamburgerMenu />
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="border-b border-sub/10 bg-main/95 px-4 py-4 backdrop-blur-md dark:border-main/10 dark:bg-sub/95 md:hidden"
        >
          <div className="flex flex-col gap-4 text-sm uppercase tracking-[0.18em] text-sub dark:text-main">
            <a href="#about" onClick={closeMenu} className="transition hover:opacity-60">About</a>
            <a href="#projects" onClick={closeMenu} className="transition hover:opacity-60">Projects</a>
            <a href="#contact" onClick={closeMenu} className="transition hover:opacity-60">Contact</a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;