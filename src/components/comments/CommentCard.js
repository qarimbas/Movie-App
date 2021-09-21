import classes from "./CommentCard.module.css";

const CommentCard = (props) => {
  return <div className={classes.card}>{props.children}</div>;
};

export default CommentCard;
