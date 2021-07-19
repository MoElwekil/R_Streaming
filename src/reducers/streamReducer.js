const streamReducer = (state = {}, action) => {
    switch(action.type){
        case 'CREATE_STREAM':
            return {...state}

        default: 
            return state;
    }
}