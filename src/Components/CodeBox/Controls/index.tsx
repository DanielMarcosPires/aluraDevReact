import React from 'react'
import style from './scss/style.module.scss'
export default function Controls() {
  return (
    <div className={style.controls}>
        <span style={{background:"#FF5F56"}} className={style.botao}></span>
        <span style={{background:"#FFBD2E"}} className={style.botao}></span>
        <span style={{background:"#27C93F"}} className={style.botao}></span>
    </div>
  )
}
