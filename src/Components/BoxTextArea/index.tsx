import React from 'react'
import style from './scss/style.module.scss'
export default function BoxTextArea({text}:any) {
  return (
    <label className={style.BoxTextArea} htmlFor={`textArea`}>
        <textarea id={`textArea`} maxLength={450} placeholder={text}></textarea>
    </label>
  )
}
