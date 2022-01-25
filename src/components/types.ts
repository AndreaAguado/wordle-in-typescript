// literal types for the status of each letter box

export type BoxStatus = "absent" | "present" | "correct" | "empty" | "edit";

//type for the status of the game

export const enum GameStatus {
    Playing,
    Won,
    Lost
}

