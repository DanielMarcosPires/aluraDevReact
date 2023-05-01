import React from 'react'
import style from './scss/style.module.scss'
export default function BoxButton({text,color}:any) {
  return (
    <button style={{background:color}} className={style.boxButton}>{text}</button>
  )
}
