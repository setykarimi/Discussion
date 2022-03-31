import styles from './discussion.module.css'
import Comment from "../../components/Comment/Comment";
import FullComment from "../../components/FullComment/FullComment";
import NewComment from "../../components/NewComment/NewComment";
import { useEffect, useState } from 'react';
import axios from 'axios';

const Discussion = () => {
    const [comments, setComments] = useState(null)
    const [selectedId, setSelectedId] = useState(null)

    // how 2 get data
    // 1. useEffect () => http
    // 2. CDM => get

    // 2xx => ok!
    // 301 , 302 => redirect ! => SEO
    // 4xx => 401 => unAuthorized , 402 , 403 => not Access , 404 => not found 
    // 5xx => server

    useEffect(() => {
        // const getComments = async () => {
        //     try {
        //         const { data } = await axios.get(
        //             'http://jsonplaceholder.typicode.com/comments'
        //         );
        //         setComments(data.slice(0, 4))
        //     } catch (error) {
        //         console.log(error);
        //     }
        // }
        // getComments()


        axios
            .get('http://localhost:3001/comments')
            .then((response) => {
                console.log(response);
                setComments(response.data)
            }).catch((error) => {
                console.log(error);
            })
    }, [])


    const selectCommentHandler = (id) => {
        setSelectedId(id)
    }





    const renderComments = () => {
        return comments ? (comments.map((c) =>
            <Comment
                key={c.id}
                name={c.name}
                email={c.email}
                onClick={() => selectCommentHandler(c.id)} />)
        ) :
            (<p>Loading ...</p>)

    }

    return (
        <main>
            <section> {renderComments()}</section>

            <section>
                <FullComment commentId={selectedId} setComments = {setComments} />
            </section>
            <section>
                <NewComment setComments = {setComments} />
            </section>
        </main>);
}

export default Discussion;