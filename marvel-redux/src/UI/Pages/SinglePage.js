import React, { useEffect } from 'react'
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { fetchSingleData } from "../../Store/actions/action"
import { useNavigate } from "react-router";


export default function SinglePage() {
  const data = useSelector((store) => store.fetchSinglePage)

  const dispatch = useDispatch()

  const urldata = useParams();

  const navigate = useNavigate()

  useEffect(() => {
    dispatch(fetchSingleData(urldata?.id))
  }, [dispatch])

  console.log("---urldata", urldata);
  console.log("--data", data);

  return (
    <>
      {
        Object.values(data?.data)?.length === 0 || data?.data.length===0 ? (<div className='text-center' style={{ height: "60vh" }}> Loading....</div>) :
          (
            <div className="card mb-3 border-0 container mt-4">
              <div className="row g-0">
                <div className="mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-left" viewBox="0 0 16 16">
                    <path d="M10 12.796V3.204L4.519 8zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753" />
                  </svg>
                  <span role="button" onClick={() => navigate('/comic')}> Back To Series </span></div>
                <div className="col-md-4">
                  <img src={data?.data[0]?.thumbnail ? `${data?.data[0]?.thumbnail.path}.${data?.data[0]?.thumbnail.extension}` : null} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-5">
                  <div className="card-body">
                    <h2 className="card-title">{data?.data[0]?.title}</h2>
                    <p className="card-text">Creator : {data?.data[0]?.creators?.items[0]?.name}</p>
                    <p className="card-text">Series : {data?.data[0]?.series?.name}</p>
                    <p className="card-text">Available Stories : {data?.data[0]?.stories?.available}</p>
                  {data?.data[0]?.stories?.items.map((e,i)=>{
                      return(
                        <p className="card-text">{e.name} - Type:{e.type}</p>
                      )
                    })}

                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                  </div>
                </div>
              </div>
            </div>)

      }
    </>
  )
}
