const ReduxForm = (state = 0 ,action) => {
    switch (action.type) {
        case 'READ' :
            console.log(`READ`,action);
            return state
        default:
            return state
    }
}

export default ReduxForm