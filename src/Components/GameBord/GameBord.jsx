import style from './GameBord.module.css'
import { useState } from 'react'


export default function GameBord({onSelectkHandler ,bord}){
    
    // const [gameBord , setGameBord] = useState(Bord)
    // const clickHandler = (rowIndex,cellIndex) => {
    //     setGameBord( ()=>{
    //         const newBoard = [...gameBord.map((innerArray)=> [...innerArray])]
    //         newBoard[rowIndex][cellIndex] = activePlayer
    //         return newBoard
    //     }
    //     )
    //     symbolHandler();
    // }


    return (
        <ol className={style.board}>
            {bord.map((row, rowIndex) => (
                <li key={rowIndex} className={style.row}>
                    <ol>
                    {row.map((symbol, cellIndex) => ( 
                        <li key={cellIndex} >
                            <button className={style.cell} onClick={()=>onSelectkHandler(rowIndex,cellIndex)} disabled={symbol != null}>{symbol}</button>
                        </li>
                    ))}</ol>
                </li>
            ))}
        </ol>
    )
}