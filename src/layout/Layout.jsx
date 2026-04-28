import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

// Layout component
// Wraps all pages with a shared header and footer
function Layout() {
  return (
    <>

      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;