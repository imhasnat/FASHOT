import React from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({ pageCount, handlePageClick }) => {
    return (
        <div>
            <ReactPaginate
                previousLabel={"previous"}
                nextLabel={"next"}
                breakLabel={"..."}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={3}
                onPageChange={handlePageClick}
                containerClassName={"btn-group flex justify-center my-14"}
                pageClassName={"btn"}
                previousClassName={"btn"}
                nextClassName={"btn"}
                breakClassName={"btn"}
                activeClassName={"btn-active"}
            />
        </div>
    );
};

export default Pagination;