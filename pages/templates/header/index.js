import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import React from "react";
const Header = () => {
  const breadcrumbLinks = [
    {
      label: "Home",
      url: "/",
    },
  ];
  return (
    <header>
      <nav>
        <Breadcrumb breadcrumbLinks={breadcrumbLinks}/>
      </nav>
    </header>
  );
};

export default Header;
