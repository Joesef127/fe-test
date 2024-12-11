import React, { useEffect, useState } from 'react';
import TableRow from './TableRow.tsx';
import Pagination from './Pagination.tsx';
import { fetchUsers } from '../service/api.ts';
import { v4 as uuidv4 } from 'uuid';
import filter from '../assets/icons/filter.png';
import error_loading from '../assets/icons/error_loading.png';
import UserFilter from './UserFilter.tsx';

const UserTable: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(10);

  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [filterPosition, setFilterPosition] = useState<{
    x: number;
    y: number;
  } | null>(null);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const apiData = await fetchUsers();
        setUsers(apiData.users);
      } catch (error) {
        setError('Failed to load user data. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    loadUsers();
  }, []);

  useEffect(() => {
    const handleClickOutside = () => {
      if (isFilterVisible) setIsFilterVisible(false);
    };

    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [isFilterVisible]);

  if (loading)
    return (
      <div className="spinner-wrapper">
        <span className="loader"></span>Loading...
      </div>
    );
  if (error)
    return (
      <div className="error-wrapper">
        <span className="error-icon">
          <img src={error_loading} alt="error loading" width={300} />
        </span>
        {error}
      </div>
    );

  const displayedUsers = users.slice(
    (currentPage - 1) * usersPerPage,
    currentPage * usersPerPage
  );

  const handleOpenFilter = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent window click handler from triggering
    const rect = e.currentTarget.getBoundingClientRect();
    setFilterPosition({ x: rect.right, y: rect.top + window.scrollY });
    setIsFilterVisible(true);
  };

  return (
    <>
      <div className="users-table-wrapper">
        <div className="table-header">
          {[
            'Organization',
            'Username',
            'Email',
            'Phone Number',
            'Date Joined',
            'Status',
          ].map((header) => (
            <div className="thead" key={uuidv4()}>
              <p className="thead-text">{header}</p>
              <img
                src={filter}
                alt="filter"
                className="thead-icon"
                onClick={handleOpenFilter}
              />
            </div>
          ))}

          {/* Filter Modal */}
          {isFilterVisible && filterPosition && (
            <div
              className="user-filter-wrapper"
              style={{
                position: 'absolute',
                top: filterPosition.y - 220,
                left: filterPosition.x - 400,
                zIndex: 1000,
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <UserFilter />
            </div>
          )}
        </div>

        <div className="table-body">
          {displayedUsers.map((user, index) => (
            <TableRow key={index} user={user} />
          ))}
        </div>
      </div>

      <Pagination
        totalUsers={users.length}
        usersPerPage={usersPerPage}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        onUsersPerPageChange={setUsersPerPage}
      />
    </>
  );
};

export default UserTable;
