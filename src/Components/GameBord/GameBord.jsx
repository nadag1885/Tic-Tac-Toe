import style from './GameBord.module.css'
import { useState } from 'react'

const Bord = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]
export default function GameBord({onSelectkHandler , turns}){
    let gameBord=Bord; 
    for(const turn of turns){
        const {squar , player }=turn;
        const {row,col}=squar;
        gameBord[row][col]=player;
    }
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
            {gameBord.map((row, rowIndex) => (
                <li key={rowIndex} className={style.row}>
                    <ol>
                    {row.map((symbol, cellIndex) => ( 
                        <li key={cellIndex} >
                            <button className={style.cell} onClick={()=>onSelectkHandler(rowIndex,cellIndex)}>{symbol}</button>
                        </li>
                    ))}</ol>
                </li>
            ))}
        </ol>
    )
}