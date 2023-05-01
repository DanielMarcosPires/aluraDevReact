import LayoutPage from 'Components/LayoutPage'
import React from 'react'
import logo from '../assets/img/Logo.svg'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Menu from 'Components/Menu'
import Community from 'pages/Community'
import CodeEditor from 'pages/CodeEditor'
export default function RoutesPages() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<LayoutPage logo={logo} />}>
                <Route index path="/" element={<CodeEditor />} />
                <Route path="community" element={<Community />}/>
                <Route path='*' element={<h1>Erro</h1>}/>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}
