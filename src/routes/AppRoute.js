import React from 'react';

import CountTodo from '../containers/CountTodo';
import VisibleCountTodo from '../containers/VisibleCountTodo';
import CommentForm from '../components/CommentForm'
import ShowComment from '../components/ShowComment'


const AppRouter = () => (
    <div>
       <CommentForm />
       <ShowComment />
    </div>
);

export default AppRouter;