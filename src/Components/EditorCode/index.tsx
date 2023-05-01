import React from 'react'
import style from './scss/style.module.scss'
export default function EditorCode({children,cor}:any) {
  return (
    <div className={style.EditorCode} style={{background:cor}}>
        {children}
    </div>
  )
}
