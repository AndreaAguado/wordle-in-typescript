import { useEffect, useState } from "react";
import RowCompleted from "./RowCompleted";
import RowEmpty from "./RowEmpty";
import RowCurrent from './RowCurrent';
import { GameStatus } from "./types";

const Wordle = () => {

    const [wordOfTheDay, setWordOfTheDay] = useState<string>("");
    const [turn, setTurn] = useState<number>(1);
    const [currentWord, setCurrentWord] = useState<string>("");
    const [completedWord, setCompletedWord] = useState<string>("");
    const [completedWords, setCompletedWords] = useState<string[]>([]);
    const [gameStatus, setGameStatus] = useState<GameStatus>(GameStatus.Playing);

    useEffect(()=>{
        setWordOfTheDay('break');
    },[]);

    return(
        <div>
            <RowCompleted word="sabio" solution={wordOfTheDay}/>
            <RowCompleted word="sabio" solution={wordOfTheDay}/>
            <RowCurrent word="sab"/>
            <RowEmpty/>
            <RowEmpty/>
            <RowEmpty/>
        </div>
    )
}
export default Wordle;