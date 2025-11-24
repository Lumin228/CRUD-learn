import ReactPaginate from "react-paginate"
import { useState } from "react"
import css from './Pagination.module.css'

function Pagination() {

    const [page, setPage] = useState<number>(0);


    return (
        <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            onPageChange={()=> setPage(page + 1)}
            pageRangeDisplayed={5}
            pageCount={4}
            previousLabel="<"
            renderOnZeroPageCount={null}
        />)
}

export default Pagination