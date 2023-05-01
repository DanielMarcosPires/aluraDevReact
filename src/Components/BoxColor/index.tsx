import React, { useEffect, useState } from 'react'
import style from './scss/style.module.scss'

export default function BoxColor({color,setColor}:any) {
  function handleColor(e:any) {
    setColor(e);
  }
  useEffect(()=>{
    setColor(color === ""? "#6BD1FF":color);
  },[color])
  
  return (
    <label htmlFor={color} className={style.labelColor} style={{background:color}}>
        <input
        id={color}
        value={color}
        onChange={(e)=>{handleColor(e.target.value)}}
        className={style.BoxColor} type="color"/>
    </label>
  )
}
