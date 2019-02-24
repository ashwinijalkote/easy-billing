

export default function (state = {}, action) {

    let newState = null;
    if (action.type === "USER_SIGNIN") {
        newState = {
            ...state,
            user: {
                username: action.name,
            }
        };
        return newState;
    }
    return state;
}