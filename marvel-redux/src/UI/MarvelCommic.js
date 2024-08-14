import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchApiData } from '../Data/Action/action';
import './MarvelCommic.css'

export default function MarvelCommic() {
  const data = useSelector((store) => store?.fetchApiReducer);
  const dispatch = useDispatch();

  console.log("---data",data);
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8); // Adjust items per page as needed

  useEffect(() => {
    dispatch(fetchApiData());
  }, []);

  // Calculate paginated data
  const indexOfLastItem = currentPage * itemsPerPage;  //8
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;//0
  const currentItems = data?.data.slice(indexOfFirstItem, indexOfLastItem);// 7 items

  // Calculate total pages
  const totalPages = Math.ceil(data?.data.length / itemsPerPage);

  // Pagination controls
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };  

  return (
    <>
      {data?.loading ? (
        <h1 className='App'>Loading....</h1>
      ) : (
        <div>
          <div className='container d-flex flex-wrap gap-3 w-full '>
            {currentItems.map((e, i) => (
              <div className="mt-5" style={{ "width": "18rem" }} key={i}>
                <div className="comic-thumbnail">
                  <img className='card-img-top ratio' role='button' src={e?.thumbnail ? `${e?.thumbnail.path}.${e?.thumbnail?.extension}` : null} alt={`${e?.title} Cover`} />
                </div>
                <div className="card-body pb-1 pt-2">
                  <h6 className="card-title fw-bold">{e?.title}</h6>
                  {/* <p className="card-text">{e?.creator?.items[0].name}</p> */}
                </div>
              </div>
            ))}
          
          

            <nav aria-label="Page navigation example mt-5">
              <ul className="pagination">
              <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                  <span className="page-link"  aria-label="Previous" onClick={handlePrevious}>
                    <span aria-hidden="true">&laquo;</span>
                    <span className="sr-only">Previous</span>
                  </span>
                </li>
                {Array.from({ length: totalPages }, (_, index) => (
                  <li key={index} onClick={() => handlePageChange(index + 1)} className={`page-item page-button ${currentPage === index + 1 ? 'active' : ''}`}><span className="page-link" >{index + 1}</span></li>
                ))}
                 <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                  <span className="page-link"  aria-label="Next"  onClick={handleNext}>
                    <span aria-hidden="true">&raquo;</span>
                    <span className="sr-only">Next</span>
                  </span>
                </li>
              </ul>
            </nav>
            </div>
          </div>
       
      )}
    </>
  );
}
