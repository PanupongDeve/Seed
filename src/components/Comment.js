import React from "react";
import { Toast, ToastBody, ToastHeader } from "reactstrap";
const Comment = ({ name, message }) => (
  <div className="p-3 my-2 rounded">
       <Toast>
          <ToastHeader>
          {name}
          </ToastHeader>
          <ToastBody>
          {message}
          </ToastBody>
        </Toast>

  </div>
);

export default Comment;
