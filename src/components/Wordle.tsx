import { useEffect, useState } from "react";
import RowCompleted from "./RowCompleted";
import RowEmpty from "./RowEmpty";
import RowCurrent from "./RowCurrent";
import { GameStatus, KeyStatus } from "./types";
import useWindow from "../hooks/useWindow";
import { getWordOfTheDay, isValidWord } from "../service/request";
import styles from "../styles/wordle.module.scss";
import Keyboard from "./Keyboard";
import Modal from "./Modal";
import Rules from "./Rules";
import Options from "./Options";

export interface KeyboardKey {
  letterValue: string;
  letterStatus: KeyStatus;
}

interface ModalProps {
  resultsHidden: boolean;
  setResultsHidden: React.Dispatch<React.SetStateAction<boolean>>;
  rulesHidden: boolean;
  setRulesHidden: React.Dispatch<React.SetStateAction<boolean>>;
  optionsHidden: boolean;
  setOptionsHidden: React.Dispatch<React.SetStateAction<boolean>>;
  colorBlindMode: boolean;
  setColorBlindMode: React.Dispatch<React.SetStateAction<boolean>>;
  accessibilityMode: boolean;
  setAccessibilityMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const Wordle = ({
  resultsHidden,
  setResultsHidden,
  rulesHidden,
  setRulesHidden,
  optionsHidden,
  setOptionsHidden,
  colorBlindMode,
  setColorBlindMode,
  accessibilityMode,
  setAccessibilityMode,
}: ModalProps) => {
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

  const [keysStates, setKeysStates] = useState<KeyboardKey[]>([
    { letterValue: "Q", letterStatus: "unknown" },
    { letterValue: "W", letterStatus: "unknown" },
    { letterValue: "E", letterStatus: "unknown" },
    { letterValue: "R", letterStatus: "unknown" },
    { letterValue: "T", letterStatus: "unknown" },
    { letterValue: "Y", letterStatus: "unknown" },
    { letterValue: "U", letterStatus: "unknown" },
    { letterValue: "I", letterStatus: "unknown" },
    { letterValue: "O", letterStatus: "unknown" },
    { letterValue: "P", letterStatus: "unknown" },
    { letterValue: "A", letterStatus: "unknown" },
    { letterValue: "S", letterStatus: "unknown" },
    { letterValue: "D", letterStatus: "unknown" },
    { letterValue: "F", letterStatus: "unknown" },
    { letterValue: "G", letterStatus: "unknown" },
    { letterValue: "H", letterStatus: "unknown" },
    { letterValue: "J", letterStatus: "unknown" },
    { letterValue: "K", letterStatus: "unknown" },
    { letterValue: "L", letterStatus: "unknown" },
    { letterValue: "Ñ", letterStatus: "unknown" },
    { letterValue: "Z", letterStatus: "unknown" },
    { letterValue: "X", letterStatus: "unknown" },
    { letterValue: "C", letterStatus: "unknown" },
    { letterValue: "V", letterStatus: "unknown" },
    { letterValue: "B", letterStatus: "unknown" },
    { letterValue: "N", letterStatus: "unknown" },
    { letterValue: "M", letterStatus: "unknown" },
  ]);

  useEffect(() => {
    setWordOfTheDay(getWordOfTheDay());
  }, []);

  useEffect(() => {
    function colorVirtualKeys(word: string): void {
      word.split("").map((letter, i) => checkLetter(letter, i));
    }
    if (completedWords.length > 0) {
      colorVirtualKeys(completedWords[completedWords.length - 1]);
    }
  });

  const handleKeyDown = (event: KeyboardEvent) => {
    const key = event.key.toUpperCase();
    onKeyPressed(key);
  };

  const onKeyPressed = (key: string) => {
    if (gameStatus !== GameStatus.Playing) {
      return;
    }
    if (key === "BACKSPACE" && currentWord.length > 0) {
      onDelete();
      return;
    }
    if (key === "ENTER" && currentWord.length === 5 && turn <= 6) {
      onEnter();
      return;
    }
    if (currentWord.length >= 5) {
      return;
    }
    if (keys.includes(key)) {
      onInput(key);
      return;
    }
  };

  const onInput = (letter: string) => {
    const newWord = currentWord + letter;
    setCurrentWord(newWord);
  };

  const onDelete = () => {
    const newWord = currentWord.slice(0, -1);
    setCurrentWord(newWord);
  };

  const onEnter = async () => {
    if (currentWord === wordOfTheDay) {
      // user wins
      setCompletedWords([...completedWords, currentWord]);
      setGameStatus(GameStatus.Won);
      return;
    }
    if (turn === 6) {
      // user loses
      setCompletedWords([...completedWords, currentWord]);
      setGameStatus(GameStatus.Lost);
      return;
    }

    // validate word
    const validWord = await isValidWord(currentWord);
    if (currentWord.length === 5 && !validWord) {
      alert("Word not in list");
      return;
    }

    // new turn
    setCompletedWords([...completedWords, currentWord]);
    setTurn(turn + 1);
    setCurrentWord("");
  };

  function checkLetter(letter: string, pos: number): void {
    if (wordOfTheDay.includes(letter)) {
      if (wordOfTheDay[pos] === letter) {
        findLetterOfKeyboard(letter, "correct");
      } else {
        findLetterOfKeyboard(letter, "present");
      }
    } else {
      findLetterOfKeyboard(letter, "absent");
    }
  }

  function findLetterOfKeyboard(letter: string, status: KeyStatus) {
    let index = keysStates.findIndex((key) => {
      return key.letterValue === letter;
    });
    const aux = keysStates;
    aux[index].letterStatus = status;
    setKeysStates(aux);
  }

  useWindow("keydown", handleKeyDown);

  return (
    <>
      {gameStatus === GameStatus.Won ? (
        <Modal
          type="won"
          completedWords={completedWords}
          solution={wordOfTheDay}
          resultsHidden={resultsHidden}
          setResultsHidden={setResultsHidden}
          gameStatus={gameStatus}
        />
      ) : gameStatus === GameStatus.Lost ? (
        <Modal
          type="lost"
          completedWords={completedWords}
          solution={wordOfTheDay}
          resultsHidden={resultsHidden}
          setResultsHidden={setResultsHidden}
          gameStatus={gameStatus}
        />
      ) : null}
      <Rules rulesHidden={rulesHidden} setRulesHidden={setRulesHidden} />
      {optionsHidden ? null : (
        <Options
          setOptionsHidden={setOptionsHidden}
          colorBlindMode={colorBlindMode}
          setColorBlindMode={setColorBlindMode}
          accessibilityMode={accessibilityMode}
          setAccessibilityMode={setAccessibilityMode}
        />
      )}

      <div className={styles.mainContainer}>
        {completedWords.map((word, i) => (
          <RowCompleted key={i} word={word} solution={wordOfTheDay} />
        ))}

        {gameStatus === GameStatus.Playing ? (
          <RowCurrent word={currentWord} />
        ) : null}
        {Array.from(Array(6 - turn)).map((_, i) => (
          <RowEmpty key={i} />
        ))}
      </div>
      <Keyboard
        keys={keys}
        onKeyPressed={onKeyPressed}
        keysStates={keysStates}
      />
    </>
  );
};
export default Wordle;
