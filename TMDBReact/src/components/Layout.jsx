// //////////////////////////////////////////////////////// //
// This component represents the layout of the application. //
// //////////////////////////////////////////////////////// //

// Importing the Navbar component for the top navigation bar.
import Navbar from "./NavBar";
import { Outlet } from "react-router-dom";

const Layout = (props) => {
  return (
    <>
      {/* Render the Navbar component and pass the setMovies prop. */}
      <Navbar setMovies={props.setMovies} />
      {/* Render the nested routes specified by the Outlet component. */}
      <Outlet />
    </>
  );
};

// Export the Layout component as the default export.
export default Layout;
