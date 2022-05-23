import { ADD_WORD, SET_WORDS, setWords } from "./actions";

const initialState = {
    words: []
}

export const wordReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_WORD: {
            return {...state, words: [...state.words, action.playload]}
        }

        case SET_WORDS: {
            return{...state, words: [...state.words, action.playload]}
        }

        default:
            return state
    }
}

export const saveWords = () => async (dispatch, getState) => {
    const words = getState().words;
    await fetch("http://localhost:3000", {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
        body: JSON.stringify(words)
    })
}

export const loadWords = () => async (dispatch, getState) => {
    const words = await fetch("http://localhost:3000/score")
    dispatch(setWords(words))
}

