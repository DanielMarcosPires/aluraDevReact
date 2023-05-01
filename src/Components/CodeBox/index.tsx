import React from 'react'
import Controls from './Controls'

export default function CodeBox({text}:any) {
  return (
    <pre>
        <Controls />
        {text}
    </pre>
  )
}
