import React from "react";


const TableRow: React.FC<{ user: any }> = ({ user }) => {
  return (
    <tr className="table-row">
      <td className="table-data">{user.organization}</td>
      <td className="table-data">{user.username}</td>
      <td className="table-data">{user.email}</td>
      <td className="table-data">{user.phoneNumber}</td>
      <td className="table-data">{user.dateJoined}</td>
      <td className="table-data">{user.status}</td>
    </tr>
  );
};

export default TableRow;
