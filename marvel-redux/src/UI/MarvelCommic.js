import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchApiData } from '../Data/Action/action';
import ReactLoading from 'react-loading';
import './MarvelCommic.css';

export default function MarvelCommic() {
  const data = useSelector((store) => store?.fetchApiReducer);
  const dispatch = useDispatch();

  // Pagination state
  const [offset, setOffset] = useState(0);
  const [limit] = useState(8); // Number of items per page

  useEffect(() => {
    dispatch(fetchApiData(offset, limit));
  }, [offset, limit, dispatch]);

  const handleScroll = () => {
    // Check if we are at the bottom of the page
    if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
      // Only update offset if not already loading
      // console.log("----!data.loading ",!data.loading );
      // console.log("----!data.error ",!data.error );
      console.log("!data.loading && !data.error",!data.loading && !data.error);
      if (!data.loading && !data.error) {
        setOffset(prevOffset => prevOffset + limit);
      }
    }
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, [data.loading, data.error]); // Dependencies to manage listener re-attachment

  return (
    <>
     
      {data?.error && <h1 className='App'>Error loading data</h1>}
      <div>
        <div className='container d-flex justify-content-center flex-wrap gap-3 w-full'>
          {data?.data?.map((e, i) => (
            <div className="mt-5" style={{ width: "18rem" }} key={i}>
              <div className="comic-thumbnail">
                <img
                  className='card-img-top ratio'
                  role='button'
                  src={e?.thumbnail ? `${e?.thumbnail.path}.${e?.thumbnail.extension}` : null}
                  alt={`${e?.title} Cover`}
                />
              </div>
              <div className="card-body pb-1 pt-2">
                <h className="card-title fw-bold">{e?.title}</h>
              </div>
            </div>
          ))}
        </div>
      </div>
      {data?.loading && <div className='d-flex justify-content-center my-3'><div className="loader"></div></div> }
    </>
  );
}
