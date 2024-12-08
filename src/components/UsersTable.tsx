import React, { useEffect, useState } from 'react';
import TableRow from './TableRow.tsx';
import Pagination from './Pagination.tsx';
import { fetchUsers } from '../service/api.ts';
import {v4 as uuidv4} from 'uuid';

const UserTable: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;

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
    <div className='users-table-wrapper'>
      <table className='users-table'>
        <thead className='table-head'>
          <tr className='table-row'>
            <th className='table-header'>ORGANIZATION</th>
            <th className='table-header'>USERNAME</th>
            <th className='table-header'>EMAIL</th>
            <th className='table-header'>PHONE NUMBER</th>
            <th className='table-header'>DATE JOINED</th>
            <th className='table-header'>STATUS</th>
          </tr>
        </thead>
        <tbody className='table-body'>
          {displayedUsers.map((user) => (
            <TableRow key={uuidv4()} user={user} />
          ))}
        </tbody>
      </table>
      <Pagination
        totalUsers={users.length}
        usersPerPage={usersPerPage}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default UserTable;
