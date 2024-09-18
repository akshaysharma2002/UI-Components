import React, { useState, useEffect } from "react";
import Pagination from "../components/Pagination";
import axios from "axios";
const breadcrumbLinks = [
  {
    label: "Home",
    url: "/",
  },
  {
    label: "Pagination",
    url:"/Pagination",
  }
];
const PageSize = 10;

export default function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState(null);
  useEffect(() => {
    fetchData();
  }, [currentPage]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://vectorproductmanagement.azurewebsites.net/ProductManagement/GetAll?pageNumber=${currentPage}&pageSize=${PageSize}&category=0&orderById=ASC`
      );
      const { data } = response.data;
      setData(data.$values);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Active</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {!!data &&
            data.map(({ productId, name, price, active, desc }) => (
              <tr key={productId}>
                <td>{productId}</td>
                <td>{name}</td>
                <td>{price}</td>
                <td>{active ? "Yes" : "No"}</td>
                <td>{desc}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <Pagination
        currentPage={currentPage}
        totalCount={100}
        pageSize={PageSize}
        onPageChange={handlePageChange}
      />
    </>
  );
}
