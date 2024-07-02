import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';



export default function UserPostCard({ postData, commentSubmitHandler, setCommentInput, commentInput, commentData, openCommentId, handleCommentButtonClick }) {

    const [isLoading, setLoading] = useState(true)
    const [commentsLoading, setCommentsLoading] = useState(true);

    // ----------------------post Loading--------------------
        useEffect(() => {
            if (postData?.length === 0) {
                setTimeout(() => {
                    setLoading(false);
                }, 2000);
            } else {
                setLoading(false);
            }
        }, [postData]);

    // ----------------------Comment Loading--------------------
        useEffect(() => {
            if (openCommentId !== null) {
                setTimeout(() => {
                    setCommentsLoading(false);
                }, 2000);
            }
        }, [openCommentId]);


    const renderLoading = () => <div className="loader-container "><div className="loader"></div></div>
    const renderLoadingMessage = () => <div>Loading...</div>
    const renderNoPostMessage = () => <h1>Post Not Uploaded ....!</h1>;

    console.log("-----coomentDta on post--", commentData);

    return (
        <div className='mt-5'>
            <div className='mb-5 d-flex flex-wrap justify-content-center flex-column align-items-center h-25 gap-5 align-items-top '>
                {isLoading ? (
                    renderLoading()
                ) : postData?.length === 0 ? (
                    renderNoPostMessage()
                ) : (
                    postData?.map((e) => (
                        <Card className="card shadow p-3" style={{ width: '28rem' }} key={e?.id}>
                            <Card.Text><b className='me-5'>Title:</b>{e?.title}</Card.Text>
                            <Card.Text><b className='me-5'>Body: </b>{e?.body}</Card.Text>

                            <hr className='w-100' />

                            {openCommentId === e?.id && (
                                <div className='w-100 '>
                                        <Form>
                                            <textarea
                                                placeholder='Comment here'
                                                rows={3}
                                                className='form-control w-100 h-auto mb-2'
                                                value={commentInput?.body}
                                                onChange={(e) => setCommentInput({ ...commentInput, body: e.target.value })}
                                            />
                                            <div className='d-flex justify-content-center align-items-center'>

                                                <Button
                                                    className='bg-success border py-1 px-4 text-light mb-2'
                                                    onClick={(event) => commentSubmitHandler(event, e?.id)}
                                                >
                                                    Submit
                                                </Button>
                                            </div>
                                            <hr />
                                        </Form>

                                        <div style={{ height: commentData[e?.id]?.length > 3 ? '200px' : 'auto', overflow: 'auto', scrollbarWidth: 'thin', scrollbarColor: 'lightgrey transparent' }}>
                                            {commentsLoading ? (
                                                <div className='text-center mb-2'>{renderLoadingMessage()}</div>
                                            ) : Object.keys(commentData).length <= 0 || commentData[e?.id]?.length === 0 ? (
                                                <p className='text-center'>No Comments</p>
                                            ) : (
                                                commentData[e?.id]?.map((ele, i) => (
                                                    <div key={i}>
                                                        <p className="card-text mb-3 p-2 bg-light"><b className='me-5'>Comment: </b>{ele?.body}</p>
                                                    </div>
                                                ))
                                            )}
                                        </div>
                                </div>
                            )}

                                            <div className='d-flex justify-content-center'>

                                                <Button
                                                    className='w-25 border bg-danger rounded text-light py-1 mb-3'
                                                    onClick={() => handleCommentButtonClick(e?.id)}
                                                >
                                                    Comment
                                                </Button>
                                            </div>
                        </Card>
                        ))
                    )}
            </div>
        </div>
        )
}
