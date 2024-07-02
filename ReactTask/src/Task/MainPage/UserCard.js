import { FilePenLine, Trash } from 'lucide-react';
import React from 'react';
import Card from 'react-bootstrap/Card';

export default function UserCard({ data, redirect, editHandler, deleteHandler }) {

    return (
        <Card className="card" style={{ width: '18rem' }}>
            <Card.Body className="card-body" role='button' onClick={() => redirect(data?.id)}>
                <Card.Title className="card-title text-center">user card</Card.Title>
                <Card.Text > <b>Name: </b>{data?.name}</Card.Text>
                <Card.Text className="text-truncate"><b>Email: </b> {data?.email}</Card.Text>
                <Card.Text className="text-capitalize"><b>Gender: </b> {data?.gender}</Card.Text>
                <Card.Text className="text-capitalize "><b>Status: </b>
                    <span className={data?.status === "active" ? "text-success fw-semibold" : "text-danger  fw-semibold"}>{data?.status}</span></Card.Text>
            </Card.Body>
            <Card.Body className='d-flex justify-content-between'>
                <FilePenLine color="#79b493" role='button' onClick={() => editHandler(data)} />
                <Trash color="red" role='button' onClick={() => deleteHandler(data?.id)} />
            </Card.Body>
        </Card>
    );
}


// https://gorest.co.in/

// Authorization: "Bearer 91310987b494718fbb7665f08e1a83462ad66fb1cc83e59871f8dab3e3d3aec4",
// "Content-Type": "application/json",
// Accept: "application/json",