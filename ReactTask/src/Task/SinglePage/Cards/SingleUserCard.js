import { ArrowLeft, CircleFadingPlus } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function SingleUserCard({ singleData, toggle }) {
  const navigate = useNavigate()
  
  return (
    <>
      <div className='pt-2 mb-5 d-flex justify-content-center align-items-center flex-column gap-3'>
        <Button className='border bg-dark text-light py-1 px-3 rounded ' onClick={() => navigate('/')}><ArrowLeft color="#ffffff" /></Button>
        <Card className="card shadow" style={{ width: '28rem' }}>
          <Card.Body>
            <Card.Title className="text-center mb-5">User Details</Card.Title>
            <Card.Text><b className='me-5'>Name:</b>{singleData?.name}</Card.Text>
            <Card.Text><b className='me-5'>Email: </b>{singleData?.email}</Card.Text>
            <Card.Text><b className='me-5'>Gender: </b> {singleData?.gender}</Card.Text>
            <Card.Text className="card-text mb-5 text-capitalize"><b className='me-5'>Status:</b> <span className={singleData?.status === "active" ? "text-success fw-semibold" : "text-danger fw-semibold"}>{singleData?.status} </span></Card.Text>
            <div className='d-flex justify-content-center'>
              <Button className='border bg-light text-dark py-1 px-3 rounded' onClick={toggle}><CircleFadingPlus size={26} /></Button>
            </div>
          </Card.Body>
        </Card>

      </div>
    </>
  )
}
