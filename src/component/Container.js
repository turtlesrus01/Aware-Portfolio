import React, { useState } from "react";
//navigation tabs
import NavTabs from "./NavTabs";
//About me
import About from "./pages/About";
//Portfolio
import Portfolio from "./pages/Portfolio";
//Contact
import Contact from "./pages/Contact";
//Resume
import Resume from "./pages/Resume";

//export container
export default function Container() {
  //useState page variable declarations
  const [currentPage, setCurrentPage] = useState("About");

  const renderPage = () => {
    //renderPage function switch statement
    switch (currentPage) {
      case "About":
        return <About />;
      case "Portfolio":
        return <Portfolio />;
      case "Contact":
        return <Contact />;
      case "Resume":
        return <Resume />;
      default:
        return <About />;
    }
  };
  //handlePageChange variable arrow function
  const handlePageChange = (page) => setCurrentPage(page);
  //return div containing currentPage
  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}
