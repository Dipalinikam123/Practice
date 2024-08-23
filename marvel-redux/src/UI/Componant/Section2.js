import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCharacterData } from '../../Store/actions/action';
import './Section2.css'
export default function Section2() {
  const data = useSelector((store) => store?.fetchCharApiReducer);
  const dispatch = useDispatch();
  console.log("------section 2", data)

  const [offset, setOffset] = useState(0);
  const [limit] = useState(8); // Number of items per page

  useEffect(() => {
    dispatch(fetchCharacterData(offset,limit));
  }, [dispatch,offset,limit]);

  

  const loadmoreHandeler=()=>{
    if (!data.loading && !data.error) {
      setOffset(prevOffset => prevOffset + limit);
    }
  }
  return (
    <>
      <h3 className='container mt-3'>New this week</h3>
      {data?.error && <h1 className='text-center text-danger'>Error loading data</h1>}
      {data?.loading ? (
        <div className='d-flex justify-content-center my-3'>
          <div className="loader"></div>
        </div>
      ) : data.data.length === 0 ? (
        <div className='d-flex justify-content-center'>
          <div className="character-card fallback-card text-center p-3">
            <h5 className='card-title'>No Data Available</h5>
            <p className='card-text'>We couldn't find any characters at the moment. Please check back later.</p>
          </div>
        </div>
      ) : (
        <>
        
        <div className='container d-flex justify-content-center flex-wrap gap-5 character-page'>
          {data.data.map((e, i) => (
            <div className="mt-2" style={{ width: "15rem", }} key={i}>
              <div className="character-card shadow-lg">
                <div className="character-thumbnail">
                  <img
                    className='card-img-top '
                    role='button'
                    src={e?.thumbnail ? `${e?.thumbnail.path}.${e?.thumbnail.extension}` : null}
                    alt={`${e?.title} Cover`}
                  />
                </div>
                <div className="card-body pb-1 pt-2">
                  <h6 className="card-title fw-bold">{e?.name}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='d-flex justify-content-center'>
        <button
              className="bg-danger px-3 py-2 text-light border-0 my-5 button-skew"
              onClick={loadmoreHandeler}
              disabled={data?.loading} // Disable button when loading
            >
              {data?.loading ? 'Loading...' : 'Load More'}
            </button>
        </div>
        </>
      )
      }
    </>
  );
}
