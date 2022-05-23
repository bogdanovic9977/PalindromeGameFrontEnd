export const ADD_WORD = "ADD_WORD";
export const SET_WORDS = "SET_WORDS";

export const addWord = (word) => ({
    type: "ADD_WORD",
    playload: word,

});

export const setWords = (words) => ({
    type: "SET_WORDS",
    playload: words,

});