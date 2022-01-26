import style from '../styles/keyboard.module.scss';
interface KeyboardProps {
    keys: string[];
    onInput: (letter: string) => void;
    onEnter: () => void;
    onDelete: () => void;

}
const Keyboard = ({keys, onInput, onEnter, onDelete }: KeyboardProps ) => {
    const handleInput = (e : any) => {
        onInput(e.target.textContent);
    }
    const handleEnter = () => {
        onEnter();
    }
    const handleDelete = () => {
        onDelete();
    }
    return(
        <div className={style.keyboardContainer}>
            {
                Array.from(Array(10)).map((_,i)=>(
                    <button key={i} className={style.key} onClick={handleInput}>
                        {keys[i]}
                    </button>
                ))
            }
            {
                Array.from(Array(10)).map((_,i)=>(
                    <button key={i + 10} className={style.key} onClick={handleInput}>
                         {keys[i + 10]}
                    </button>
                ))
            }
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
    )
}
export default Keyboard;