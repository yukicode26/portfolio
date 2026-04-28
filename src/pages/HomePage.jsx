import AboutPage from "./AboutPage";
import ProjectPage from "./ProjectPage";
import ContactPage from "./ContactPage";
import HeroPage from "./HeroPage";

// HomePage component
// One-page layout using scroll snap for smooth section navigation
function HomePage() {
  return (
    <>
      {/* Main scroll container */}
      {/* Height is reduced to make space for the footer */}
      {/* Enables smooth snap scrolling between sections */}
      <div className="h-[calc(100vh-49px)] overflow-y-scroll snap-y snap-mandatory scroll-smooth">
        
        <HeroPage />
        <AboutPage />
        <ProjectPage />
        <ContactPage />

      </div>
    </>
  );
}

export default HomePage;