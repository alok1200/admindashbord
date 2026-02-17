import {
  AiOutlineSortAscending,
  AiOutlineSortDescending,
} from 'react-icons/ai';
import {
  type Column,
  type TableOptions,
  type TableInstance,
  type HeaderGroup,
  type Row,
  type Cell,
  type TableState,
  type UsePaginationInstanceProps,
  type UsePaginationState,
  type UseSortByInstanceProps,
  type UseSortByColumnProps,
  type UseSortByState,
  usePagination,
  useSortBy,
  useTable,
} from 'react-table';

type TableInstanceWithHooks<T extends object> = TableInstance<T> &
  UsePaginationInstanceProps<T> &
  UseSortByInstanceProps<T>;

type TableStateWithHooks<T extends object> = TableState<T> &
  UsePaginationState<T> &
  UseSortByState<T>;

function TableHOC<T extends object>(
  columns: Column<T>[],
  data: T[],
  containerClassname: string,
  heading: string,
  showPagination: boolean = false,
) {
  return function HOC() {
    const options: TableOptions<T> = {
      columns,
      data,
      initialState: {
        pageSize: 6,
      } as Partial<TableStateWithHooks<T>>,
    };

    const tableInstance = useTable<T>(
      options,
      useSortBy,
      usePagination,
    ) as TableInstanceWithHooks<T>;

    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      page,
      prepareRow,
      nextPage,
      pageCount,
      previousPage,
      canNextPage,
      canPreviousPage,
      state,
    } = tableInstance;

    const { pageIndex } = state as TableStateWithHooks<T>;

    return (
      <div className={containerClassname}>
        <h2 className="heading">{heading}</h2>

        <table className="table" {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup: HeaderGroup<T>) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => {
                  const sortColumn = column as HeaderGroup<T> &
                    UseSortByColumnProps<T>;

                  return (
                    <th
                      {...sortColumn.getHeaderProps(
                        sortColumn.getSortByToggleProps(),
                      )}
                    >
                      {sortColumn.render('Header')}
                      {sortColumn.isSorted && (
                        <span>
                          {' '}
                          {sortColumn.isSortedDesc ? (
                            <AiOutlineSortDescending />
                          ) : (
                            <AiOutlineSortAscending />
                          )}
                        </span>
                      )}
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row: Row<T>) => {
              prepareRow(row);

              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell: Cell<T>) => (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>

        {showPagination && (
          <div className="table-pagination">
            <button disabled={!canPreviousPage} onClick={previousPage}>
              Prev
            </button>
            <span>{`${pageIndex + 1} of ${pageCount}`}</span>
            <button disabled={!canNextPage} onClick={nextPage}>
              Next
            </button>
          </div>
        )}
      </div>
    );
  };
}

export default TableHOC;
