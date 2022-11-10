import React, { useState } from 'react';
import useTitle from '../../Hook/useTitle';
import ReactPaginate from 'react-paginate';
import LoadAllService from './LoadAllService';

const AllServices = () => {
    const [count, setCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const [limit, setLimit] = useState(6);
    let pageCount = Math.ceil(count / limit);

    useTitle('All Services');


    const handlePageClick = (currentPage) => {
        setCurrentPage(currentPage.selected);
    }

    return (
        <div className='my-20'>
            <LoadAllService
                count={count}
                setCount={setCount}
                limit={limit}
                currentPage={currentPage}
            ></LoadAllService>
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

export default AllServices;