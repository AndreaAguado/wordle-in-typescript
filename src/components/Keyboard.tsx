import style from '../styles/keyboard.module.scss';
interface KeyboardProps {
    keys: string[];
    onKeyPressed: (key: string) => void;
}
const Keyboard = ({keys, onKeyPressed}: KeyboardProps ) => {
    const handleInput = (e : any) => {
        onKeyPressed(e.target.textContent);
    }
    const handleEnter = () => {
        onKeyPressed('ENTER');
    }
    const handleDelete = () => {
        onKeyPressed('BACKSPACE');
    }
    return(
        <div className={style.keyboardContainer}>
            <div className={style.row}>
                {
                    Array.from(Array(10)).map((_,i)=>(
                        <button key={i} className={style.key} onClick={handleInput}>
                            {keys[i]}
                        </button>
                    ))
                }
            </div>
            <div className={style.row}>
                {
                    Array.from(Array(10)).map((_,i)=>(
                        <button key={i + 10} className={style.key} onClick={handleInput}>
                             {keys[i + 10]}
                        </button>
                    ))
                }
            </div>
            <div className={style.row}>
                <button className={style.enterKey} onClick={handleEnter}>
                    ENTER
                </button>
                {
                    Array.from(Array(7)).map((_,i)=>(
                        <button key={i + 20} className={style.key} onClick={handleInput}>
                             {keys[i + 20]}
                        </button>
                    ))
                }
                <button className={style.deleteKey} onClick={handleDelete}>
                    DELETE
                </button>
            </div>
        </div>
    )
}
export default Keyboard;