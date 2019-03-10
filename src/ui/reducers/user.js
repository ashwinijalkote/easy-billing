

export default function (state = {}, action) {

    let newState = null;
    let {type, ...data} = action
    if (type === "USER_SIGNUP") {
        newState = {
            ...state,
            user: {
                ...data
            }
        };
        return newState;
    }
    return state;
}