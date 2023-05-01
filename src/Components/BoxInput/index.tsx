import React from 'react'
import style from './scss/style.module.scss'
export default function BoxInput({text, type,nome}:any) {
  return (
    <label htmlFor={`inputSearch${nome}`} className={style.InputStylized}>
        <input type={type} id={`inputSearch${nome}`} placeholder={text}/>
    </label>
  )
}
