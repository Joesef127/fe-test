import React, { useEffect, useState } from 'react';
import TableRow from './TableRow.tsx';
import Pagination from './Pagination.tsx';
import { fetchUsers } from '../service/api.ts';
import { v4 as uuidv4 } from 'uuid';
import filter from '../assets/icons/filter.png';


const UserTable: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(10);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const apiData = await fetchUsers();
        setUsers(apiData.users);
      } catch (error) {
        console.error('Error loading user data:', error);
        setError('Failed to load user data. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    loadUsers();
  }, []);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  const displayedUsers = users.slice(
    (currentPage - 1) * usersPerPage,
    currentPage * usersPerPage
  );

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
              <img src={filter} alt="filter" className="thead-icon" />
            </div>
          ))}
        </div>
        <div className="table-body">
          {displayedUsers.map((user) => (
            <TableRow key={uuidv4()} user={user} />
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
