import React from "react";
import styles from "./styles.module.scss";

const Comment = ({ comment }: any) => (
  <div className={styles.comment}>
    <div className={styles.comment__user}>{comment.user}</div>
    <div
      className={styles.comment__content}
      dangerouslySetInnerHTML={{ __html: comment.content }} />
    {comment.comments ? (
      <div className={styles.nested}>
        {comment.comments.map((nested: any) => (
          <Comment key={nested.id} comment={nested} />
        ))}
      </div>
    ) : null}

  </div>
);

export default Comment;
