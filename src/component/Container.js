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
        console.log(currentPage);
        return <About />;
      case "Portfolio":
        console.log(currentPage);
        return <Portfolio />;
      case "Contact":
        console.log(currentPage);
        return <Contact />;
      case "Resume":
        console.log(currentPage);
        return <Resume />;
      default:
        console.log(currentPage);
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
