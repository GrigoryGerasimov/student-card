export const actionConsts = {
    GET_CARD: "card/got",
    CREATE_CARD: "card/created",
    EDIT_CARD: "card/edited"
};

const { GET_CARD, CREATE_CARD, EDIT_CARD } = actionConsts;

export const actions = {
    getCard: { type: GET_CARD, payload: "" },
    createCard: { type: CREATE_CARD, payload: "" },
    editCard: { type: EDIT_CARD, payload: "" }
};
