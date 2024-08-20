// import React from 'react';
// import { useSelector } from 'react-redux';

// const CommicList = () => {
//     const comicData = useSelector((store) => {
//         return store?.fetchApiReducer;
//     })

    
//     console.log("----commic", comicData.data);
//     const defaultThumbnail = 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg';
//     return (
        
//     )
// };

// export default CommicList;


// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchApiData } from '../Data/Action/action';
// import './MarvelCommic.css';

// export default function MarvelCommic() {
//   const data = useSelector((store) => store?.fetchApiReducer);
//   const dispatch = useDispatch();

//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage] = useState(8); // Adjust items per page as needed
//   const [offset, setOffset] = useState(0);

//   useEffect(() => {
//     dispatch(fetchApiData(offset, itemsPerPage));
//   }, [offset, dispatch, itemsPerPage]);

//   const totalItems = data?.totalItems || 0; // Make sure to get total items from your API response
//   const totalPages = Math.ceil(totalItems / itemsPerPage);

//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//     setOffset((pageNumber - 1) * itemsPerPage);
//   };

//   const handlePrevious = () => {
//     if (currentPage > 1) {
//       handlePageChange(currentPage - 1);
//     }
//   };

//   const handleNext = () => {
//     if (currentPage < totalPages) {
//       handlePageChange(currentPage + 1);
//     }
//   };

//   return (
//     <>
//       {data?.loading ? (
//         <h1 className='App'>Loading....</h1>
//       ) : (
//         <div>
//           <div className='container d-flex flex-wrap gap-3 w-full '>
//             {data?.data.map((e, i) => (
//               <div className="mt-5" style={{ width: "18rem" }} key={i}>
//                 <div className="comic-thumbnail">
//                   <img
//                     className='card-img-top ratio'
//                     role='button'
//                     src={e?.thumbnail ? `${e?.thumbnail.path}.${e?.thumbnail.extension}` : null}
//                     alt={`${e?.title} Cover`}
//                   />
//                 </div>
//                 <div className="card-body pb-1 pt-2">
//                   <h6 className="card-title fw-bold">{e?.title}</h6>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <nav aria-label="Page navigation example mt-5">
//             <ul className="pagination">
//               <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
//                 <span className="page-link" aria-label="Previous" onClick={handlePrevious}>
//                   <span aria-hidden="true">&laquo;</span>
//                   <span className="sr-only">Previous</span>
//                 </span>
//               </li>
//               {Array.from({ length: totalPages }, (_, index) => (
//                 <li
//                   role='button'
//                   key={index}
//                   onClick={() => handlePageChange(index + 1)}
//                   className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}
//                 >
//                   <span className="page-link">{index + 1}</span>
//                 </li>
//               ))}
//               <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
//                 <span className="page-link" aria-label="Next" onClick={handleNext}>
//                   <span aria-hidden="true">&raquo;</span>
//                   <span className="sr-only">Next</span>
//                 </span>
//               </li>
//             </ul>
//           </nav>
//         </div>
//       )}
//     </>
//   );
// }
