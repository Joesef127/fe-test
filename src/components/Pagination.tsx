import React, { JSX } from "react";

interface PaginationProps {
  totalUsers: number;
  usersPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  onUsersPerPageChange: (usersPerPage: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalUsers,
  usersPerPage,
  currentPage,
  onPageChange,
  onUsersPerPageChange,
}) => {
  const totalPages = Math.ceil(totalUsers / usersPerPage);

  const renderPageNumbers = () => {
    const pageNumbers:JSX.Element[] = [];
    const totalPagesToShow = 3; 
    const isNearStart = currentPage <= totalPagesToShow;
    const isNearEnd = currentPage >= totalPages - totalPagesToShow + 1;
  
    if (isNearStart) {
      for (let i = 1; i <= Math.min(3, totalPages); i++) {
        pageNumbers.push(
          <button
            key={i}
            className={`pagination-btn ${currentPage === i ? "active" : ""}`}
            onClick={() => onPageChange(i)}
          >
            {i}
          </button>
        );
      }
      if (totalPages > 5) {
        pageNumbers.push(<span key="dots-1">...</span>);
        pageNumbers.push(
          <button
            key={totalPages - 1}
            className="pagination-btn"
            onClick={() => onPageChange(totalPages - 1)}
          >
            {totalPages - 1}
          </button>
        );
        pageNumbers.push(
          <button
            key={totalPages}
            className="pagination-btn"
            onClick={() => onPageChange(totalPages)}
          >
            {totalPages}
          </button>
        );
      }
    } else if (isNearEnd) {
      pageNumbers.push(
        <button
          key={1}
          className="pagination-btn"
          onClick={() => onPageChange(1)}
        >
          1
        </button>
      );
      pageNumbers.push(
        <button
          key={2}
          className="pagination-btn"
          onClick={() => onPageChange(2)}
        >
          2
        </button>
      );
      pageNumbers.push(<span key="dots-2">...</span>);
      for (let i = totalPages - 2; i <= totalPages; i++) {
        pageNumbers.push(
          <button
            key={i}
            className={`pagination-btn ${currentPage === i ? "active" : ""}`}
            onClick={() => onPageChange(i)}
          >
            {i}
          </button>
        );
      }
    } else {
      pageNumbers.push(
        <button
          key={1}
          className="pagination-btn"
          onClick={() => onPageChange(1)}
        >
          1
        </button>
      );
      pageNumbers.push(<span key="dots-3">...</span>);
  
      for (let i = currentPage - 1; i <= currentPage + 1; i++) {
        pageNumbers.push(
          <button
            key={i}
            className={`pagination-btn ${currentPage === i ? "active" : ""}`}
            onClick={() => onPageChange(i)}
          >
            {i}
          </button>
        );
      }
  
      pageNumbers.push(<span key="dots-4">...</span>);
      pageNumbers.push(
        <button
          key={totalPages}
          className="pagination-btn"
          onClick={() => onPageChange(totalPages)}
        >
          {totalPages}
        </button>
      );
    }
  
    return pageNumbers;
  };
  

  const handleUsersPerPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onUsersPerPageChange(Number(event.target.value));
  };

  return (
    <div className="pagination-wrapper">
      <div className="pagination-info">
        Showing{" "}
        <select
          className="users-per-page-dropdown"
          value={usersPerPage}
          onChange={handleUsersPerPageChange}
        >
          {[10, 25, 50, 100].map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>{" "}
        out of {totalUsers}
      </div>
      <div className="pagination-controls">
        <button
          className="pagination-arrow"
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
        >
          &lt;
        </button>
        {renderPageNumbers()}
        <button
          className="pagination-arrow"
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Pagination;
