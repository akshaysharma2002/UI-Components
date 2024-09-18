import MyAlert from "@/components/Alert";
function AlertComponent() {
  const alertData = {
    type: "info",
    message: "Success! Your changes have been saved.!",
    alertClass: "my-alert-class",
  };
  return (
  <>
  <MyAlert alertAttributeData={alertData} />
  </>
  );
}
export default AlertComponent;
