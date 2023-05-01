import React from 'react'
import style from './scss/style.module.scss'
export default function BoxSelect({children}:any) {
  return (
    <select className={style.BoxSelect}>{children}</select>
  )
}
