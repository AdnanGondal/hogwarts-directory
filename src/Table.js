import React from "react";

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>House</th>
      </tr>
    </thead>
  );
};

const TableBody = (props) => {
  const rows = props.studentData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.house}</td>
        <td>
          <div
            onClick={() => props.removeStudent(index)}
            className="btn btn-one"
          >
            <span>Delete</span>
          </div>
        </td>
      </tr>
    );
  });

  return <tbody>{rows}</tbody>;
};

const Table = (props) => {
  const { studentData, removeStudent } = props;
  return (
    <table>
      <TableHeader />
      <TableBody studentData={studentData} removeStudent={removeStudent} />
    </table>
  );
};

export default Table;
