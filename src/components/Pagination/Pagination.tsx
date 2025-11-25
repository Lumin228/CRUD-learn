import css from "./Pagination.module.css";
import * as ReactPaginateLib from 'react-paginate';

// Support both ESM default export and CommonJS namespace import
const ReactPaginate: any = (ReactPaginateLib as any)?.default ?? ReactPaginateLib;

interface PaginationProps {
  pages: number;
  changePage: (page: number) => void;
  currentPage: number;
}


function Pagination({ pages, changePage, currentPage }: PaginationProps) {

  return (
    <ReactPaginate
        pageCount={pages}
        pageRangeDisplayed={5}
        marginPagesDisplayed={1}
        onPageChange={({ selected }) => changePage(selected + 1)}
        forcePage={currentPage - 1}
        containerClassName={css.pagination}
        activeClassName={css.active}
        nextLabel="→"
        previousLabel="←"
      />
  );
}

export default Pagination;
