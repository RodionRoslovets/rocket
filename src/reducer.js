function reducer(state, action){
    switch(action.type){
        case 'INIT':
            return action.payload
        case 'SEARCH':
            let searchState = state.filter(post => new RegExp(`${action.payload}`, 'i').test(post.post.title))
            
            return searchState
        default:
            return state
    }
}

export default reducer