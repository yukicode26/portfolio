// Footer component
// Displays minimal copyright information with subtle styling
function Footer() {
  return (
    <footer className="w-full py-4 text-center text-xs tracking-[0.2em] uppercase text-sub/60 dark:text-main bg-main/60 dark:bg-sub/60 backdrop-blur-md border-t border-sub/10 dark:border-main/10">
      
      {/* Copyright text */}
      <span>
        © 2026 Yuki <span className="mx-2">•</span> Melbourne
      </span>

    </footer>
  );
}

export default Footer;