import { WINNER_COMBOS } from "../constants"

export const checkWinnerFrom = (boardToCheck) => {
    // check each winning combination
    for (const combo of WINNER_COMBOS) {
        const [a, b, c] = combo
        if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
        ){
        return boardToCheck[a]
        }
    }
    // if there's no winner
    return null 
}

export const checkEndGame = (newboard) => {
    return newboard.every(square => square !== null)
}