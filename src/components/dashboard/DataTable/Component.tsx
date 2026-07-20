import React from 'react';
import clsx from 'clsx';
import styles from './DataTable.module.css';

export type ColumnDef<T> = {
  key: string;
  header: string;
  render: (row: T) => React.ReactNode;
  width?: string;
};

export type DataTableProps<T> = {
  columns: readonly ColumnDef<T>[];
  rows: readonly T[];
  getRowKey: (row: T) => string;
  caption?: string;
  className?: string;
  emptyMessage?: string;
};

export function DataTable<T>({
  columns,
  rows,
  getRowKey,
  caption,
  className,
  emptyMessage = 'No data available.'
}: DataTableProps<T>) {
  return (
    <div className={clsx(styles.wrapper, className)} role="region" aria-label={caption}>
      <table className={styles.table}>
        {caption && <caption className={styles.caption}>{caption}</caption>}
        <thead>
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                scope="col"
                className={styles.th}
                style={col.width ? { width: col.width } : undefined}
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.length === 0 ? (
            <tr>
              <td className={styles.empty} colSpan={columns.length}>
                {emptyMessage}
              </td>
            </tr>
          ) : (
            rows.map((row) => (
              <tr key={getRowKey(row)} className={styles.tr}>
                {columns.map((col) => (
                  <td key={col.key} className={styles.td}>
                    {col.render(row)}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
