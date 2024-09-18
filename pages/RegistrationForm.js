import RegistrationForm from "@/components/Registration/RegistrationForm";
import React from "react";

function RegistrationComponent() {
  
  return (
    <>
      <Breadcrumb breadcrumbLinks={breadcrumbLinks} />
      <RegistrationForm />
    </>
  );
}

export default RegistrationComponent;
