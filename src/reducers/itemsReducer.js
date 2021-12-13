import { typesItems } from "../types/types";
const initialState = {
    items: [],
    updateItem: {
        name: '',
        price: '',
        rebate: '',
        description: '',
        image: '',

    }
}

export const itemsReducer = (state = initialState, action) => {
    switch (action.type) {
        case typesItems.register:
            return {
                items: [action.payload]
            }
        case typesItems.list:
            return {
                items: [...action.payload]
            }
        case typesItems.active:
            return {
                ...state,
                updateItem: action.payload
            }
        case typesItems.delete:
            return {
                ...state,
                items: state.items.filter(art => art.name !== art.payload)
            }
        case typesItems.search:
            return{
                items: action.payload
            }

        default:
            return state

    }
}
