
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import PostModal from './Modal.js/PostModal';
import { toast } from 'react-toastify';
import UserPostCard from './Cards/UserPostCard';
import SingleUserCard from './Cards/SingleUserCard';
import { HeaderAuth, UseErrorHandlingHook } from '../CustomHook/UseErrorHandlingHook';

export default function SinglePage() {
    const [singleData, setSingleData] = useState({});

    const [postInput, setPostInput] = useState({ title: "", body: "" });
    const [postData, setPostData] = useState([]);

    const [commentInput, setCommentInput] = useState({ name: "", email: "", body: "" });
    const [commentData, setCommentData] = useState({});

    const [modal, setModal] = useState(false);
    const [openCommentId, setOpenCommentId] = useState(null);

    const urlData = useParams();

    const toggle = () => setModal(!modal);

   
// -----------------------------------Get user Data-------------------------------------------
    useEffect(() => {
        axios({
            method: "get",
            url: `https://gorest.co.in/public/v2/users/${urlData?.id}`,
            headers: HeaderAuth,
        }).then((res) => {
            console.log("-----res", res);
            setSingleData(res?.data)
        }).catch((err) => {
            console.log("-----err", err);
            UseErrorHandlingHook(err)
        })
    }, [urlData?.id])
    console.log("----singlePage Data", singleData);


// -----------------------------------Get Post Data-------------------------------------------
    useEffect(() => {
        axios({
            method: "get",
            url: `https://gorest.co.in/public/v2/users/${urlData?.id}/posts`,
            headers: HeaderAuth,
        }).then((res) => {
            setPostData(res?.data);
        }).catch((err) => {
            UseErrorHandlingHook(err)
        });
    }, [urlData?.id, modal]);
    console.log("post data ---", postData);


    // -----------------------------------Get Comment Data-------------------------------------------

    const fetchCommentData = (postId) => {
        // isLoading ? (<p>Loading...</p>) :
        axios({
            method: "get",
            url: `https://gorest.co.in/public/v2/posts/${postId}/comments`,
            headers: HeaderAuth,
        }).then((res) => {
            setCommentData((prevState) => ({
                ...prevState,
                [postId]: res.data,
            }));
        }).catch((err) => {
            UseErrorHandlingHook(err)
        });
    };

    console.log("-----commentdata----", commentData);

// -----------------------------------Add Post Data-------------------------------------------

    const addPostHandler = (e) => {
        e.preventDefault();
        if (postInput.title === "" || postInput.body === "") {
            toast.warn("Field's Are Empty", { autoClose: 1000 });
            return;
        }
        axios({
            method: "post",
            url: `https://gorest.co.in/public/v2/users/${urlData?.id}/posts`,
            headers: HeaderAuth,
            data: postInput,
        }).then((res) => {
            console.log("---post Add res", res);
            setPostInput({ title: "", body: "" });
            toggle();
        }).catch((err) => {
            UseErrorHandlingHook(err)
        });
    };


// -----------------------------------Comment Button Functionality-------------------------------------------

    const handleCommentButtonClick = (id) => {
        console.log("----id---id", id);
        fetchCommentData(id)

        if (openCommentId === id) {
            setOpenCommentId(null);
        } else {
            setOpenCommentId(id);

        }
    };

// -----------------------------------add Comment Data-------------------------------------------

    const commentSubmitHandler = (event, postId) => {
        if (!commentData[postId]?.length) {
            setTimeout(() => {
                <p>No Comments</p>
            }, 2000);
            <h2>Loading...</h2>
        }
        event.preventDefault();
        if (commentInput.body === "") {
            toast.warn("Fields are empty", { autoClose: 1000 });
            return;
        }
        axios({
            method: "post",
            url: `https://gorest.co.in/public/v2/posts/${postId}/comments`,
            headers: HeaderAuth,
            data: {
                name: singleData?.name,
                email: singleData?.email,
                body: commentInput?.body
            }
        }).then((res) => {
            console.log("---comment Add res", res);
            setCommentInput({ name: "", email: "", body: "" });
            fetchCommentData(postId)
        }).catch((err) => {
            UseErrorHandlingHook(err)
        });
    };

    return (
        <>
            <PostModal modal={modal} toggle={toggle} setPostInput={setPostInput} postInput={postInput} addPostHandler={addPostHandler} />
            
            <SingleUserCard singleData={singleData} toggle={toggle} />
            <h5 className="card-title text-center mb-2">User Posts</h5>
            <div style={{ height: '450px', overflow: 'auto', scrollbarWidth: 'thin', scrollbarColor: 'lightgrey transparent', }}>
                <UserPostCard postData={postData} commentSubmitHandler={commentSubmitHandler} setCommentInput={setCommentInput} commentInput={commentInput} commentData={commentData} openCommentId={openCommentId} handleCommentButtonClick={handleCommentButtonClick} />
            </div>
        </>
    );
}



