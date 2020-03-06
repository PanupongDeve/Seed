const ReduxForm = (state = [] ,action) => {
    switch (action.type) {
        case 'READ' :
            console.log(`READ`,action);
            return state.concat([action.firstname])
        default:
            return state
    }
}

export default ReduxForm