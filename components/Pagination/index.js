import React from "react";
import { usePagination, DOTS } from './usePagination';
import style from "./pagination.module.css";

const Pagination = ({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
}) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <ul className={`${style["pagination-container"]}`}>
      <li
        className={`${style["pagination-item"]} ${
          currentPage === 1 ? style.disabled : ""
        }`}
        onClick={onPrevious}
      >
        <div className={`${style.arrow} ${style.left}`} />
      </li>

      {paginationRange.map((pageNumber, index) => {
        if (pageNumber === DOTS) {
          return (
            <li
              key={`dots-${index}`}
              className={`${style["pagination-item"]} ${style.dots}`}
            >
              &#8230;
            </li>
          );
        }

        return (
          <li
            key={`page-${pageNumber}`}
            className={`${style["pagination-item"]} ${
              pageNumber === currentPage ? style.selected : ""
            }`}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}

      <li
        className={`${style["pagination-item"]} ${
          currentPage === lastPage ? style.disabled : ""
        }`}
        onClick={onNext}
      >
        <div className={`${style.arrow} ${style.right}`} />
      </li>
    </ul>
  );
};

export default Pagination;
