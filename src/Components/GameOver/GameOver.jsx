import style from './GameOver.module.css'

export default function GameOver({winner , handelRestart}){

    return(
        <div className={style.GameOverScreen}>
            <div  className={style.GameOver}>Game Over!</div>
            {winner && <div className={style.winner}>{winner} is the Winner</div>} 
            <button onClick={handelRestart} className={style.restartBtn}>Restart</button>

        </div>
    )
}