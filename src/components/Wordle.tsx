import { useEffect, useState } from "react";
import RowCompleted from "./RowCompleted";
import RowEmpty from "./RowEmpty";
import RowCurrent from './RowCurrent';
import { GameStatus } from "./types";
import useWindow from '../hooks/useWindow';

const Wordle = () => {

    const [wordOfTheDay, setWordOfTheDay] = useState<string>("");
    const [turn, setTurn] = useState<number>(1);
    const [currentWord, setCurrentWord] = useState<string>("");
    const [completedWord, setCompletedWord] = useState<string>("");
    const [completedWords, setCompletedWords] = useState<string[]>([]);
    const [gameStatus, setGameStatus] = useState<GameStatus>(GameStatus.Playing);

    const keys = [
        "Q",
        "W",
        "E",
        "R",
        "T",
        "Y",
        "U",
        "I",
        "O",
        "P",
        "A",
        "S",
        "D",
        "F",
        "G",
        "H",
        "J",
        "K",
        "L",
        "Ñ",
        "Z",
        "X",
        "C",
        "V",
        "B",
        "N",
        "M",
      ];
    
    useEffect(()=>{
        setWordOfTheDay('break');
    },[]);

    const handleKeyDown = (event: KeyboardEvent) => {
        const letter = event.key.toUpperCase();
        if(event.key === "Backspace" && currentWord.length > 0){
            onDelete();
            return;
        }
        if(event.key === "Enter" && currentWord.length === 5){
            onEnter();
            return;
        }
        if(currentWord.length >= 5) {
            return;
        }
        if(keys.includes(letter)){
            onInput(letter);
            return;
        }
    }

    const onInput = (letter: string) => {
        const newWord = currentWord + letter;
        setCurrentWord(newWord);

    }

    const onDelete = () => {
        const newWord = currentWord.slice(0,-1);
        setCurrentWord(newWord);
    }

    const onEnter = () => {
        if(currentWord === wordOfTheDay){
            // user wins
            setCompletedWords([...completedWords, currentWord]);
            setGameStatus(GameStatus.Won)
            return;
        }
        if(turn === 6){
            // user loses
            setCompletedWords([...completedWords, currentWord]);
            setGameStatus(GameStatus.Lost);
            return;
        }

        setCompletedWords([...completedWords, currentWord]);
        setTurn(turn + 1);
        setCurrentWord("");
        

    }

    useWindow("keydown", handleKeyDown);

    return(
        <div>
            <RowCompleted word="sabio" solution={wordOfTheDay}/>
            <RowCompleted word="sabio" solution={wordOfTheDay}/>
            <RowCurrent word={currentWord}/>
            <RowEmpty/>
            <RowEmpty/>
            <RowEmpty/>
        </div>
    )
}
export default Wordle;