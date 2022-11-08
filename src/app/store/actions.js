export const actionTypes = {
    GET_CARD: "card/got",
    CREATE_CARD: "card/created",
    CHANGE_CARD: "card/changed",
    DELETE_CARD: "card/deleted"
};

const { GET_CARD, CREATE_CARD, CHANGE_CARD, DELETE_CARD } = actionTypes;

export const actions = {
    getCard: () => ({ type: GET_CARD }),
    createCard: data => ({ type: CREATE_CARD, payload: data }),
    changeCard: data => ({ type: CHANGE_CARD, payload: data }),
    deleteCard: () => ({ type: DELETE_CARD })
};
