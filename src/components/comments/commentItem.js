import classes from "./CommentItem.module.css";

const CommentItem = (props) => {
  return (
    <li className={classes.item}>
      <figure>
        <blockquote>
          <p>{props.text}</p>
        </blockquote>
        <figcaption>{props.author}</figcaption>
      </figure>
    </li>
  );
};

export default CommentItem;
