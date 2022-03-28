import styles from  './comment.module.css'
const Comment = ({name , email , onClick}) => {
    return ( <div className={styles.comment} onClick={onClick}>
        <p>{name}</p>
        <p>{email}</p>
    </div> );
}
 
export default Comment;