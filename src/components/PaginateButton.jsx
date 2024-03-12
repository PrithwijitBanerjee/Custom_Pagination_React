import React from 'react'

const PaginateButton = ({ page, setPage, photosPerPage, photos }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(photos?.length / photosPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <div className='d-flex justify-content-center align-items-center mt-3 mb-3'>
                <button className='btn' onClick={() => setPage(prevPage => {
                    if(page >= 1)
                    {
                        return prevPage - 1;
                    }else{
                        return 1;
                    }
                })}>{'<<<'} prev</button>
                {
                    pageNumbers?.map((pNo, id) => (
                        <button key={id} className={page === pNo ? 'btn bg-primary text-white' : 'btn'} onClick={() => setPage(pNo)}>{pNo}</button>
                    ))
                }
                <button className='btn' onClick={() => setPage(prevPage => {
                        if(page <= pageNumbers.length)
                        {
                            return prevPage + 1;
                        } else{
                            return 1;
                        }
                })}>next {'>>>'}</button>
        </div>
    )
}

export default PaginateButton