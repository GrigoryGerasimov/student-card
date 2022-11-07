export const actionTypes = {
    GET_CARD: "card/got",
    CREATE_CARD: "card/created",
    CHANGE_CARD: "card/changed",
    EDIT_CARD: "card/edited"
};

const { GET_CARD, CREATE_CARD, CHANGE_CARD, EDIT_CARD } = actionTypes;

export const actions = {
    getCard: data => ({ type: GET_CARD, payload: data }),
    createCard: data => ({ type: CREATE_CARD, payload: data }),
    changeCard: data => ({ type: CHANGE_CARD, payload: data }),
    editCard: data => ({ type: EDIT_CARD, payload: data })
};
