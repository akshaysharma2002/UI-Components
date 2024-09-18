import Button from "@/components/Button";
function ButtonComponent() {
  const btnData = {
    text: "Click Me!",
    buttonClass: "btn-success btn-lg",
    type: "button",
  };
  return (
    <>
      <Button attributeData={btnData} />
    </>
  );
}
export default ButtonComponent;
