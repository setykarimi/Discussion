import axios from 'axios';
import { useState } from 'react';
import styles from './newComment.module.css'
const NewComment = () => {

  const [comment , setComment] = useState({
    name  : "",
    email : "",
    content : ""
  })


  const changeHandler = (e) => {
    setComment({...comment , [e.target.name] : e.target.value })
  }


  const newPostHandler = () => {
    axios.post("https://jsonplaceholder.typicode.com/comments" , comment)
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err))
  }


  return (
    <div className={styles.newComment}>
      <h3> add new Comment </h3>

      <div className={styles.form_control}>
        <label>name</label>
        <input type="text" onChange={changeHandler} name="name"/>
      </div>

      <div className={styles.form_control}>
        <label>email</label>
        <input type="email" onChange={changeHandler} name="email"/>
      </div>

      <div className={styles.form_control}>
        <label>body</label>
        <textarea type="textarea" onChange={changeHandler} name="content"/>
      </div>

      <button onClick={newPostHandler}>add Comment</button>
    </div>
  );
}

export default NewComment;