const ReduxForm = (state = 0 ,action) => {
    switch (action.type) {
        case 'READ' :
            return state + `gg nice`
        default:
            return state
    }
}

export default ReduxForm