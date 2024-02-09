export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,

    // Remove this after finished developeing *****
    token: '315dkgtohdvld7grh4lc522rwwt4'
}
const reducer = (state, action) => {
    console.log(action);

    // Action => type ,  [payLoad ]
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };


        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            };
        default:
            return state;
    }
}
export default reducer;