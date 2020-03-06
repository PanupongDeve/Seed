import React from "react";

import CountTodo from "../containers/CountTodo";
import VisibleCountTodo from "../containers/VisibleCountTodo";
import CommentForm from "../containers/CommentForm";
import ShowComment from "../containers/ShowComment";

const AppRouter = () => (
  <div>
    <CommentForm />
    <ShowComment />
  </div>
);

export default AppRouter;
