import ReactPaginate from "react-paginate";
import { useState } from "react";
import css from "./Pagination.module.css";

function Pagination({ pages }: { pages: number }) {
  const [page, setPage] = useState(1);

  return (<>
    <ReactPaginate
      pageCount={pages}
      pageRangeDisplayed={5}
      marginPagesDisplayed={1}
      onPageChange={({ selected }) => setPage(selected + 1)}
      forcePage={page - 1}
      containerClassName={css.pagination}
      activeClassName={css.active}
      nextLabel="→"
      previousLabel="←"
    />
    </>
  );
}

export default Pagination;
