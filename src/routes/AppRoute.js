import React from 'react';

import CountTodo from '../containers/CountTodo';
import VisibleCountTodo from '../containers/VisibleCountTodo';



const AppRouter = () => (
    <div>
        <CountTodo />
        <VisibleCountTodo />
    </div>
);

export default AppRouter;