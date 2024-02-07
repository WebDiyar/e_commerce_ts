interface PaginationProps {
    productsPerPage: number;
    totalProducts: number;
    paginate: (pageNumber: number) => void;
    currentPage: number;
}

const Pagination = ({ productsPerPage, totalProducts, paginate, currentPage }: PaginationProps) => {
    const pageNumbers: number[] = [];

    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <ul className="default-pagination lab-ul">

            <li>
                <a
                    onClick={() => {
                        if (currentPage <= pageNumbers.length && currentPage > 1) {
                            paginate(currentPage - 1);
                        }
                    }
                    } ><i className="icofont-rounded-left"></i></a>
            </li>

            {pageNumbers.map((number) => (
                <li key={number} className={`page-item ${number === currentPage ? 'bg-warning' : ''}`} >
                    <button onClick={() => paginate(number)} className='bg-transparent'>
                        {number}
                    </button>
                </li>
            ))}


            <li>
                <a
                    onClick={() => {
                        if (currentPage < pageNumbers.length) {
                            paginate(currentPage + 1);
                        }
                    }}
                ><i className="icofont-rounded-right"></i></a>
            </li>

        </ul>
    )
}

export default Pagination
