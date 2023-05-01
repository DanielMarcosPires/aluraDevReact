import React, { useState } from 'react'
import style from './scss/style.module.scss'

import { Link } from 'react-router-dom'
import EditorCode from 'Components/EditorCode'
import CodeBox from 'Components/CodeBox'
import BoxInput from 'Components/BoxInput'
import BoxButton from 'Components/BoxButton'
import BoxTextArea from 'Components/BoxTextArea'
import BoxSelect from 'Components/BoxSelect'
import BoxColor from 'Components/BoxColor'


export default function CodeEditor() {

  const code = `
const pluckDeep = key => obj => key.split('.').reduce((accum, key) => accum[key], obj)

const compose = (...fns) => res => fns.reduce((accum, next) => next(accum), res)

const unfold = (f, seed) => {
  const go = (f, seed, acc) => {
    const res = f(seed)
    return res ? go(f, res[1], acc.concat([res[0]])) : acc
  }
  return go(f, seed, [])
}
  `
  const [color, setColor] = useState('')
  const [description, setDescription] = useState('');

  return (
    <section className={style.content}>
      <div className={style.contentMargin}>
        <EditorCode cor={color}>
          <CodeBox text={code} />
        </EditorCode>
        <BoxButton color={"#5081FB14"} text={"Visualizar com o highlight"} />
      </div>
      <form onSubmit={(e) => { e.preventDefault() }} className={style.contentForm}>
        <h3>seu projeto</h3>
        <BoxInput nome="ProjectName" type="text" text="Nome do seu projeto" />
        <BoxTextArea text="Descrição do seu projeto" />

        <h3>Personalização</h3>
        <BoxSelect>
          <option>JavaScript</option>
          <option>HTML</option>
          <option>CSS</option>
        </BoxSelect>
        <BoxColor color={color} setColor={setColor}/>
        <BoxButton color={"#5081FB"} text={"Salvar projeto"} />
      </form>
    </section>
  )
}
