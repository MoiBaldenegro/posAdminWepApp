import React, { ReactNode } from 'react';

interface TableColumn {
  header: string;
  accessor: string;
}

interface TableProps {
  data: Record<string, any>[];
  columns: TableColumn[];
}

export const useTable = (props: TableProps) => {
  const { data, columns } = props;

  const renderTableHeader = () => (
    <thead>
      <tr>
        {columns.map((column, index) => (
          <th key={index}>{column.header}</th>
        ))}
      </tr>
    </thead>
  );

  const renderTableBody = () => (
    <tbody>
      {data.map((item, index) => (
        <tr key={index}>
          {columns.map((column, columnIndex) => (
            <td key={columnIndex}>{item[column.accessor]}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );

  const renderTable = () => (
    <table>
      {renderTableHeader()}
      {renderTableBody()}
    </table>
  );

  return {
    renderTable,
  };
};
