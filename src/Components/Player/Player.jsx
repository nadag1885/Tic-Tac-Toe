import style from './Player.module.css'
import React , { useState, useEffect } from 'react';

export default function Player({playerName, symbol,isActive}){
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState(playerName);
    const editHandler =()=>{
        setIsEditing(editing => !editing);
    }
    const onCangeHandler = (e)=>{
        setName(e.target.value);
    }

    
    return(
        <li className={`${style.player} ${isActive && style.activePlayer}`}>
            {!isEditing && 
            <span className={style.playerName}  >{name}</span>}
            {isEditing &&
            <input type="text" value={name}  onChange={(e)=> onCangeHandler(e)} className={style.inputName}/>}
            
            <span  className={style.playerSymbol}>{symbol}</span>
            <button className={style.editbtn} onClick={()=> editHandler()}>{isEditing?"Save":"Edit"}</button>
        </li>
    )
}
