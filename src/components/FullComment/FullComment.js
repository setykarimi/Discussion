import axios from 'axios'
import { useEffect, useState } from 'react'
import  './fullComment.css'

const FullComment = ({setComments , commentId }) => {
    const [comment, setComment] = useState(null)

    useEffect(() => {
        if (commentId) {
            axios
                .get(`http://localhost:3001/comments/${commentId}`)
                .then((res) => setComment(res.data))
                .catch((err) => console.log(err))
        }
    }, [commentId])

    // commentId ?
    // comment ?


    const deleteHandler = () => {
        axios
        .delete(`http://localhost:3001/comments/${commentId}` )
        
        .then((res) => axios.get("http://localhost:3001/comments"))
        .then((res) => setComments(res.data))
        .catch((err) => console.log(err))
    }

    const styles = {
        color: "#444",
        backgroundColor: "#efefef",
        padding: "10px",
        fontWeight: "bold"
    }

    let commentDetail = <p style={styles}>please select the Comment !</p>

   

    if (commentId) commentDetail = <p>Loading ...</p>;

    if(comment){
        commentDetail = (
        <div className='fullComment'>
            <p>name : {comment.name}</p>
            <p>email : {comment.email}</p>
            <p>body : {comment.body}</p>
            <button onClick={deleteHandler}>Delete</button>
        </div>
        )
    }

    return commentDetail
}

export default FullComment;