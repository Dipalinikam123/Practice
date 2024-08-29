import React, { useEffect, useState } from 'react';
import { fetchComicData } from '../../Store/actions/action';
import { useNavigate } from "react-router";
import './MarvelCommic.css';
import { useDispatch, useSelector } from 'react-redux';


export default function MarvelComics() {
  const data = useSelector((store) => store?.fetchApiReducer);
  const dispatch = useDispatch();

  console.log("--data-comic", data?.data);
  // Pagination state
  const [offset, setOffset] = useState(0);
  const [limit] = useState(8); // Number of items per page
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(fetchComicData(offset, limit));
  }, [offset, limit, dispatch]);

  const handleScroll = () => {
    // Check if we are at the bottom of the page
    if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {

      // console.log("----!data.loading ",!data.loading );
      // console.log("----!data.error ",!data.error );
      console.log("!data.loading && !data.error", !data.loading && !data.error);
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

  const redirect = (id) => {
    navigate(`/singlecomic/${id}`)
  }

  return (
    <>
      {data?.error && <h1 className='App'>Error loading data</h1>}
      {
        data.data.length === 0 ? (
          <>
            <div className='d-flex justify-content-center my-3'><div className="loader"></div></div>
            <div style={{ height: "60vh" }}></div>
          </>
        ) : (
          <div className='container-lg row row-cols-2 row-cols-md-4 row-cols-lg-5 d-flex justify-content-center flex-wrap m-auto w-full comic-page '>
            {data.data.map((e, i) => (
              <div className="mt-5"   key={i}>
                <div className="comic-thumbnail" >
                  <img
                    className='card-img-top ratio '
                    role='button'
                    src={e?.thumbnail ? `${e?.thumbnail.path}.${e?.thumbnail.extension}` : null}
                    alt={`${e?.title} Cover`}
                    onClick={() => redirect(e?.id)}
                  />
                </div>
                <div className="card-body pb-1 pt-2">
                  <h6 className="card-title fw-bold text-truncate">{e?.title}</h6>
                </div>
              </div>
            ))}
          </div>
        )
      }
      {(data?.loading && data?.data.length !== 0) && <div className='d-flex justify-content-center my-3'>Loading...</div>}
    </>
  );
}
