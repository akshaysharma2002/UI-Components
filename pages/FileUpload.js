import React from "react";
import FileUpload from "@/components/FileUpload";

const App = () => {
  const breadcrumbLinks = [
    {
      label: "Home",
      url: "/",
    },
    {
      label: "File Upload",
      url:"/FileUpload",
    }
  ];
    return (
      <div>
        <FileUpload autoUpload={true} />
      </div>
    );
  };
  
  export default App;