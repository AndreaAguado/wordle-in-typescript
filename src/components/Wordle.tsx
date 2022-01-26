import { useEffect, useState } from "react";
import RowCompleted from "./RowCompleted";
import RowEmpty from "./RowEmpty";
import RowCurrent from './RowCurrent';
import { GameStatus } from "./types";
import useWindow from '../hooks/useWindow';
import { getWordOfTheDay, isValidWord } from '../service/request';
import styles from '../styles/wordle.module.scss';
import Keyboard from "./Keyboard";
import Modal from "./Modal";

const Wordle = () => {

    const [wordOfTheDay, setWordOfTheDay] = useState<string>("");
    const [turn, setTurn] = useState<number>(1);
    const [currentWord, setCurrentWord] = useState<string>("");
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
        setWordOfTheDay(getWordOfTheDay());
    },[]);

    const handleKeyDown = (event: KeyboardEvent) => {
        const key = event.key.toUpperCase();
        onKeyPressed(key);
    }

    const onKeyPressed = (key: string) => {
        if(gameStatus !== GameStatus.Playing){
            return;
        }
        if(key === "BACKSPACE" && currentWord.length > 0){
            onDelete();
            return;
        }
        if(key === "ENTER" && currentWord.length === 5 && turn <= 6){
            onEnter();
            return;
        }
        if(currentWord.length >= 5) {
            return;
        }
        if(keys.includes(key)){
            onInput(key);
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

        // validate word
        if(currentWord.length === 5 && !isValidWord(currentWord)){
            alert('Word not in list');
            return;
        }

        // new turn
        setCompletedWords([...completedWords, currentWord]);
        setTurn(turn + 1);
        setCurrentWord("");
        

    }

    useWindow("keydown", handleKeyDown);

    return(
        <>       
        {
            gameStatus === GameStatus.Won ? 
            <Modal type="won" completedWords={completedWords} solution={wordOfTheDay}/> : 
            gameStatus === GameStatus.Lost ? 
            <Modal type="lost" completedWords={completedWords} solution={wordOfTheDay}/> : 
            null
        }
            <div className={styles.mainContainer}>
                {completedWords.map((word,i)=>(
                        <RowCompleted key={i} word={word} solution={wordOfTheDay}/>
                ))}

                {
                gameStatus === GameStatus.Playing? ( <RowCurrent word ={currentWord} />) :  null }
                {
                    Array.from(Array(6 - turn)).map((_,i)=>(
                        <RowEmpty key={i}/>
                    ))
                }
            </div>
            <Keyboard keys={keys} onKeyPressed={onKeyPressed}/>
        </>
    )
}
export default Wordle;