import React, { useState } from 'react'
import svgScript from 'assets/img/Vector-1.svg'
import svgCommunity from 'assets/img/Vector.svg'
import style from './scss/style.module.scss'

import { Link, Outlet, useLocation } from 'react-router-dom'
import { ReactSVG } from 'react-svg'
import { CgProfile } from 'react-icons/cg'
import { BiCodeAlt } from 'react-icons/bi'

import BoxInput from 'Components/BoxInput'


export default function AppLayout({ logo }: any) {


  return (
    <>
      <header className={style.header}>
        <div className={style.headerMargin}>
          <img src={logo} alt="AluraDev logo" />
          <BoxInput nome="Pesquisa" type="search" text="Busque por algo" />
          <div className={style.profile}>
            <CgProfile color={"#fff"} size={30} />
            <p>nome</p>
          </div>
        </div>
      </header>
      <main className={style.content}>
        <aside className={style.contentSideBar}>
          <h2>Menu:</h2>
          <nav className={style.contentSideBarNavegation}>
            <Link
              className={
                location.pathname === "/" ?
                  style.selected : style.contentSideBarNavegationAncorer
              }
              to={'/'}
            >
              <ReactSVG className={style.LinkImage} src={svgScript} /> Code Editor
            </Link>
            <Link
              className={
                location.pathname === "/community" ?
                  style.selected : style.contentSideBarNavegationAncorer
              } to={'community'}>
              <ReactSVG className={style.LinkImage} src={svgCommunity} /> Community
            </Link>
          </nav>
        </aside>
        <Outlet />
      </main>
    </>
  )
}
