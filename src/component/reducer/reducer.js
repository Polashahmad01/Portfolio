// initialState
export const initialState = {
    showNavbar: true,
}


// reducer
const reducer = (state, action) => {
    console.log("ACTION", action);

    switch(action.type) {
        case 'SHOW_NAVBAR':
            return {
                ...state,
                showNavbar: action.showNavbar
            }
        
        case 'HIDE_NAVBAR':
            return {
                ...state,
                showNavbar: action
            }

        default:
            return state;
    }
}

export default reducer;