import Table from "@/components/Table";
function TableComponent() {
  const data = [
    {
      id: 3,
      name: "Charlie",
      age: 35,
      phone: "12345678",
    },
    { id: 1, name: "Alice", age: 25 },
    {
      id: 3,
      name: "Charlie",
      age: 35,
      phone: "12345678",
    },
    {
      id: 3,
      name: "Charlie",
      age: 35,
      phone: "12345678",
      add: "jhdvshbJKB",
      telephone: "12342536",
    },
    { id: 1, name: "Alice", age: 25 },
    { id: 1, name: "Alice", age: 25 },
  ];
  const styleClass = {
    tableClass: "text-center table-bordered",
    theadClass: "table-dark",
    tbodyClass: "",
  };
  return (
    <>
      <Table data={data} styleClass={styleClass} />
    </>
  );
}

export default TableComponent;
