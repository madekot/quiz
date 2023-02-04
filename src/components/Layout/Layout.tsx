import css from './Layout.module.scss'

import {Footer} from '../Footer'
import {Header} from '../Header'

import {Outlet} from 'react-router-dom'

export const Layout = () => {
  return (
    <div className={css.app}>
      <Header />
      <main className={css.main}>
        <Outlet/>
      </main>
      <Footer />
    </div>
  )
}
