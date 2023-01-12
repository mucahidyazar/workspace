import React from "react";
import Comment from "./Comment";

export default ({ comments }: any) => (
  <React.Fragment>
    {comments.map((comment: any) => (
      <Comment key={comment.id} comment={comment} />
    ))}
  </React.Fragment>
);
